import { siteData } from "@/data/site";
import { StatePage } from "@/components/sections/StatePage";

const stateData = siteData.states.find((s) => s.slug === "massachusetts")!;

export default function MassachusettsPage() {
  return <StatePage stateData={stateData} />;
}
