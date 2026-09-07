// ─────────────────────────────────────────────────────────────────────────
// EDIT YOUR WORK HERE
// For each item, paste your live URL into `href`. Leave it as "" and the card
// shows a quiet "Coming soon" state instead of a broken link — safe to ship.
// Add or remove items freely; the grid adjusts automatically.
// ─────────────────────────────────────────────────────────────────────────
const projects = [
  {
    kind: 'Beauty Blogging',
    title: 'Beauty niche writing',
    description:
      'Where the writing habit started — reviews, routines, and product breakdowns written for real readers in the beauty space.',
    tags: ['Writing', 'Beauty', 'SEO'],
    href: '', // INSERT your beauty blog URL
  },
  {
    kind: 'Tech Writing',
    title: 'My first tech article',
    description:
      'A single step out of the beauty niche and into tech — proof I can pick up an unfamiliar subject and explain it clearly.',
    tags: ['Writing', 'Tech'],
    href: '', // INSERT your tech article URL
  },
  {
    kind: 'Web Basics',
    title: 'HTML & CSS pages',
    description:
      'Simple pages I built by hand with HTML and CSS, leaning on research when I got stuck. Not a developer yet — but not afraid of code.',
    tags: ['HTML', 'CSS', 'Research'],
    href: '', // INSERT a live page or CodePen link
  },
  {
    kind: 'Technical Writing',
    title: 'App & feature docs',
    description:
      'Documentation that describes what an app does and how to use its features — written for people, not an API reference.',
    tags: ['Docs', 'Product', 'Clarity'],
    href: '', // INSERT a writing sample link
  },
  {
    kind: 'Data Analysis',
    title: 'Excel, SQL & BI dashboards',
    description:
      'Turning spreadsheets into answers — basic analysis in Excel and MySQL, visualized in Tableau and Power BI.',
    tags: ['Excel', 'MySQL', 'Tableau', 'Power BI'],
    href: '', // INSERT a dashboard or workbook link
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
            One sample from each chapter — some live, some still on the way. Drop your links into{' '}
            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs text-secondary-foreground">
              work-section.tsx
            </code>{' '}
            whenever you&apos;re ready.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const hasLink = project.href.trim().length > 0
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

                {hasLink ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-md border border-primary/40 bg-primary/10 px-4 py-2.5 font-mono text-sm font-medium text-primary shadow-[0_0_20px_-6px_var(--color-primary)] transition-colors hover:bg-primary/20"
                  >
                    View
                    <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <span className="mt-6 inline-flex items-center gap-2 self-start rounded-md border border-dashed border-border px-4 py-2.5 font-mono text-sm text-muted-foreground">
                    Coming soon
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
