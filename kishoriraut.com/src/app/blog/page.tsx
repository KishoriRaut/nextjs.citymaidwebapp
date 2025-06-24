import Link from "next/link";

const posts = [
  {
    slug: "why-nextjs-for-modern-web-apps",
    title: "Why Next.js is Great for Modern Web Apps",
    date: "2024-06-24",
    excerpt: "Discover the benefits of using Next.js for building fast, scalable, and SEO-friendly web applications in 2024.",
  },
  {
    slug: "tailwind-vs-traditional-css",
    title: "Tailwind CSS vs. Traditional CSS: A Developer's Perspective",
    date: "2024-06-20",
    excerpt: "A hands-on comparison of Tailwind CSS and traditional CSS for rapid UI development and maintainability.",
  },
  {
    slug: "freelance-tips-for-web-developers",
    title: "Top 5 Freelance Tips for Web Developers",
    date: "2024-06-10",
    excerpt: "Practical advice for web developers looking to succeed in the freelance world, from portfolio to client management.",
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in-up text-base-content">
      <h1 className="text-4xl font-bold mb-8 text-primary text-center">Blog & Insights</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {posts.map((post) => (
          <div key={post.slug} className="card bg-base-100 text-base-content shadow-xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-accent">{post.title}</h2>
              <div className="text-sm text-base-content/60 mb-4">{new Date(post.date).toLocaleDateString()}</div>
              <p className="mb-4">{post.excerpt}</p>
            </div>
            <div>
              <Link href={`/blog/${post.slug}`} className="btn btn-outline btn-primary btn-sm">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 