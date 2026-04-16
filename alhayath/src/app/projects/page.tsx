import { ProjectsPageView } from "@/components/projects/ProjectsPageView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — AL HAYATH TECHNICAL SERVICES LLC",
  description:
    "A Showcase of Our Interior Masterpieces. Defining interiors through innovation and detail.",
};

export default function ProjectsPage() {
  return <ProjectsPageView />;
}
