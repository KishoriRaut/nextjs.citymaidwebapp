import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Dummy project data
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

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl animate-fade-in-up text-base-content">
      <Link href="/portfolio" className="btn btn-ghost mb-6">← Back to Portfolio</Link>
      <div className="card bg-base-100 text-base-content shadow-xl p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
          <Image src={project.image} alt={project.title} width={120} height={120} style={{ height: 'auto' }} className="rounded-xl bg-base-200 p-4" />
          <div>
            <h1 className="text-3xl font-bold mb-2 text-primary">{project.title}</h1>
            <div className="badge badge-secondary mr-2">{project.year}</div>
            <div className="badge badge-outline">{project.role}</div>
          </div>
        </div>
        <p className="mb-6 text-lg">{project.description}</p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside space-y-1">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="badge badge-outline badge-lg">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 