"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

/* ── Config ─────────────────────────────────────────────────────────────────
   All positions in SVG / y-down coordinates (0–400 × 0–400).
   tv() flips y → Three.js y-up space.
─────────────────────────────────────────────────────────────────────────── */
const W = 400;
const H = 400;

const GOLD      = 0xC5A55A;
const WARM_GOLD = 0xFFD700;   // particle: slightly brighter
const CREAM     = 0xF5F0E8;

interface StateConfig {
  id:     string;
  x: number; y: number;   // node position (SVG coords)
  cx: number; cy: number; // shield border contact point (SVG coords)
  delay:  number;         // ms from start when path begins drawing
  jitter: number;         // wandering chaos (0.10 = smooth, 0.18 = organic)
}

const STATES: StateConfig[] = [
  { id: "ME", x: 310, y:  80, cx: 305, cy:  45, delay:  600, jitter: 0.18 },
  { id: "VT", x:  90, y:  95, cx:  75, cy: 110, delay:  920, jitter: 0.15 },
  { id: "NH", x: 265, y: 145, cx: 325, cy: 155, delay: 1240, jitter: 0.10 },
  { id: "MA", x: 175, y: 295, cx: 102, cy: 300, delay: 1560, jitter: 0.14 },
  { id: "RI", x: 260, y: 310, cx: 287, cy: 313, delay: 1880, jitter: 0.12 },
];

const PATH_DRAW_MS   = 600;
const COMPLETION_MS  = STATES[4].delay + PATH_DRAW_MS; // 2480
const IDLE_START_MS  = COMPLETION_MS + 600;            // 3080
const PATH_SAMPLES   = 60;
const TRAIL_LENGTH   = 10;
const NODE_STAGGER   = 120;  // ms between each node spark
const NODE_SPARK_MS  = 300;  // node spark-to-settle duration

/* ── Coordinate helper ───────────────────────────────────────────────────── */
function tv(x: number, y: number, z = 0): THREE.Vector3 {
  return new THREE.Vector3(x, H - y, z);
}

/* ── Wandering path ─────────────────────────────────────────────────────────
   Organic path from node → shield border contact.
   Jitter decreases near end so the path snaps cleanly to the border.
─────────────────────────────────────────────────────────────────────────── */
function createWanderingPath(
  sx: number, sy: number,
  ex: number, ey: number,
  jitterScale: number,
): THREE.CatmullRomCurve3 {
  const start  = tv(sx, sy);
  const end    = tv(ex, ey);
  const segs   = 20;
  const segLen = start.distanceTo(end) / segs;

  const pts: THREE.Vector3[] = [start.clone()];
  let curr = start.clone();
  let dir  = end.clone().sub(start).normalize();

  for (let i = 1; i < segs; i++) {
    const t = i / segs;
    const j = jitterScale * (1 - t * 0.65);
    dir.x += (Math.random() - 0.5) * j;
    dir.y += (Math.random() - 0.5) * j;
    dir.normalize();
    // Pull direction increasingly toward end as t → 1
    dir.lerp(end.clone().sub(curr).normalize(), t * 0.4).normalize();
    curr = curr.clone().add(dir.clone().multiplyScalar(segLen));
    pts.push(curr.clone());
  }
  pts.push(end.clone());
  return new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.5);
}

