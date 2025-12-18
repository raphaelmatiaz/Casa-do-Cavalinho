"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="flex flex-col gap-6 px-[20%] w-full"
    >
      <h2 className="text-center font-serif italic tracking-widest text-lg">
        Contact Form
      </h2>

      <input
        name="topic"
        type="text"
        placeholder="Topic of Contact (ex; ring sizing for marriage alliances)"
        required
        className="input"
      />

      <input
        name="name"
        type="text"
        placeholder="Your Full Name"
        required
        className="input"
      />

      <div className="flex gap-4">
        <input
          name="phone"
          type="tel"
          placeholder="Your Phone Number (Optional)"
          className="input w-1/2"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="input w-1/2"
        />
      </div>

      <textarea
        name="message"
        placeholder="Your message here..."
        required
        className="textarea"
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-[#8B6A2F] text-white px-10 py-3 rounded-full font-medium hover:opacity-90 transition"
        >
          Send Message
        </button>
      </div>

      {status === "success" && (
        <p className="text-green-600 text-sm text-right">
          Message sent successfully.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm text-right">
          Something went wrong.
        </p>
      )}
    </form>
  );
}
