// ─────────────────────────────────────────────────────────────────────────
// EDIT YOUR WORK HERE
// Each item can have any number of links. Paste your live URLs into `links`.
// Leave `links` empty ([]) and the card shows a quiet status badge instead of
// a broken link — safe to ship. Add or remove items freely.
// ─────────────────────────────────────────────────────────────────────────
type ProjectLink = { label: string; href: string }
type Project = {
  kind: string
  title: string
  description: string
  tags: string[]
  links: ProjectLink[]
  status?: string // shown when there are no links (defaults to "Coming soon")
}

const projects: Project[] = [
  {
    kind: 'Beauty Blogging',
    title: 'Where the writing started',
    description:
      'My first writing home was the beauty niche — reviews, routines, and product breakdowns for real readers. The blog is old and no longer accessible, but it is where the habit was built.',
    tags: ['Writing', 'Beauty', 'SEO'],
    links: [],
    status: 'Archived — no longer live',
  },
  {
    kind: 'Content Writing',
    title: 'Articles on Medium',
    description:
      'My ongoing writing lives on Medium — from beauty beginnings to my step into tech. Proof I can pick up an unfamiliar subject and explain it clearly.',
    tags: ['Writing', 'Content', 'Medium'],
    links: [{ label: 'Read on Medium', href: 'https://medium.com/@esther-eze' }],
  },
  {
    kind: 'Technical Writing',
    title: 'Describing what an app does',
    description:
      'Documentation and articles that explain how an app and its features work — written for people, not as API reference. Paired with Fylo, a landing page I built to understand the product I was describing.',
    tags: ['Docs', 'Product', 'HTML', 'CSS'],
    links: [
      { label: 'Read on Medium', href: 'https://medium.com/@esther-eze' },
      // INSERT the exact Fylo repo URL below (e.g. https://github.com/esthereze/fylo-landing-page)
      { label: 'Fylo repo', href: 'https://github.com/esthereze' },
    ],
  },
  {
    kind: 'Web Basics',
    title: 'HTML & CSS pages',
    description:
      'Simple pages I build by hand with HTML and CSS, leaning on research when I get stuck. Not a developer yet — but not afraid of code.',
    tags: ['HTML', 'CSS', 'Research'],
    // INSERT a live page, CodePen, or repo link
    links: [{ label: 'View on GitHub', href: 'https://github.com/esthereze' }],
  },
  {
    kind: 'Data Analysis',
    title: 'Data analytics apprenticeship',
    description:
      'The skills I picked up through my data analytics apprenticeship — turning spreadsheets into answers with Excel and MySQL, then visualizing them in Tableau and Power BI.',
    tags: ['Excel', 'MySQL', 'Tableau', 'Power BI'],
    // INSERT a dashboard, workbook, or write-up link when ready
    links: [],
    status: 'Samples coming soon',
  },
]

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-primary">// the work</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Pieces of the journey
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            One sample from each chapter — some live, some still on the way. Update the links in{' '}
            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs text-secondary-foreground">
              work-section.tsx
            </code>{' '}
            whenever you&apos;re ready.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const hasLinks = project.links.length > 0
            return (
              <article
                key={project.title}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">
                    {project.kind}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {hasLinks ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2.5 font-mono text-sm font-medium text-primary shadow-[0_0_20px_-6px_var(--color-primary)] transition-colors hover:bg-primary/20"
                      >
                        {link.label}
                        <span aria-hidden="true">→</span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <span className="mt-6 inline-flex items-center gap-2 self-start rounded-md border border-dashed border-border px-4 py-2.5 font-mono text-sm text-muted-foreground">
                    {project.status ?? 'Coming soon'}
                  </span>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
