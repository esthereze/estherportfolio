'use client'

import { useState } from 'react'

const milestones = [
  {
    period: '2019 — 2021',
    title: 'Blogging & Custom HTML/CSS',
    tag: 'The Foundation',
    description:
      'Started by hand-crafting blogs with custom HTML and CSS. This is where I learned to structure content, obsess over layout, and speak fluently in the web platform.',
    highlights: ['Semantic HTML', 'Responsive CSS', 'Content-first design'],
  },
  {
    period: '2022 — 2023',
    title: 'Technical Writing',
    tag: 'Clarity as a craft',
    description:
      'Moved into technical writing, translating complex systems into documentation people actually enjoy reading. Learned to make the complicated feel obvious.',
    highlights: ['Developer docs', 'Style guides', 'Information architecture'],
  },
  {
    period: '2025 — Present',
    title: 'Data Analysis',
    tag: 'The Narrative',
    description:
      'Now I analyze data and turn it into narrative — combining SQL, Python, and BI tooling with a writer’s instinct for what the numbers are really saying.',
    highlights: ['SQL & Python', 'Dashboards', 'Data storytelling'],
  },
]

export function TimelineSection() {
  const [active, setActive] = useState(milestones.length - 1)

  return (
    <section id="journey" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-primary">// the journey</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">A career that compounds</h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Each chapter built on the last — from writing code, to writing docs, to writing with data.
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
                        ? 'border-primary bg-primary'
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
