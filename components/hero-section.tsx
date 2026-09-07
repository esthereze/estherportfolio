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
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
          Data Analyst &middot; Technical Writer &middot; Frontend
        </p>
        <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Where Data Meets <span className="text-primary">Narrative.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          I&apos;m a multi-disciplinary tech professional bridging the gap between data analysis, technical writing, and
          frontend layout &mdash; turning raw numbers into clear stories and clean, well-documented interfaces.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View my work
          </a>
          <a
            href="#journey"
            className="rounded-md border border-border px-6 py-3 font-mono text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            My journey
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-border pt-8">
          {[
            { value: '6+', label: 'Years across the stack' },
            { value: '3', label: 'Disciplines mastered' },
            { value: '∞', label: 'Stories in the data' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-mono text-3xl font-bold text-primary md:text-4xl">{stat.value}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
