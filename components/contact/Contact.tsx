import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-28">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Let's build something.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            Have an opportunity, technical challenge, project
            idea, or just want to connect? I'd be happy to hear
            from you.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-white/2.5 p-6 backdrop-blur-xl md:p-8">
            <div className="mb-8">
              <p className="text-lg font-semibold text-white">
                Start a conversation
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Send a message and let's see where we can take
                the idea.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-8">
            {/* Availability */}
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/3 p-7">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />

                <span className="text-sm font-medium text-green-300">
                  Open to opportunities
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Let's connect.
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                I'm interested in opportunities involving IT
                support, systems administration, networking,
                cloud infrastructure, automation and AI-powered
                applications.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-600">
                Find me online
              </p>

              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Bottom statement */}
    
      </div>
    </section>
  );
}