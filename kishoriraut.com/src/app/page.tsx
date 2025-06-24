"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";

// Animated Counter component
function AnimatedCounter({ to, duration = 1200 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const step = Math.ceil(to / (duration / 16));
    let current = 0;
    const interval = setInterval(() => {
      current += step;
      if (current >= to) {
        current = to;
        clearInterval(interval);
      }
      if (ref.current) ref.current.textContent = current.toString();
    }, 16);
    return () => clearInterval(interval);
  }, [to, duration]);
  return <span ref={ref}>0</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-20 bg-gradient-to-br from-base-200 via-base-100 to-base-300 text-base-content">
      {/* Hero Section */}
      <section className="hero min-h-[70vh] bg-gradient-to-r from-primary to-secondary rounded-box shadow-2xl mt-10 mb-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Bring Your Web App Idea to Life
        </h1>
        <p className="text-xl text-base-content max-w-2xl mb-8">
          Are you ready to launch, scale, or modernize your business? I help entrepreneurs and companies turn ideas into high-performing, beautiful web applications that deliver real results.
        </p>
        <Link href="/contact" className="btn btn-accent btn-lg shadow-lg animate-bounce">
          Start Your Project Today
        </Link>
        <p className="mt-4 text-base-content/70 max-w-xl">
          Not sure where to start? <span className="underline"><Link href="/contact">Book a free discovery call</Link></span> and let&apos;s talk about your vision.
        </p>
      </section>

      {/* How We'll Work Together Section */}
      <section className="container mx-auto px-4 my-20 text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">How We'll Work Together</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">1. Discovery</h3>
            <p>We'll discuss your goals, challenges, and vision for your web app.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">2. Design</h3>
            <p>I'll create wireframes and UI designs tailored to your brand and users.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">3. Build</h3>
            <p>Development begins! You'll get regular updates and demos as we progress.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">4. Launch & Support</h3>
            <p>We'll launch your app and I'll be there for ongoing support and improvements.</p>
          </div>
        </div>
      </section>

      {/* Video Introduction Section */}
      <section className="container mx-auto px-4 my-20 animate-fade-in-up flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 text-primary text-center">Video Introduction</h2>
        <p className="mb-6 text-lg text-base-content text-center max-w-2xl">Get to know me in 90 seconds! Watch this short video to learn about my approach, experience, and how I can help you build your next web app or website.</p>
        <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/PVSAyvvHpwk"
            title="Video Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-primary text-center sticky top-0 z-30 bg-base-100/90 backdrop-blur md:static md:bg-transparent">What I Offer</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="card bg-base-100 text-base-content shadow-xl hover:shadow-2xl transition-all border-t-4 border-primary group animate-fade-in-up">
            <div className="card-body items-center text-center">
              <span className="text-5xl mb-2 group-hover:scale-110 transition-transform">🚀</span>
              <h3 className="card-title mb-2 text-primary">Modern Web Apps</h3>
              <p className="text-base-content">Fast, scalable, and secure web applications using Next.js, React, and the latest tech.</p>
            </div>
          </div>
          <div className="card bg-base-100 text-base-content shadow-xl hover:shadow-2xl transition-all border-t-4 border-secondary group animate-fade-in-up delay-100">
            <div className="card-body items-center text-center">
              <span className="text-5xl mb-2 group-hover:scale-110 transition-transform">🎨</span>
              <h3 className="card-title mb-2 text-secondary">Beautiful Websites</h3>
              <p className="text-base-content">Stunning, responsive websites that look great on any device and help your brand stand out.</p>
            </div>
          </div>
          <div className="card bg-base-100 text-base-content shadow-xl hover:shadow-2xl transition-all border-t-4 border-accent group animate-fade-in-up delay-200">
            <div className="card-body items-center text-center">
              <span className="text-5xl mb-2 group-hover:scale-110 transition-transform">🤖</span>
              <h3 className="card-title mb-2 text-accent">AI & Automation</h3>
              <p className="text-base-content">Integrate AI tools and automation to supercharge your business and workflow.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/contact" className="btn btn-accent btn-lg">Let&apos;s Talk About Your Project</Link>
        </div>
      </section>

      {/* Skills/Tech Stack Section */}
      <section className="container mx-auto px-4 my-20 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-10 text-primary text-center">Skills & Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 justify-items-center">
          {/* React */}
          <div className="flex flex-col items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="3.5" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="2"><ellipse rx="17" ry="7.5" transform="matrix(.866 .5 -.866 .5 20 20)"/><ellipse rx="17" ry="7.5" transform="matrix(-.866 .5 .866 .5 20 20)"/><ellipse rx="17" ry="7.5" transform="matrix(1 0 0 1 20 20)"/></g></svg>
            <span className="text-sm font-medium">React</span>
          </div>
          {/* Next.js */}
          <div className="flex flex-col items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#fff"/><path d="M13 27V13h2.5l7.5 12.5V13H25v14h-2.5l-7.5-12.5V27H13z" fill="#000"/></svg>
            <span className="text-sm font-medium">Next.js</span>
          </div>
          {/* Node.js */}
          <div className="flex flex-col items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#fff"/><path d="M20 8l10 6v12l-10 6-10-6V14l10-6z" fill="#8CC84B"/><path d="M20 8v24" stroke="#fff" strokeWidth="2"/></svg>
            <span className="text-sm font-medium">Node.js</span>
          </div>
          {/* Tailwind CSS */}
          <div className="flex flex-col items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#06B6D4"/><path d="M13 23c1.5-3 3.5-4.5 6-4.5s4.5 1.5 6 4.5c1.5 3 3.5 4.5 6 4.5s4.5-1.5 6-4.5" stroke="#fff" strokeWidth="2"/></svg>
            <span className="text-sm font-medium">Tailwind</span>
          </div>
          {/* daisyUI */}
          <div className="flex flex-col items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#fff"/><circle cx="20" cy="20" r="10" fill="#FBBF24"/><circle cx="20" cy="20" r="5" fill="#fff"/></svg>
            <span className="text-sm font-medium">daisyUI</span>
          </div>
          {/* TypeScript */}
          <div className="flex flex-col items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#3178C6"/><text x="20" y="26" textAnchor="middle" fontSize="16" fill="#fff" fontFamily="Arial">TS</text></svg>
            <span className="text-sm font-medium">TypeScript</span>
          </div>
          {/* GitHub */}
          <div className="flex flex-col items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#fff"/><path d="M20 8C13.373 8 8 13.373 8 20c0 5.304 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.1-.729 1.205.085 2 1.3 2 1.3 1.2 2 3.1 1.4 3.8 1.1.1-.9.5-1.4.8-1.7-3.1-.4-6.3-1.6-6.3-7.1 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.104.823 2.226v3.293c0 .32.218.694.825.576C28.565 29.796 32 25.303 32 20c0-6.627-5.373-12-12-12z" fill="#181717"/></svg>
            <span className="text-sm font-medium">GitHub</span>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/contact" className="btn btn-outline btn-accent btn-lg">Start Your Project</Link>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="container mx-auto px-4 my-20 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-10 text-primary text-center">Key Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div className="card bg-base-100 shadow-xl p-6">
            <div className="text-4xl font-extrabold text-primary mb-2">
              <AnimatedCounter to={5} />+
            </div>
            <div className="text-base-content/70">Years Experience</div>
          </div>
          <div className="card bg-base-100 shadow-xl p-6">
            <div className="text-4xl font-extrabold text-secondary mb-2">
              <AnimatedCounter to={30} />+
            </div>
            <div className="text-base-content/70">Projects Completed</div>
          </div>
          <div className="card bg-base-100 shadow-xl p-6">
            <div className="text-4xl font-extrabold text-accent mb-2">
              <AnimatedCounter to={20} />+
            </div>
            <div className="text-base-content/70">Happy Clients</div>
          </div>
          <div className="card bg-base-100 shadow-xl p-6">
            <div className="text-4xl font-extrabold text-primary mb-2">
              <AnimatedCounter to={12} />+
            </div>
            <div className="text-base-content/70">Technologies Used</div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-4 my-20 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-10 text-primary text-center">Trusted By</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {/* Upwork */}
          <div className="avatar">
            <div className="w-20 rounded-full bg-base-100 flex items-center justify-center shadow">
              <svg viewBox="0 0 100 100" width="48" height="48" aria-label="Upwork"><g><path fill="#6fda44" d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm23.7 62.2c-4.2 0-8.1-2.1-10.5-5.6l-2.2-3.1c-1.2-1.7-3.7-1.7-4.9 0l-2.2 3.1c-2.4 3.5-6.3 5.6-10.5 5.6-7.1 0-12.9-5.8-12.9-12.9V37.5h6.2v11.8c0 3.7 3 6.7 6.7 6.7 2.2 0 4.2-1.1 5.5-2.9l2.2-3.1c2.4-3.5 7.4-3.5 9.8 0l2.2 3.1c1.3 1.8 3.3 2.9 5.5 2.9 3.7 0 6.7-3 6.7-6.7V37.5h6.2v11.8c0 7.1-5.8 12.9-12.9 12.9z"/></g></svg>
            </div>
          </div>
          {/* Fiverr */}
          <div className="avatar">
            <div className="w-20 rounded-full bg-base-100 flex items-center justify-center shadow">
              <svg viewBox="0 0 100 100" width="48" height="48" aria-label="Fiverr"><circle cx="50" cy="50" r="50" fill="#1dbf73"/><text x="50" y="60" textAnchor="middle" fontSize="36" fill="#fff" fontFamily="Arial" fontWeight="bold">fi</text></svg>
            </div>
          </div>
          {/* GitHub */}
          <div className="avatar">
            <div className="w-20 rounded-full bg-base-100 flex items-center justify-center shadow">
              <svg viewBox="0 0 32 32" width="48" height="48" aria-label="GitHub"><circle cx="16" cy="16" r="16" fill="#fff"/><path fill="#181717" d="M16 2.5C8.3 2.5 2 8.8 2 16.5c0 6.2 4 11.5 9.5 13.4.7.1 1-.3 1-.7v-2.5c-3.9.8-4.7-1.7-4.7-1.7-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.1 1.4 3.8 1.1.1-.9.5-1.4.8-1.7-3.1-.4-6.3-1.6-6.3-7.1 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.104.823 2.226v3.293c0 .32.218.694.825.576C28.565 29.796 32 25.303 32 20c0-6.627-5.373-12-12-12z"/></svg>
            </div>
          </div>
          {/* Google */}
          <div className="avatar">
            <div className="w-20 rounded-full bg-base-100 flex items-center justify-center shadow">
              <svg viewBox="0 0 48 48" width="48" height="48" aria-label="Google"><g><circle cx="24" cy="24" r="24" fill="#fff"/><path fill="#4285F4" d="M34.6 24.2c0-.7-.1-1.4-.2-2.1H24v4.1h6c-.3 1.5-1.5 2.7-3.1 3.2v2.7h5c2.9-2.7 4.7-6.7 4.7-11.2z"/><path fill="#34A853" d="M24 36c3.6 0 6.6-1.2 8.8-3.2l-5-2.7c-1.4.9-3.1 1.4-4.9 1.4-3.8 0-7-2.6-8.1-6.1h-5v2.8C12.2 33.4 17.6 36 24 36z"/><path fill="#FBBC05" d="M15.9 25.4c-.2-.7-.3-1.4-.3-2.4s.1-1.7.3-2.4v-2.8h-5C9.6 20.1 9 22 9 24s.6 3.9 1.6 5.6l5.3-4.2z"/><path fill="#EA4335" d="M24 17.9c2 0 3.7.7 5.1 2.1l3.8-3.8C30.6 13.7 27.6 12 24 12c-6.4 0-11.8 2.6-15.3 6.8l5.3 4.2c1.1-3.5 4.3-6.1 8.1-6.1z"/></g></svg>
            </div>
          </div>
          {/* Microsoft */}
          <div className="avatar">
            <div className="w-20 rounded-full bg-base-100 flex items-center justify-center shadow">
              <svg viewBox="0 0 48 48" width="48" height="48" aria-label="Microsoft"><g><circle cx="24" cy="24" r="24" fill="#fff"/><g><rect x="10" y="10" width="13" height="13" fill="#f25022"/><rect x="25" y="10" width="13" height="13" fill="#7fba00"/><rect x="10" y="25" width="13" height="13" fill="#00a4ef"/><rect x="25" y="25" width="13" height="13" fill="#ffb900"/></g></g></svg>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 my-20 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-10 text-primary text-center">What My Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="card bg-base-100 text-base-content shadow-xl p-6 items-center">
            <div className="avatar mb-4">
              <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <Image src="/vercel.svg" alt="Jane Doe" width={64} height={64} style={{ height: 'auto' }} />
              </div>
            </div>
            <div className="card-body items-center text-center p-0">
              <p className="italic mb-4 text-base-content">"Kishori delivered our project ahead of schedule and the web app helped us increase user engagement by 150%. Highly recommended!"</p>
              <h3 className="font-bold text-lg">Jane Doe</h3>
              <span className="text-sm text-base-content/60">CEO, Startup Inc.</span>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="card bg-base-100 text-base-content shadow-xl p-6 items-center">
            <div className="avatar mb-4">
              <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <Image src="/globe.svg" alt="John Smith" width={64} height={64} style={{ height: 'auto' }} />
              </div>
            </div>
            <div className="card-body items-center text-center p-0">
              <p className="italic mb-4 text-base-content">"Professional, communicative, and the results speak for themselves. Our SaaS platform is faster and more reliable than ever."</p>
              <h3 className="font-bold text-lg">John Smith</h3>
              <span className="text-sm text-base-content/60">Product Manager, GlobalWeb</span>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="card bg-base-100 text-base-content shadow-xl p-6 items-center">
            <div className="avatar mb-4">
              <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <Image src="/next.svg" alt="Emily Chen" width={64} height={64} style={{ height: 'auto' }} />
              </div>
            </div>
            <div className="card-body items-center text-center p-0">
              <p className="italic mb-4 text-base-content">"The best freelance experience I&apos;ve had. The site looks amazing and our signups doubled after launch!"</p>
              <h3 className="font-bold text-lg">Emily Chen</h3>
              <span className="text-sm text-base-content/60">Founder, AI SaaS</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/contact" className="btn btn-accent btn-lg">Let&apos;s Work Together</Link>
        </div>
      </section>

      {/* Project Inquiry Form Section */}
      <section className="container mx-auto px-4 my-20 flex flex-col items-center animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-6 text-primary text-center">Request a Free Project Consultation</h2>
        <form className="card bg-base-200 shadow-xl p-8 flex flex-col gap-4 w-full max-w-xl" onSubmit={e => { e.preventDefault(); alert('Thank you! I will contact you soon.'); }}>
          <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" required minLength={2} maxLength={50} />
          <input name="email" type="email" placeholder="Your Email" className="input input-bordered w-full" required pattern="[^@\s]+@[^@\s]+\.[^@\s]+" />
          <textarea name="project" placeholder="Tell me about your project or idea..." className="textarea textarea-bordered w-full" rows={4} required minLength={10} maxLength={1000}></textarea>
          <button type="submit" className="btn btn-accent btn-lg">Request Consultation</button>
        </form>
        <p className="mt-4 text-base-content/70 text-center max-w-xl">I&apos;ll get back to you within 24 hours to schedule your free call or answer your questions.</p>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 my-20 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-10 text-primary text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="checkbox" id="faq-tech" className="peer" />
            <label htmlFor="faq-tech" className="collapse-title text-lg font-medium cursor-pointer">What technologies do you specialize in?</label>
            <div className="collapse-content text-base-content/80">
              <p>I specialize in React, Next.js, Node.js, Tailwind CSS, daisyUI, and TypeScript. I also have experience with Python, MongoDB, and cloud platforms.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="checkbox" id="faq-time" className="peer" />
            <label htmlFor="faq-time" className="collapse-title text-lg font-medium cursor-pointer">How long does a typical project take?</label>
            <div className="collapse-content text-base-content/80">
              <p>Most projects are completed within 2-6 weeks, depending on complexity and requirements. I provide clear timelines and regular updates.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="checkbox" id="faq-design" className="peer" />
            <label htmlFor="faq-design" className="collapse-title text-lg font-medium cursor-pointer">Can you help with both design and development?</label>
            <div className="collapse-content text-base-content/80">
              <p>Yes! I can handle both UI/UX design and full-stack development, ensuring a seamless process from concept to launch.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="checkbox" id="faq-comm" className="peer" />
            <label htmlFor="faq-comm" className="collapse-title text-lg font-medium cursor-pointer">How do you communicate during a project?</label>
            <div className="collapse-content text-base-content/80">
              <p>I use email, Slack, and video calls for regular communication. I&apos;m flexible and can adapt to your preferred tools.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="checkbox" id="faq-payment" className="peer" />
            <label htmlFor="faq-payment" className="collapse-title text-lg font-medium cursor-pointer">What is your payment process?</label>
            <div className="collapse-content text-base-content/80">
              <p>I typically work with milestone-based payments via Upwork, Fiverr, or direct invoice. Details are discussed before starting the project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat / Scheduling Section */}
      {/* Removed Book a Free Consultation section as requested */}

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 my-20 flex flex-col items-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4 text-primary text-center">Ready to start your project?</h2>
        <div className="card bg-primary text-primary-content shadow-2xl p-10 max-w-2xl w-full items-center">
          <p className="mb-6 text-lg text-base-content">Let&apos;s build something amazing together. Contact me for a free consultation and let&apos;s discuss your ideas!</p>
          <Link href="/contact" className="btn btn-accent btn-lg animate-bounce">Contact Me</Link>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4">
        {/* Portfolio content */}
      </section>
    </div>
  );
}

// Custom animations (add to your globals.css or tailwind.config.js if not present):
// .animate-fade-in { animation: fadeIn 1s ease both; }
// .animate-fade-in-up { animation: fadeInUp 1s ease both; }
// .animate-bounce-slow { animation: bounce 2.5s infinite; }

// Add smooth scrolling for in-page anchors
if (typeof window !== "undefined") {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
      const href = this.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}
