"use client";

import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const initialMessages: Message[] = [
  {
    role: "assistant",
    content:
      "Hi! I'm Sashwat AI. I can tell you about Sashwat's skills, projects, experience and technical interests.",
  },
];

function getLocalAIResponse(message: string) {
  const question = message.toLowerCase();

  if (
    question.includes("project") ||
    question.includes("portfolio")
  ) {
    return "Sashwat has worked on projects including an AI Portfolio, Network Infrastructure Lab, Village Website and Security Dashboard.";
  }

  if (
    question.includes("skill") ||
    question.includes("technology") ||
    question.includes("technologies")
  ) {
    return "Sashwat works with Windows, networking, TCP/IP, DNS, DHCP, Active Directory, Cisco, Python, Django, React, Next.js, TypeScript, Docker, Git, PostgreSQL and AI technologies.";
  }

  if (
    question.includes("network") ||
    question.includes("cisco")
  ) {
    return "Sashwat has hands-on networking experience involving TCP/IP, LAN troubleshooting, IPv4, VPN, Cisco networking, routing, switching and connectivity troubleshooting.";
  }

  if (
    question.includes("experience") ||
    question.includes("work")
  ) {
    return "Sashwat is an IT Support Engineer with experience supporting enterprise IT environments, Windows systems, networking issues, applications and end-user incidents.";
  }

  if (
    question.includes("cloud") ||
    question.includes("future") ||
    question.includes("career")
  ) {
    return "Sashwat is building toward Systems Administration, Cloud Infrastructure, Automation and AI-powered applications.";
  }

  if (
    question.includes("who") ||
    question.includes("about sashwat") ||
    question.includes("about him")
  ) {
    return "Sashwat Shukla is an IT Support Engineer focused on growing into Systems Administration, Cloud Infrastructure, Automation and AI-powered solutions.";
  }

  return "I can currently answer questions about Sashwat's projects, skills, networking experience, IT support background and career direction.";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] =
    useState<Message[]>(initialMessages);

  const [loading, setLoading] = useState(false);

  function handleSend(message: string) {
    const userMessage: Message = {
      role: "user",
      content: message,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setLoading(true);

    setTimeout(() => {
      const response = getLocalAIResponse(message);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: response,
        },
      ]);

      setLoading(false);
    }, 700);
  }

  function askSuggestion(question: string) {
    handleSend(question);
  }

  return (
    <>
      {/* Floating AI Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-cyan-400/30 bg-black/80 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-cyan-500/10 backdrop-blur-xl transition hover:scale-105 hover:border-cyan-400/60"
        >
          <span className="text-lg">✦</span>

          <span>Ask My AI</span>

          <span className="h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex h-155 w-95 max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#070707]/95 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                ✦
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Sashwat AI
                </h3>

                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Portfolio Assistant
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                role={message.role}
                content={message.content}
              />
            ))}

            {messages.length === 1 && (
              <div className="mt-4 space-y-2">
                <p className="text-xs text-gray-500">
                  Try asking:
                </p>

                <button
                  onClick={() =>
                    askSuggestion(
                      "Tell me about Sashwat's projects."
                    )
                  }
                  className="block w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-left text-xs text-gray-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  What projects has Sashwat built?
                </button>

                <button
                  onClick={() =>
                    askSuggestion(
                      "What technologies does Sashwat know?"
                    )
                  }
                  className="block w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-left text-xs text-gray-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  What technologies does Sashwat know?
                </button>

                <button
                  onClick={() =>
                    askSuggestion(
                      "What networking experience does Sashwat have?"
                    )
                  }
                  className="block w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-left text-xs text-gray-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  Tell me about his networking experience.
                </button>
              </div>
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-400">
                  <span className="animate-pulse">
                    Sashwat AI is thinking...
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <ChatInput
            onSend={handleSend}
            loading={loading}
          />
        </div>
      )}
    </>
  );
}