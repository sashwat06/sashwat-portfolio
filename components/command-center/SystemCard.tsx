type SystemCardProps = {
  icon: string;
  title: string;
  status: string;
  description: string;
  metric: string;
  accent: string;
};

export default function SystemCard({
  icon,
  title,
  status,
  description,
  metric,
  accent,
}: SystemCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20">
      {/* Glow */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full ${accent} opacity-10 blur-3xl transition duration-500 group-hover:opacity-20`}
      />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl">
            {icon}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-xs text-green-300">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
            {status}
          </div>
        </div>

        <h3 className="mt-5 text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          {description}
        </p>

        <div className="mt-5 flex items-end justify-between">
          <span className="text-xs uppercase tracking-wider text-gray-600">
            Status
          </span>

          <span className="text-2xl font-bold text-white">
            {metric}
          </span>
        </div>

        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">
          <div
            className={`h-full w-[85%] rounded-full ${accent} opacity-70`}
          />
        </div>
      </div>
    </div>
  );
}