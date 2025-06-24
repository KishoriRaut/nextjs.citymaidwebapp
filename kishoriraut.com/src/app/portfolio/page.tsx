import Image from "next/image";
import Link from "next/link";

// Use the same project data as in [slug]/page.tsx for consistency
const projects = [
  {
    slug: "citymaidservices-net",
    title: "citymaidservices.net",
    image: "/globe.svg",
    description: "A modern SaaS platform for global clients, featuring real-time collaboration, analytics, and a beautiful UI.",
    features: [
      "Real-time collaboration",
      "Advanced analytics dashboard",
      "Multi-language support",
      "Responsive design",
    ],
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS", "daisyUI"],
    role: "Full Stack Developer",
    year: "2024",
  },
  {
    slug: "startup-landing",
    title: "Startup Landing",
    image: "/vercel.svg",
    description: "A responsive landing page for a tech startup, optimized for conversions and SEO.",
    features: [
      "SEO optimized",
      "Conversion-focused design",
      "Fast load times",
      "Custom illustrations",
    ],
    tech: ["Next.js", "React", "Tailwind CSS"],
    role: "Frontend Developer",
    year: "2023",
  },
  {
    slug: "ai-saas-platform",
    title: "AI SaaS Platform",
    image: "/next.svg",
    description: "An AI-powered SaaS platform for business automation, featuring user management and API integration.",
    features: [
      "AI-powered automation",
      "User management",
      "API integration",
      "Custom admin panel",
    ],
    tech: ["Next.js", "React", "Python", "Tailwind CSS"],
    role: "Lead Developer",
    year: "2024",
  },
];

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-16 text-base-content">
      <h1 className="text-4xl font-bold mb-8 text-primary">Portfolio</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border-t-4 border-primary group focus:outline-none focus:ring-2 focus:ring-primary"
            tabIndex={0}
          >
            <figure className="p-6 pb-0 flex justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={120}
                height={120}
                className="rounded-2xl bg-base-200 p-4 shadow group-hover:scale-105 transition-transform"
                style={{ height: 'auto' }}
              />
            </figure>
            <div className="card-body">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="card-title text-lg md:text-xl text-primary group-hover:text-secondary transition-colors">
                  {project.title}
                </h2>
                <span className="badge badge-secondary text-xs font-semibold">{project.year}</span>
              </div>
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="badge badge-outline badge-sm">{project.role}</span>
                {project.tech.map((tech) => (
                  <span key={tech} className="badge badge-accent badge-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mb-4 text-base-content/80 text-sm md:text-base min-h-[48px]">{project.description}</p>
              <ul className="mb-4 list-disc list-inside text-xs text-base-content/70 space-y-1">
                {project.features.slice(0, 3).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="card-actions justify-end mt-auto">
                <span className="btn btn-primary btn-sm group-hover:btn-secondary transition-colors">View Details</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 