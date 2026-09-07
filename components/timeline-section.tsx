'use client'

import { useState } from 'react'

const milestones = [
  {
    period: 'Chapter 01',
    title: 'Beauty Blogging',
    tag: 'Where it started',
    description:
      'I found my voice writing about beauty — reviews, routines, and recommendations. This is where I learned to write for real people and keep them reading.',
    highlights: ['Beauty niche', 'Writing for an audience', 'Consistency'],
  },
  {
    period: 'Chapter 02',
    title: 'My First Tech Article',
    tag: 'A new curiosity',
    description:
      'I stepped outside my comfort zone and wrote a single blog in the tech niche. It was just one piece, but it opened the door to a whole different world.',
    highlights: ['Tech niche', 'One brave first step', 'New territory'],
  },
  {
    period: 'Chapter 03',
    title: 'Basic HTML & CSS',
    tag: 'Learning to build',
    description:
      'I started putting pages together with HTML and CSS. I am not a full-on developer — I lean on research when I get stuck — but I can build and style simple layouts on my own.',
    highlights: ['HTML', 'CSS', 'Learning by research'],
  },
  {
    period: 'Chapter 04',
    title: 'Technical Writing',
    tag: 'Explaining the product',
    description:
      'I moved into technical writing focused on describing how an app works for its users — clear product and feature explanations, not deep API documentation.',
    highlights: ['App & feature docs', 'Clear explanations', 'User-focused'],
  },
  {
    period: 'Chapter 05',
    title: 'Data Analysis',
    tag: 'Where I am now',
    description:
      'Right now I am learning to make sense of data. I work at a foundational level with Excel, MySQL, Tableau and Power BI — enough to pull, shape, and visualize data, with plenty more to grow into.',
    highlights: ['Excel', 'MySQL', 'Tableau', 'Power BI'],
  },
]

export function TimelineSection() {
  const [active, setActive] = useState(milestones.length - 1)

  return (
    <section id="journey" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-primary">// the journey</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">One step at a time</h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Every chapter taught me something the next one needed. Tap any point to explore it.
          </p>
        </div>

        <ol className="relative ml-3 border-l border-border">
          {milestones.map((m, i) => {
            const isActive = active === i
            return (
              <li key={m.period} className="relative pb-12 pl-8 last:pb-0">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={isActive}
                  className="group block w-full text-left"
                >
                  <span
                    className={`absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 transition-colors ${
                      isActive
                        ? 'neon-glow border-primary bg-primary'
                        : 'border-border bg-background group-hover:border-primary'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-sm text-primary">{m.period}</span>
                  <span className="ml-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {m.tag}
                  </span>
                  <h3
                    className={`mt-2 text-xl font-semibold transition-colors md:text-2xl ${
                      isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                    }`}
                  >
                    {m.title}
                  </h3>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isActive ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="rounded-lg border border-border bg-card p-5">
                      <p className="text-pretty leading-relaxed text-muted-foreground">{m.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {m.highlights.map((h) => (
                          <li
                            key={h}
                            className="rounded-md bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
