export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16 text-base-content">
      <h1 className="text-4xl font-bold mb-8 text-primary text-center">My Services</h1>
      <p className="text-lg text-primary/80 max-w-2xl mx-auto mb-12 text-center">
        I offer a range of services to help you launch, grow, and optimize your digital presence. Whether you need a custom web app, a stunning website, or expert consulting, I&apos;ve got you covered.
      </p>
      <div className="grid md:grid-cols-3 gap-10">
        {/* Web App Development */}
        <div className="card bg-base-100 shadow-xl p-8 items-center text-center border-t-4 border-primary group transition-all hover:shadow-2xl">
          <div className="mb-4 text-5xl group-hover:scale-110 transition-transform">🚀</div>
          <h2 className="text-2xl font-bold mb-2 text-primary">Web App Development</h2>
          <p className="mb-4">Custom, scalable web applications built with Next.js, React, and Node.js. From MVPs to complex platforms, I deliver fast, secure, and maintainable solutions tailored to your business goals.</p>
          <ul className="text-left text-base-content/80 mb-4 list-disc list-inside">
            <li>Full-stack development</li>
            <li>API integration & automation</li>
            <li>Performance optimization</li>
            <li>Ongoing support & maintenance</li>
          </ul>
        </div>
        {/* Website Design & Development */}
        <div className="card bg-base-100 shadow-xl p-8 items-center text-center border-t-4 border-secondary group transition-all hover:shadow-2xl">
          <div className="mb-4 text-5xl group-hover:scale-110 transition-transform">🎨</div>
          <h2 className="text-2xl font-bold mb-2 text-secondary">Website Design</h2>
          <p className="mb-4">Modern, responsive, and SEO-friendly websites that make your brand stand out. I combine beautiful design with best-in-class development for a seamless user experience on any device.</p>
          <ul className="text-left text-base-content/80 mb-4 list-disc list-inside">
            <li>UI/UX design</li>
            <li>Mobile-first, responsive layouts</li>
            <li>SEO & accessibility best practices</li>
            <li>Branding & visual identity</li>
          </ul>
        </div>
        {/* Consulting & AI Solutions */}
        <div className="card bg-base-100 shadow-xl p-8 items-center text-center border-t-4 border-accent group transition-all hover:shadow-2xl">
          <div className="mb-4 text-5xl group-hover:scale-110 transition-transform">🤖</div>
          <h2 className="text-2xl font-bold mb-2 text-accent">Consulting & AI Solutions</h2>
          <p className="mb-4">Get expert advice on digital strategy, architecture, and AI-powered automation. I help you leverage the latest technology to streamline operations and unlock new opportunities.</p>
          <ul className="text-left text-base-content/80 mb-4 list-disc list-inside">
            <li>Technical consulting & audits</li>
            <li>AI & automation integration</li>
            <li>Cloud & deployment strategy</li>
            <li>Workshops & training</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <a href="/contact" className="btn btn-accent btn-lg">Let&apos;s Discuss Your Project</a>
      </div>
    </div>
  );
} 