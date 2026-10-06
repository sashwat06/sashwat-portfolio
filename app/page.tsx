import Navbar from "@/components/Layout/navbar";
import Hero from "@/components/Hero/hero";
import About from "@/components/About/about";
import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import Skills from "@/components/Skills/Skills";
import ProjectGrid from "@/components/Project/ProjectGrid";
import ChatBot from "@/components/AI/ChatBot";
import GitHubSection from "@/components/Github/GitHubSection";
import CommandCenter from "@/components/command-center/CommandCenter";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/Footer/Footer";
import LoadingScreen from "@/components/loading/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <LoadingScreen />

      <Navbar />

      <Hero />

      <About />

      <ExperienceTimeline />

      <Skills />

      <CommandCenter />

      <ProjectGrid />

      <GitHubSection />

      <Contact />

      <ChatBot />

      <Footer />

    </main>
  );
}