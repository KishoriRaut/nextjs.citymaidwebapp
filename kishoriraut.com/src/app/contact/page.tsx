"use client";
import { useState } from "react";
import { supabase } from '@/utils/supabaseClient';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget as typeof e.currentTarget & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };
    const { error } = await supabase.from('contact_messages').insert([
      {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }
    ]);
    if (error) {
      setLoading(false);
      setError("There was an error sending your message. Please try again.");
      return;
    }

    // Call your own API route (which will forward to Zapier)
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });
    } catch (err) {
      // Optionally log error, but do not block user
      console.error("Internal API error", err);
    }
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 animate-fade-in-up max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-primary">Contact</h1>
      <p className="mb-8 text-lg text-primary/80 max-w-xl">Let&apos;s work together! Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
      <div className="max-w-xl mx-auto">
        {submitted ? (
          <div className="alert alert-success shadow-lg mb-8">
            <span>Thank you! Your message has been sent. I&apos;ll reply soon.</span>
          </div>
        ) : (
          <form className="card bg-base-200 shadow-xl p-4 sm:p-8 flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
            <input name="name" type="text" placeholder="Name" className="input input-bordered w-full text-base-content" required minLength={2} maxLength={50} />
            <input name="email" type="email" placeholder="Email" className="input input-bordered w-full text-base-content" required pattern="[^@\s]+@[^@\s]+\.[^@\s]+" />
            <textarea name="message" placeholder="Your message" className="textarea textarea-bordered w-full text-base-content" rows={4} required minLength={10} maxLength={1000}></textarea>
            {error && <div className="alert alert-error text-sm">{error}</div>}
            <button type="submit" className="btn btn-primary mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
} 