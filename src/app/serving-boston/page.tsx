import { siteData } from "@/data/site";
import { StatePage } from "@/components/sections/StatePage";

const cityData = siteData.states.find((s) => s.slug === "boston")!;

export const metadata = {
  title: "Hungarian Consul in Boston | Honorary Consulate of Hungary — New England",
  description:
    "Hungarian consular services for Greater Boston. Document authentication, apostille, citizenship support — 50 miles from Downtown Boston in Derry, NH. No trip to New York required.",
};

export default function BostonPage() {
  return <StatePage stateData={cityData} />;
}
