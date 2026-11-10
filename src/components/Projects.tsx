import { useEffect, useRef } from 'react'
import { PROJECTS } from '../data/projects'

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('fade-in')
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article className="blog-card" ref={ref}>
      <div className="blog-meta">
        <span className="blog-date">open source</span>
        <span className="blog-tag">{project.tag}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a href={project.url} target="_blank" rel="noreferrer" className="blog-link">View code →</a>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">05.</span> Projects
        </h2>
        <p className="section-subtitle">Payments tooling and side projects I build outside of work.</p>
        <div className="blog-grid">
          {PROJECTS.map(p => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
