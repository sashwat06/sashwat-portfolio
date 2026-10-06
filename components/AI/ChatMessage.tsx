type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatMessage({
  role,
  content,
}: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
          isUser
            ? "bg-cyan-400 text-black"
            : "border border-white/10 bg-white/5 text-gray-200"
        }`}
      >
        {!isUser && (
          <div className="mb-1 text-xs font-semibold text-cyan-300">
            ✦ Sashwat AI
          </div>
        )}

        {content}
      </div>
    </div>
  );
}