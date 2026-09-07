const links = [
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          <span className="text-foreground">dev</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-primary">data</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-md border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-sm font-medium text-primary transition-colors hover:bg-primary/20"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