/* ── Component ─────────────────────────────────────────────────────────────── */
export function FiveStatesOne() {
  const containerRef = useRef<HTMLDivElement>(null);
  const threeRef     = useRef<HTMLCanvasElement>(null);
  const svgRef       = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const canvas = threeRef.current;
    const svgEl  = svgRef.current;
    if (!canvas || !svgEl) return;
    const svg    = svgEl; // narrowed non-null for closure use

    /* ── Three.js init ────────────────────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(canvas.offsetWidth || 320, canvas.offsetHeight || 360);
    renderer.setClearColor(0x000000, 0);

    const scene  = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, W, H, 0, 0.1, 1000);
    camera.position.z = 10;

    /* ── Shared color references ──────────────────────────────────────────── */
    const goldColor  = new THREE.Color(GOLD);
    const creamColor = new THREE.Color(CREAM);
    const tmpColor   = new THREE.Color();

    /* ── Nodes ────────────────────────────────────────────────────────────── */
    interface NodeObj {
      nodeMat: THREE.MeshBasicMaterial;
      haloMat: THREE.MeshBasicMaterial;
      phase:   number;
    }

    const nodeObjs: NodeObj[] = STATES.map((s, i) => {
      const pos = tv(s.x, s.y);

      const nodeGeo = new THREE.CircleGeometry(4, 12);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: GOLD, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      scene.add(nodeMesh);

      const haloGeo = new THREE.CircleGeometry(14, 16);
      const haloMat = new THREE.MeshBasicMaterial({
        color: GOLD, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.position.copy(pos);
      scene.add(haloMesh);

      return { nodeMat, haloMat, phase: (i / STATES.length) * Math.PI * 2 };
    });

    /* ── Paths ────────────────────────────────────────────────────────────── */
    interface PathObj {
      curve:       THREE.CatmullRomCurve3;
      geo:         THREE.BufferGeometry;
      mat:         THREE.LineBasicMaterial;
      illuminated: boolean;
    }

    const pathObjs: PathObj[] = STATES.map((s) => {
      const curve   = createWanderingPath(s.x, s.y, s.cx, s.cy, s.jitter);
      const sampled = curve.getPoints(PATH_SAMPLES);

      const nPts      = PATH_SAMPLES + 1;
      const positions = new Float32Array(nPts * 3);
      const colors    = new Float32Array(nPts * 3);

      // Pre-fill positions and gold→cream vertex colors — never updated per-frame
      sampled.forEach((v, j) => {
        positions[j * 3]     = v.x;
        positions[j * 3 + 1] = v.y;
        positions[j * 3 + 2] = v.z;

        const c = j / PATH_SAMPLES;
        tmpColor.copy(goldColor).lerp(creamColor, c);
        colors[j * 3]     = tmpColor.r;
        colors[j * 3 + 1] = tmpColor.g;
        colors[j * 3 + 2] = tmpColor.b;
      });

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geo.setAttribute("color",    new THREE.BufferAttribute(colors, 3));
      geo.setDrawRange(0, 0);
      geo.computeBoundingSphere();

      const mat = new THREE.LineBasicMaterial({
        vertexColors: true, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      scene.add(new THREE.Line(geo, mat));

      return { curve, geo, mat, illuminated: false };
    });

    /* ── Particles ────────────────────────────────────────────────────────── */
    interface ParticleObj {
      mat:            THREE.MeshBasicMaterial;
      mesh:           THREE.Mesh;
      trailLine:      THREE.Line;
      trailGeo:       THREE.BufferGeometry;
      trailMat:       THREE.LineBasicMaterial;
      trailPositions: Float32Array;
      trailColors:    Float32Array;
      history:        THREE.Vector3[];
      phaseOffset:    number;
    }

    const particleObjs: ParticleObj[] = STATES.map((s, i) => {
      const pGeo = new THREE.CircleGeometry(3, 8);
      const pMat = new THREE.MeshBasicMaterial({
        color: WARM_GOLD, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const mesh = new THREE.Mesh(pGeo, pMat);
      mesh.position.copy(tv(s.x, s.y));
      scene.add(mesh);

      const trailPositions = new Float32Array(TRAIL_LENGTH * 3);
      const trailColors    = new Float32Array(TRAIL_LENGTH * 3);
      const trailGeo = new THREE.BufferGeometry();
      trailGeo.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3));
      trailGeo.setAttribute("color",    new THREE.BufferAttribute(trailColors, 3));
      trailGeo.setDrawRange(0, 0);
      const trailMat  = new THREE.LineBasicMaterial({
        vertexColors: true, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const trailLine = new THREE.Line(trailGeo, trailMat);
      scene.add(trailLine);

      return {
        mat: pMat, mesh,
        trailLine, trailGeo, trailMat, trailPositions, trailColors,
        history: [], phaseOffset: i / STATES.length,
      };
    });

    /* ── Path draw-on (just advances drawRange) ───────────────────────────── */
    function updatePathGeo(pi: number, t: number) {
      const n = Math.max(2, Math.min(Math.floor(t * PATH_SAMPLES) + 1, PATH_SAMPLES + 1));
      pathObjs[pi].geo.setDrawRange(0, n);
    }

    /* ── Particle position + trail ────────────────────────────────────────── */
    function updateParticle(pi: number, pos: THREE.Vector3, opacity: number) {
      const po = particleObjs[pi];
      po.mesh.position.copy(pos);
      po.mat.opacity = opacity;

      // Clear trail on discontinuous jump (loop wrap-around)
      const last = po.history[po.history.length - 1];
      if (last && pos.distanceTo(last) > 60) po.history = [];

      po.history.push(pos.clone());
      if (po.history.length > TRAIL_LENGTH) po.history.shift();

      const n = po.history.length;
      for (let j = 0; j < n; j++) {
        const v    = po.history[j];
        const fade = j / Math.max(n - 1, 1);
        po.trailPositions[j * 3]     = v.x;
        po.trailPositions[j * 3 + 1] = v.y;
        po.trailPositions[j * 3 + 2] = v.z;
        po.trailColors[j * 3]     = goldColor.r * fade;
        po.trailColors[j * 3 + 1] = goldColor.g * fade;
        po.trailColors[j * 3 + 2] = goldColor.b * fade;
      }
      (po.trailGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (po.trailGeo.attributes.color    as THREE.BufferAttribute).needsUpdate = true;
      po.trailGeo.setDrawRange(0, n);
      po.trailMat.opacity = opacity * 0.6;
    }

    /* ── SVG: reveal one border segment ──────────────────────────────────── */
    function revealBorderSegment(id: string) {
      const seg = svg.querySelector<SVGPathElement>(`#border-seg-${id}`);
      if (!seg) return;
      const len = seg.getTotalLength();
      seg.setAttribute("opacity", "1");
      gsap.set(seg, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(seg, {
        strokeDashoffset: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete() {
          seg.style.filter = "drop-shadow(0 0 3px rgba(197,165,90,0.53))";
        },
      });
    }

    /* ── Three.js: contact flash ring ─────────────────────────────────────── */
    function spawnContactFlash(pos: THREE.Vector3) {
      const rGeo = new THREE.RingGeometry(2, 8, 24);
      const rMat = new THREE.MeshBasicMaterial({
        color: 0xFFFFAA, transparent: true, opacity: 1,
        blending: THREE.AdditiveBlending, depthWrite: false,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(rGeo, rMat);
      ring.position.set(pos.x, pos.y, 1);
      scene.add(ring);
      gsap.to(ring.scale, { x: 3, y: 3, duration: 0.4, ease: "power2.out" });
      gsap.to(rMat, {
        opacity: 0, duration: 0.4,
        onComplete() { scene.remove(ring); rGeo.dispose(); rMat.dispose(); },
      });
    }

    /* ── SVG: completion flash ────────────────────────────────────────────── */
    function triggerCompletionFlash() {
      const segs     = Array.from(svg.querySelectorAll<SVGElement>(".shield-seg"));
      const interior = svg.querySelector<SVGElement>("#crest-interior");
      gsap.to(segs, { filter: "drop-shadow(0 0 10px #C5A55A)", duration: 0.08 });
      gsap.to(segs, {
        filter: "drop-shadow(0 0 4px rgba(197,165,90,0.4))",
        duration: 0.35, delay: 0.08,
      });
      if (interior) {
        gsap.to(interior, { opacity: 0.65, duration: 0.08 });
        gsap.to(interior, { opacity: 0.40, duration: 0.35, delay: 0.08 });
      }
    }

    /* ── RAF loop ─────────────────────────────────────────────────────────── */
    let animId         = 0;
    let startTime      = 0;
    let isVisible      = true;
    let completionDone = false;

    const tick = (ts: number) => {
      animId = requestAnimationFrame(tick);
      if (!isVisible) return;

      if (startTime === 0) startTime = ts;
      const elapsed = ts - startTime;
      const isIdle  = elapsed > IDLE_START_MS;

      /* Phase 1: Node materialization ─────────────────────────────────────── */
      nodeObjs.forEach((no, i) => {
        const ne = elapsed - i * NODE_STAGGER;
        if (ne <= 0) {
          no.nodeMat.opacity = 0;
          no.haloMat.opacity = 0;
        } else if (ne < NODE_SPARK_MS) {
          const t     = ne / NODE_SPARK_MS;
          // Quick flare 0→1 in first 20%, settle to 0.7 over remaining 80%
          const spark = t < 0.2 ? t / 0.2 : 1 - (t - 0.2) / 0.8 * 0.3;
          no.nodeMat.opacity = spark;
          no.haloMat.opacity = spark * 0.28;
        } else {
          const pulse        = 0.55 + 0.45 * Math.sin(elapsed * 0.0014 + no.phase);
          no.nodeMat.opacity = pulse;
          no.haloMat.opacity = pulse * 0.22;
        }
      });

      /* Phase 2: Path drawing + particle + border illumination ─────────────── */
      let allDone = true;

      STATES.forEach((s, i) => {
        const po      = pathObjs[i];
        const pao     = particleObjs[i];
        const pElapsed = elapsed - s.delay;

        if (pElapsed <= 0) { allDone = false; return; }

        const drawT    = Math.min(pElapsed / PATH_DRAW_MS, 1);
        const phase    = (i / STATES.length) * Math.PI * 2;
        const idlePulse = 0.10 + 0.08 * Math.sin(elapsed * 0.0012 + phase);

        updatePathGeo(i, drawT);
        po.mat.opacity = drawT < 1 ? 0.55 : (isIdle ? idlePulse : 0.45);

        // Particle: leads draw front at 1.2× speed; loops in idle
        const particleT = isIdle
          ? ((elapsed - IDLE_START_MS) * 0.0004 + pao.phaseOffset) % 1
          : Math.min(drawT * 1.2, 1);
        const pPos = po.curve.getPoint(particleT);
        updateParticle(i, pPos, drawT < 1 ? 0.9 : (isIdle ? idlePulse * 1.3 : 0.7));

        // Trigger border illumination exactly once on path completion
        if (drawT >= 1 && !po.illuminated) {
          po.illuminated = true;
          revealBorderSegment(s.id);
          spawnContactFlash(tv(s.cx, s.cy));
        }
        if (!po.illuminated) allDone = false;
      });

      /* Phase 4: Completion flash (once) ──────────────────────────────────── */
      if (allDone && !completionDone) {
        completionDone = true;
        triggerCompletionFlash();
      }

      renderer.render(scene, camera);
    };

    /* ── ResizeObserver ───────────────────────────────────────────────────── */
    const ro = new ResizeObserver(() => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w && h) renderer.setSize(w, h);
    });
    ro.observe(canvas);

    /* ── IntersectionObserver — pause RAF when scrolled out ───────────────── */
    const io = new IntersectionObserver(
      ([e]) => { isVisible = e.isIntersecting; },
      { threshold: 0 },
    );
    if (containerRef.current) io.observe(containerRef.current);

    animId = requestAnimationFrame(tick);

    /* ── Cleanup ──────────────────────────────────────────────────────────── */
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      io.disconnect();
      nodeObjs.forEach(no => { no.nodeMat.dispose(); no.haloMat.dispose(); });
      pathObjs.forEach(po => { po.geo.dispose(); po.mat.dispose(); });
      particleObjs.forEach(po => {
        po.mat.dispose();
        po.trailGeo.dispose();
        po.trailMat.dispose();
      });
      renderer.dispose();
    };
  }, []);

  /* ── JSX ──────────────────────────────────────────────────────────────────
     Three.js canvas (nodes, paths, particles) + SVG overlay (crest).
     Shield border: 5 segments, each hidden via opacity="0" until GSAP reveals.
     Interior elements: permanently at 0.12 opacity — ghost structure.
  ─────────────────────────────────────────────────────────────────────────── */
  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* WebGL layer */}
      <canvas
        ref={threeRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* SVG crest overlay */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* ── Interior elements — ghost structure, visible from start ── */}
        <g id="crest-interior" opacity="0.12">
          {/* Horizontal band dividers (Hungarian tricolor bands reference) */}
          <line x1="78"  y1="145" x2="322" y2="145" stroke="#C5A55A" strokeWidth="0.8" />
          <line x1="78"  y1="195" x2="322" y2="195" stroke="#C5A55A" strokeWidth="0.8" />
          {/* Hungarian apostolic double cross */}
          <line x1="200" y1="88"  x2="200" y2="188" stroke="#C5A55A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="185" y1="112" x2="215" y2="112" stroke="#C5A55A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="180" y1="140" x2="220" y2="140" stroke="#C5A55A" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* ── Shield border — 5 segments, one per state ── */}
        {/* Each segment is hidden (opacity=0) until its state's path arrives.
            GSAP animates strokeDashoffset → 0 on arrival. */}

        {/* VT: left side going up + left half of top edge */}
        <path
          id="border-seg-VT"
          className="shield-seg"
          d="M 75,235 L 75,45 L 190,45"
          stroke="#C5A55A" strokeWidth="1.5" fill="none"
          strokeLinecap="round" strokeLinejoin="round"
          opacity="0"
        />

        {/* ME: right half of top edge + upper right side */}
        <path
          id="border-seg-ME"
          className="shield-seg"
          d="M 190,45 L 325,45 L 325,120"
          stroke="#C5A55A" strokeWidth="1.5" fill="none"
          strokeLinecap="round" strokeLinejoin="round"
          opacity="0"
        />

        {/* NH: right side lower portion */}
        <path
          id="border-seg-NH"
          className="shield-seg"
          d="M 325,120 L 325,235"
          stroke="#C5A55A" strokeWidth="1.5" fill="none"
          strokeLinecap="round"
          opacity="0"
        />

        {/* RI: right bezier curve to shield tip */}
        <path
          id="border-seg-RI"
          className="shield-seg"
          d="M 325,235 C 325,315 220,365 200,365"
          stroke="#C5A55A" strokeWidth="1.5" fill="none"
          strokeLinecap="round"
          opacity="0"
        />

        {/* MA: left bezier curve from tip back up to left mid */}
        <path
          id="border-seg-MA"
          className="shield-seg"
          d="M 200,365 C 180,365 75,315 75,235"
          stroke="#C5A55A" strokeWidth="1.5" fill="none"
          strokeLinecap="round"
          opacity="0"
        />
      </svg>
    </div>
  );
}
