import { notFound } from "next/navigation";
import Link from "next/link";

const posts = [
  {
    slug: "why-nextjs-for-modern-web-apps",
    title: "Why Next.js is Great for Modern Web Apps",
    date: "2024-06-24",
    content: `
      <p>Next.js is a powerful React framework that enables developers to build fast, scalable, and SEO-friendly web applications. With features like server-side rendering, static site generation, and API routes, it's a top choice for modern web development.</p>
      <ul>
        <li>⚡ Blazing fast performance</li>
        <li>🔍 SEO optimization out of the box</li>
        <li>🔄 Hybrid static & server rendering</li>
        <li>🔌 API routes for backend logic</li>
      </ul>
      <p>Whether you're building a portfolio, SaaS, or e-commerce site, Next.js provides the tools you need to succeed in 2024.</p>
    `,
  },
  {
    slug: "tailwind-vs-traditional-css",
    title: "Tailwind CSS vs. Traditional CSS: A Developer's Perspective",
    date: "2024-06-20",
    content: `
      <p>Tailwind CSS offers a utility-first approach to styling, making it faster and more maintainable than traditional CSS for many projects.</p>
      <ul>
        <li>🚀 Rapid prototyping</li>
        <li>🧩 Consistent design system</li>
        <li>🛠️ Easy to customize</li>
      </ul>
      <p>While traditional CSS is still powerful, Tailwind can greatly speed up your workflow and reduce CSS bloat.</p>
    `,
  },
  {
    slug: "freelance-tips-for-web-developers",
    title: "Top 5 Freelance Tips for Web Developers",
    date: "2024-06-10",
    content: `
      <p>Freelancing as a web developer can be rewarding. Here are my top tips:</p>
      <ol>
        <li>Build a strong portfolio</li>
        <li>Communicate clearly with clients</li>
        <li>Keep learning new skills</li>
        <li>Set clear expectations and contracts</li>
        <li>Deliver on time and follow up</li>
      </ol>
      <p>Success comes from consistency and professionalism!</p>
    `,
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl animate-fade-in-up text-base-content">
      <Link href="/blog" className="btn btn-ghost mb-6">← Back to Blog</Link>
      <div className="card bg-base-100 text-base-content shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-primary">{post.title}</h1>
        <div className="text-sm text-base-content/60 mb-6">{new Date(post.date).toLocaleDateString()}</div>
        <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
} 