import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-[var(--radius)] border border-white/10 bg-base-surface transition-all duration-300 ease-smooth hover:border-accent-primary/40 hover:shadow-xl hover:shadow-black/30 ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      {/* Visual preview */}
      <div
        className={`relative shrink-0 overflow-hidden bg-base-elevated ${
          featured ? 'h-58 lg:h-auto lg:w-2/5' : 'h-40'
        }`}
      >
       <img src={project.img} alt="Projects Screenshot" className="flex h-full w-full flex-col items-center justify-center gap-3 text-center" />
        </div>
        <div className="absolute top-3 left-3">
          <span className="rounded-full border border-white/10 bg-base-bg/80 px-3 py-1 text-xs font-medium text-ink-secondary backdrop-blur-sm">
            {project.category}
          </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className={`font-bold text-ink-primary ${featured ? 'text-2xl' : 'text-xl'}`}>
          {project.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 group/btn"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1"
          >
            <Github size={16} />
            Source Code
          </a>
        </div>
      </div>
    </article>
  );
}
