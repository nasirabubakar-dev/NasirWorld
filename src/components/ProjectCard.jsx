import { CloudSun, ExternalLink, Gamepad2, Github, KeyRound, ListTodo } from 'lucide-react';

const visualIcons = { weather: CloudSun, game: Gamepad2, todo: ListTodo, password: KeyRound };

export default function ProjectCard({ project, featured = false }) {
  const VisualIcon = visualIcons[project.visual];
  const previewClass = featured
    ? 'aspect-[16/9] lg:aspect-auto lg:min-h-[22rem] lg:w-2/5'
    : 'aspect-[16/9]';

  return (
    <article className={'group flex flex-col overflow-hidden rounded-[var(--radius)] border border-white/10 bg-base-surface transition-all duration-300 ease-smooth hover:border-accent-primary/40 hover:shadow-xl hover:shadow-black/30 ' + (featured ? 'lg:flex-row' : '')}>
      <div className={'relative shrink-0 overflow-hidden bg-base-elevated ' + previewClass}>
        {project.img ? (
          <img
            src={project.img}
            alt={project.imageAlt || project.name + ' project screenshot'}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent-primary/20 via-base-elevated to-accent-secondary/10 text-accent-primary">
            {VisualIcon && <VisualIcon size={42} strokeWidth={1.5} aria-hidden="true" />}
            <span className="px-4 text-center text-sm font-semibold tracking-wide text-ink-secondary">{project.name}</span>
          </div>
        )}
        {project.category && (
          <div className="absolute left-3 top-3">
            <span className="rounded-full border border-white/10 bg-base-bg/85 px-3 py-1 text-xs font-medium text-ink-secondary backdrop-blur-sm">{project.category}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className={featured ? 'text-2xl font-bold text-ink-primary' : 'text-xl font-bold text-ink-primary'}>{project.name}</h3>
          {project.role && <span className="text-xs text-ink-secondary">{project.role}</span>}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{project.description}</p>

        {featured && (project.problem || project.approach) && (
          <div className="mt-5 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
            {project.problem && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-secondary">The goal</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{project.problem}</p>
              </div>
            )}
            {project.approach && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-secondary">My approach</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{project.approach}</p>
              </div>
            )}
          </div>
        )}

        {project.highlights && (
          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-secondary">Key features</p>
            <ul className="flex flex-wrap gap-2">
              {project.highlights.map((item) => <li key={item} className="tag">{item}</li>)}
            </ul>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
            <ExternalLink size={16} aria-hidden="true" />
            {project.id === 'rock-paper-scissors' ? 'Play Game' : 'Live Demo'}
          </a>
          {project.sourceCode && (
            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1">
              <Github size={16} aria-hidden="true" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
