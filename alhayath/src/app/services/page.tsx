import { ServicesPageView } from "@/components/services/ServicesPageView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — AL HAYATH TECHNICAL SERVICES LLC",
  description:
    "The Al Hayat Advantage: Interior & Contracting Services. Transparent processes, timely execution, and competitive pricing. Fit-out, furnishing, MEP, and formal approvals across the UAE.",
};

export default function ServicesPage() {
  return <ServicesPageView />;
}
