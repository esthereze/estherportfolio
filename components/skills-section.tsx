const pillars = [
  {
    name: 'Data',
    hint: 'analyze',
    skills: ['SQL', 'Python', 'Excel', 'PowerBI', 'Tableau'],
  },
  {
    name: 'Content & Code',
    hint: 'build',
    skills: ['Technical Writing', 'HTML5', 'CSS3', 'Markdown', 'Git'],
  },
  {
    name: 'Strategy',
    hint: 'grow',
    skills: ['SEO', 'Content Strategy', 'Information Architecture'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-primary">// skills matrix</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">Three pillars, one toolkit</h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            The overlap is where the interesting work happens.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.name}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{pillar.name}</h3>
                <span className="font-mono text-xs text-primary">{pillar.hint}()</span>
              </div>
              <ul className="space-y-3">
                {pillar.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
