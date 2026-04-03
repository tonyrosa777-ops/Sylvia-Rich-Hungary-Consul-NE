import { siteData } from "@/data/site";
import { StatePage } from "@/components/sections/StatePage";

const stateData = siteData.states.find((s) => s.slug === "vermont")!;

export default function VermontPage() {
  return <StatePage stateData={stateData} />;
}
