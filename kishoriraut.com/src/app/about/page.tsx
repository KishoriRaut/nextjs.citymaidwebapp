import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 text-base-content flex flex-col items-center">
      <a href="/resume.pdf" download className="btn btn-primary mb-8" target="_blank" rel="noopener">Download Resume</a>
      <div className="card bg-base-100 shadow-xl p-8 max-w-2xl w-full">
        <div className="flex flex-col items-center">
          <Image src="/window.svg" alt="Kishori Raut" width={120} height={120} className="rounded-full mb-4" />
          <h1 className="text-4xl font-bold mb-2 text-primary">About Me</h1>
          <p className="mb-4 text-center">I am Kishori Raut, a passionate web and app developer with a focus on building modern, scalable, and user-friendly digital solutions. I love working with the latest technologies and helping clients achieve their goals.</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="badge badge-primary">Next.js</span>
            <span className="badge badge-secondary">React</span>
            <span className="badge badge-accent">Tailwind CSS</span>
            <span className="badge badge-info">DaisyUI</span>
            <span className="badge badge-success">TypeScript</span>
            <span className="badge badge-warning">AI Tools</span>
          </div>
        </div>
      </div>
    </div>
  );
} 