const links = [
  {
    label: "GitHub",
    value: "@sashwat06",
    href: "https://github.com/sashwat06",
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/sashwat-shukla-9a45a7404",
  },
  {
    label: "Resume",
    value: "View Resume",
    href: "/resume/Sashwat-Shukla-Resume.pdf",
  },
];

export default function SocialLinks() {
  return (
    <div className="space-y-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={
            link.href.startsWith("http")
              ? "_blank"
              : undefined
          }
          rel={
            link.href.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
          className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/3 px-5 py-4 transition hover:border-cyan-400/30 hover:bg-white/5"
        >
          <div>
            <p className="text-sm font-medium text-white">
              {link.label}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              {link.value}
            </p>
          </div>

          <span className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-cyan-300">
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}