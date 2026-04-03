import { siteData } from "@/data/site";
import { StatePage } from "@/components/sections/StatePage";

const stateData = siteData.states.find((s) => s.slug === "rhode-island")!;

export default function RhodeIslandPage() {
  return <StatePage stateData={stateData} />;
}
