import Navbar from "@/components/Layout/navbar";
import Hero from "@/components/Hero/hero";
import About from "@/components/About/about";
import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <Hero />

      <About />

      <ExperienceTimeline />

      <Skills />

      <section
        id="work"
        className="flex min-h-[50vh] items-center justify-center border-t border-white/5 px-6"
      >
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            04 — Projects
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Projects coming next.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-500">
            We'll build the project showcase after the core portfolio
            sections are complete.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="flex min-h-[40vh] items-center justify-center border-t border-white/5 px-6"
      >
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold">
            Let's build something.
          </h2>
        </div>
      </section>

    </main>
  );
}