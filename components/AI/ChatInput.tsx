"use client";

import { KeyboardEvent, useState } from "react";

type ChatInputProps = {
  onSend: (message: string) => void;
  loading: boolean;
};

export default function ChatInput({
  onSend,
  loading,
}: ChatInputProps) {
  const [input, setInput] = useState("");

  function handleSend() {
    const message = input.trim();

    if (!message || loading) return;

    onSend(message);
    setInput("");
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      handleSend();
    }
  }

  return (
    <div className="flex items-center gap-2 border-t border-white/10 bg-black/40 p-3">
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask something about Sashwat..."
        disabled={loading}
        className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-cyan-400/40"
      />

      <button
        onClick={handleSend}
        disabled={loading || !input.trim()}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ➤
      </button>
    </div>
  );
}