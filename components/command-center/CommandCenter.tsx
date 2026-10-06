import SystemCard from "./SystemCard";
import CoreStatus from "./CoreStatus";

const systems = [
  {
    icon: "🖥️",
    title: "Systems",
    status: "ONLINE",
    description:
      "Windows administration, troubleshooting, Active Directory and enterprise IT support.",
    metric: "ACTIVE",
    accent: "bg-cyan-400",
  },
  {
    icon: "🌐",
    title: "Network",
    status: "ONLINE",
    description:
      "TCP/IP, LAN, IPv4, DNS, DHCP, VPN and Cisco networking fundamentals.",
    metric: "READY",
    accent: "bg-blue-400",
  },
  {
    icon: "☁️",
    title: "Cloud",
    status: "LEARNING",
    description:
      "Building knowledge around cloud infrastructure, deployment and modern IT operations.",
    metric: "BUILDING",
    accent: "bg-purple-400",
  },
  {
    icon: "🤖",
    title: "AI",
    status: "ACTIVE",
    description:
      "Exploring AI-powered applications, APIs, RAG concepts and intelligent automation.",
    metric: "EXPLORING",
    accent: "bg-cyan-400",
  },
];

export default function CommandCenter() {
  return (
    <section
      id="command-center"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      {/* Header */}
      <div className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
          Developer Infrastructure
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Command Center
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          A snapshot of the technologies, systems and
          engineering areas I'm currently building.
        </p>
      </div>

      {/* Main layout */}
      <div className="grid gap-5 lg:grid-cols-2">
        {/* Core */}
        <CoreStatus />

        {/* System cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {systems.map((system) => (
            <SystemCard
              key={system.title}
              icon={system.icon}
              title={system.title}
              status={system.status}
              description={system.description}
              metric={system.metric}
              accent={system.accent}
            />
          ))}
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
          <p className="text-xs uppercase tracking-wider text-gray-600">
            GitHub
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            Connected
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Live repository data enabled
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
          <p className="text-xs uppercase tracking-wider text-gray-600">
            Portfolio
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            Online
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Next.js application
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
          <p className="text-xs uppercase tracking-wider text-gray-600">
            AI Assistant
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            Ready
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Local AI mode active
          </p>
        </div>
      </div>
    </section>
  );
}