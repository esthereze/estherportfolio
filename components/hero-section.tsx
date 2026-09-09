export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-36 pb-24 md:pt-44 md:pb-32">
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)',
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-xs tracking-wide text-primary">
          <span className="neon-glow inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
          A work in progress &middot; and proud of it
        </p>
        <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Still <span className="text-primary neon-text">learning</span>, always{' '}
          <span className="text-primary neon-text">building.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          This is my journey so far &mdash; from writing beauty blogs, to my first tech article, to piecing together
          web pages with HTML and CSS, to writing about apps, to making sense of data with Excel, MySQL, Tableau and
          Power BI. I&apos;m not an expert in any one thing yet, and that&apos;s the point: this is a map of where
          I&apos;ve been and where I&apos;m headed.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#journey"
            className="neon-glow rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Follow the journey
          </a>
          <a
            href="#work"
            className="rounded-md border border-border px-6 py-3 font-mono text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            See what I&apos;ve made
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-border pt-8">
          {[
            { value: '5', label: 'Chapters in the journey' },
            { value: '4', label: 'Data tools I use' },
            { value: '1', label: 'Curiosity that keeps growing' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-mono text-3xl font-bold text-primary neon-text md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
