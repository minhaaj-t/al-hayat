import { ContactUsPageView } from "@/components/contact/ContactUsPageView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us — AL HAYATH TECHNICAL SERVICES LLC",
  description:
    "We'd love to hear from you. Reach Al Hayat Interiors in Ras Al Khoor, Dubai — phone, email, map, and answers to frequently asked questions.",
};

export default function ContactUsPage() {
  return <ContactUsPageView />;
}
