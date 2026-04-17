"use client";

import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-silver text-3xl md:text-4xl font-bold text-center mb-10">
          Request Quote
        </h2>

        {submitted ? (
          <div className="p-6 bg-card border border-border rounded-xl text-center">
            <p className="text-foreground font-medium">
              Thank you for your message!
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              {"We'll"} get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring/50 transition-colors text-base"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring/50 transition-colors text-base"
            />
            <textarea
              name="message"
              placeholder="Project details"
              rows={4}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring/50 transition-colors resize-none text-base"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 px-6 py-3.5 border border-ring/50 rounded-full text-foreground hover:bg-foreground/5 transition-colors disabled:opacity-50 min-h-11"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
