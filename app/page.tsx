import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { TimelineSection } from '@/components/timeline-section'
import { SkillsSection } from '@/components/skills-section'
import { WorkSection } from '@/components/work-section'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <HeroSection />
        <TimelineSection />
        <SkillsSection />
        <WorkSection />
        <ContactFooter />
      </main>
    </div>
  )
}
