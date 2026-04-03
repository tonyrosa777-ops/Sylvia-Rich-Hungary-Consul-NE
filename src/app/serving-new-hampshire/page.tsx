import { siteData } from "@/data/site";
import { StatePage } from "@/components/sections/StatePage";

const stateData = siteData.states.find((s) => s.slug === "new-hampshire")!;

export default function NewHampshirePage() {
  return <StatePage stateData={stateData} />;
}
