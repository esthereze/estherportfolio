'use client'

import type React from 'react'
import { useState } from 'react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/esthereze' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/esther-tech' },
  { label: 'Medium', href: 'https://medium.com/@esther-eze' },
]

export function ContactFooter() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-sm text-primary">// contact</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Let&apos;s turn data into a story.
          </h2>
          <p className="mt-4 max-w-md text-pretty text-muted-foreground">
            Have a project, a dataset, or a doc that needs clarity? Drop a message and I&apos;ll get back to you.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-4 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="flex h-full flex-col justify-center rounded-xl border border-primary/40 bg-primary/5 p-8 text-center">
              <p className="font-mono text-primary">Message sent</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Thanks for reaching out — I&apos;ll reply as soon as I can.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-sm text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="Ada Lovelace"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-sm text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-sm text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="Tell me about your project…"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-6xl items-center justify-between border-t border-border pt-8">
        <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} — Where data meets narrative.</p>
        <a href="#top" className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
