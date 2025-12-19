import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ========================================
// ADD YOUR EMAILJS CREDENTIALS HERE:
// ========================================
const EMAILJS_SERVICE_ID = "service_d2trx17";  // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "template_sj7wp9q"; // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = "jYHANny4FjIauGZdI";    // Replace with your Public Key
// ========================================

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    // Simulate email sending (replace with actual EmailJS implementation)
    try {
      // ACTUAL EMAILJS IMPLEMENTATION:
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
      setFormData({
        topic: "",
        name: "",
        phone: "",
        email: "",
        message: ""
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-center text-2xl italic tracking-widest font-serif text-gray-800 mb-8">
          Contact Form
        </h2>

        <div className="space-y-6">
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
              Topic of Contact *
            </label>
            <input
              id="topic"
              name="topic"
              type="text"
              value={formData.topic}
              onChange={handleChange}
              placeholder="e.g., ring sizing for marriage alliances"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition resize-none"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end items-center gap-4">
          {status === "success" && (
            <p className="text-green-600 text-sm font-medium">
              ✓ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm font-medium">
              ✗ Something went wrong. Please try again.
            </p>
          )}
          
          <button
            type="button"
            onClick={sendEmail}
            disabled={isSubmitting}
            className="bg-amber-700 text-white px-10 py-3 rounded-full font-medium hover:bg-amber-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          * Required fields
        </p>
      </div>
    </div>
  );
}