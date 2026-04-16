import { AboutUsPageView } from "@/components/about/AboutUsPageView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us — AL HAYATH TECHNICAL SERVICES LLC",
  description:
    "Our Journey in Design Excellence. AL HAYAT group of companies in Abu Dhabi, Al Ain, Dubai & Ajman: interior fit-out, joinery, aluminum & glass, MEP, 3D design and commercial brokerage since 2013.",
};

export default function AboutUsPage() {
  return <AboutUsPageView />;
}
