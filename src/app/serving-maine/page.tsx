import { siteData } from "@/data/site";
import { StatePage } from "@/components/sections/StatePage";

const stateData = siteData.states.find((s) => s.slug === "maine")!;

export default function MainePage() {
  return <StatePage stateData={stateData} />;
}
