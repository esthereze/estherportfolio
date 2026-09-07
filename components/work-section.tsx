import Image from 'next/image'

const projects = [
  {
    kind: 'Data Analysis',
    title: 'Revenue Insights Dashboard',
    description:
      'An interactive analytics dashboard turning raw sales data into clear, actionable KPIs and trend narratives.',
    image: '/projects/dashboard.png',
    alt: 'Dark-mode data analytics dashboard with charts and KPI cards',
    stack: ['SQL', 'Python', 'PowerBI'],
  },
  {
    kind: 'Technical Writing',
    title: 'API Documentation Guide',
    description:
      'A developer documentation sample: structured, searchable, and written so the complex feels obvious.',
    image: '/projects/docs.png',
    alt: 'Dark-mode technical documentation site with sidebar and code blocks',
    stack: ['Markdown', 'Docs', 'IA'],
  },
  {
    kind: 'Featured Blog Post',
    title: 'From Code to Data',
    description:
      'A featured essay on the journey from writing custom HTML/CSS to analyzing data at scale.',
    image: '/projects/blog.png',
    alt: 'Dark-mode blog article page with headline and body text',
    stack: ['SEO', 'Writing', 'Strategy'],
  },
]

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-primary">// featured work</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">Selected projects</h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            One from each discipline. Replace the placeholder links with your live URLs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">{project.kind}</span>
                <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <li key={tag} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
                {/* INSERT PROJECT LINK HERE — replace href="#" with your live URL */}
                <a
                  href="#"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2.5 font-mono text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  View Project
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
