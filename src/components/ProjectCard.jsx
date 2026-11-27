import { CloudSun, ExternalLink, Gamepad2, Github, KeyRound, ListTodo } from 'lucide-react';

const visualIcons = { weather: CloudSun, game: Gamepad2, todo: ListTodo, password: KeyRound };

export default function ProjectCard({ project, featured = false }) {
  const VisualIcon = visualIcons[project.visual];
  const previewClass = featured ? 'aspect-[16/9] lg:aspect-auto lg:min-h-[22rem] lg:w-2/5' : 'aspect-[16/9]';

  return (
    <article className={'group flex flex-col overflow-hidden rounded-[var(--radius)] border border-white/10 bg-base-surface/75 shadow-xl shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/35 hover:shadow-2xl hover:shadow-black/25 ' + (featured ? 'lg:flex-row' : '')}>
      <div className={'relative shrink-0 overflow-hidden bg-base-elevated ' + previewClass}>
        {project.img ? (
          <img src={project.img} alt={project.imageAlt || project.name + ' project screenshot'} className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]" loading="lazy" decoding="async" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,rgba(139,92,246,.22),transparent_60%)] text-accent-primary">
            {VisualIcon && <VisualIcon size={42} strokeWidth={1.5} aria-hidden="true" />}
            <span className="px-4 text-center text-sm font-semibold tracking-wide text-ink-secondary">{project.name}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/40 to-transparent opacity-70" />
        {project.category && (
          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-white/10 bg-[#070b14]/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-ink-secondary backdrop-blur-md">{project.category}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className={featured ? 'text-2xl font-bold tracking-tight text-ink-primary' : 'text-xl font-bold tracking-tight text-ink-primary'}>{project.name}</h3>
          {project.role && <span className="tag">{project.role}</span>}
        </div>
        <p className="mt-3 text-sm leading-7 text-ink-secondary">{project.description}</p>

        {featured && (project.problem || project.approach) && (
          <div className="mt-6 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
            {project.problem && <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-secondary">The goal</p><p className="mt-2 text-sm leading-6 text-ink-secondary">{project.problem}</p></div>}
            {project.approach && <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-secondary">My approach</p><p className="mt-2 text-sm leading-6 text-ink-secondary">{project.approach}</p></div>}
          </div>
        )}

        {project.highlights && (
          <div className="mt-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-secondary">Key features</p>
            <ul className="flex flex-wrap gap-2">{project.highlights.map((item) => <li key={item} className="tag">{item}</li>)}</ul>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
            <ExternalLink size={16} aria-hidden="true" />
            {project.id === 'rock-paper-scissors' ? 'Play Game' : 'Live Demo'}
          </a>
          {project.sourceCode && <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1"><Github size={16} aria-hidden="true" />Source Code</a>}
        </div>
      </div>
    </article>
  );
}
