const pillars = [
  {
    name: 'Data Analysis',
    hint: 'learning',
    note: 'Foundational, hands-on',
    skills: ['Excel', 'MySQL', 'Tableau', 'Power BI'],
  },
  {
    name: 'Writing',
    hint: 'strongest',
    note: 'Where I am most confident',
    skills: ['Beauty blogging', 'Technical writing (apps & features)', 'A tech article'],
  },
  {
    name: 'Web Basics',
    hint: 'building',
    note: 'Simple pages, with research',
    skills: ['HTML', 'CSS', 'Layout & styling'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-primary">// where I stand</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">Honest about my toolkit</h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Some of these I am strong in, others I am still growing into. Here is the real picture.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.name}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-2 flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{pillar.name}</h3>
                <span className="font-mono text-xs text-primary">{pillar.hint}()</span>
              </div>
              <p className="mb-6 font-mono text-xs text-muted-foreground">{pillar.note}</p>
              <ul className="space-y-3">
                {pillar.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
                    <span className="neon-glow h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
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
