import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_d2trx17";
const EMAILJS_TEMPLATE_ID = "template_sj7wp9q";
const EMAILJS_PUBLIC_KEY = "jYHANny4FjIauGZdI";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    topic: "",
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          topic: formData.topic,
          name: formData.name,
          phone: formData.phone || "Not provided",
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ topic: "", name: "", phone: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelClass = "block text-base sm:text-lg lg:text-xl font-medium text-gray-800 mb-2";
  const inputClass = "w-full px-4 py-3 text-base sm:text-lg bg-white text-black placeholder-gray-400 border border-gray-300 rounded-lg outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]";

  return (
    <div className="w-full">
      <div className="w-full max-w-2xl mx-auto">

        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl italic tracking-widest font-libre text-gray-800 mb-8 sm:mb-10">
          
        </h2>

        <div className="space-y-6 sm:space-y-8">

          <div>
            <label htmlFor="topic" className={labelClass}>Topic of Contact *</label>
            <input
              id="topic" name="topic" type="text"
              value={formData.topic} onChange={handleChange}
              placeholder="e.g., ring sizing for marriage alliances"
              required className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="name" className={labelClass}>Full Name *</label>
            <input
              id="name" name="name" type="text"
              value={formData.name} onChange={handleChange}
              placeholder="John Doe"
              required className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="phone" className={labelClass}>Phone Number</label>
              <input
                id="phone" name="phone" type="tel"
                value={formData.phone} onChange={handleChange}
                placeholder="+351 914 824 244"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email Address *</label>
              <input
                id="email" name="email" type="email"
                value={formData.email} onChange={handleChange}
                placeholder="john@example.com"
                required className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>Message *</label>
            <textarea
              id="message" name="message"
              value={formData.message} onChange={handleChange}
              placeholder="Your message here..."
              required rows={6}
              className={`${inputClass} resize-none`}
            />
          </div>

        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-end items-center gap-4">
          {status === "success" && (
            <p className="text-green-600 text-base sm:text-lg font-medium">
              ✓ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-base sm:text-lg font-medium">
              ✗ Something went wrong. Please try again.
            </p>
          )}

          <button
            type="button"
            onClick={sendEmail}
            disabled={isSubmitting}
            className="w-full sm:w-auto px-10 py-3 rounded-full font-medium text-base sm:text-lg text-white transition-all duration-200
              bg-[var(--color-secondary)] hover:bg-[var(--color-primary)]
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>

        <p className="text-sm sm:text-base text-gray-500 text-center mt-6">
          * Required fields
        </p>

      </div>
    </div>
  );
}