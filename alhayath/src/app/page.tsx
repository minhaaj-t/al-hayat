import { AboutQuote } from "@/components/AboutQuote";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ServicesGrid } from "@/components/ServicesGrid";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <div className="relative">
        <Header />
        <HeroSlider />
      </div>
      <main className="flex-1">
        <AboutQuote />
        <ServicesGrid />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}
