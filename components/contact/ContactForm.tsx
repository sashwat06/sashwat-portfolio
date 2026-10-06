"use client";

import { SubmitEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

 function handleSubmit(event: SubmitEvent<HTMLFormElement>)  {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    /*
     * IMPORTANT:
     * Replace this with your real email address.
     */
    const recipient = "sashwatshukla6@gmail.com";

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`;

    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Your Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="John Doe"
          className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-white/5"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-white/5"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about the opportunity, project, or idea..."
          className="w-full resize-none rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-white/5"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/10"
      >
        {sent ? "Opening Email..." : "Send Message"}

        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>

      <p className="text-center text-xs text-gray-600">
        Your email application will open to send the message.
      </p>
    </form>
  );
}