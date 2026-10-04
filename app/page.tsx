import Navbar from "@/components/Layout/navbar";
import Hero from "@/components/Hero/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      {/* Temporary sections */}
      <section
        id="work"
        className="flex min-h-[50vh] items-center justify-center border-t border-white/5"
      >
        <h2 className="text-4xl font-bold">Projects Coming Next...</h2>
      </section>

      <section
        id="about"
        className="flex min-h-[50vh] items-center justify-center border-t border-white/5"
      >
        <h2 className="text-4xl font-bold">About</h2>
      </section>

      <section
        id="experience"
        className="flex min-h-[50vh] items-center justify-center border-t border-white/5"
      >
        <h2 className="text-4xl font-bold">Experience</h2>
      </section>

      <section
        id="contact"
        className="flex min-h-[50vh] items-center justify-center border-t border-white/5"
      >
        <h2 className="text-4xl font-bold">Contact</h2>
      </section>
    </main>
  );
}