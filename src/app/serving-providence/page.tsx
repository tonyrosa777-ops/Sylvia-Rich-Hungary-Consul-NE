import { siteData } from "@/data/site";
import { StatePage } from "@/components/sections/StatePage";

const cityData = siteData.states.find((s) => s.slug === "providence")!;

export const metadata = {
  title: "Hungarian Consul in Providence | Honorary Consulate of Hungary — New England",
  description:
    "Hungarian consular services for Greater Providence and Rhode Island. Document authentication, apostille, citizenship support — 75 miles from Providence in Derry, NH.",
};

export default function ProvidencePage() {
  return <StatePage stateData={cityData} />;
}
