import { Brain, Code, Lightbulb, Users, Rocket, Shield } from "lucide-react"

const features = [
  {
    name: "AI Literacy",
    description: "Students learn to understand, use, and critically evaluate AI tools—preparing them to be creators, not just consumers of technology.",
    icon: Brain,
  },
  {
    name: "Real-World Coding",
    description: "Project-based curriculum that takes students from fundamentals to building their own applications and AI-powered projects.",
    icon: Code,
  },
  {
    name: "Critical Thinking",
    description: "We teach students to think critically about AI ethics, bias, and the societal impact of emerging technologies.",
    icon: Lightbulb,
  },
  {
    name: "Inclusive Access",
    description: "Breaking down barriers to ensure underserved communities have equal access to cutting-edge tech education.",
    icon: Users,
  },
  {
    name: "Future-Ready Skills",
    description: "Curriculum aligned with industry needs, preparing students for AP Computer Science and beyond.",
    icon: Rocket,
  },
  {
    name: "Safe Learning",
    description: "Age-appropriate AI education with built-in guardrails and emphasis on responsible technology use.",
    icon: Shield,
  },
]

export function FeaturesSection() {
  return (
    <section id="programs" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Our Approach</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Education designed for the AI age
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We believe coding is a superpower—and every student deserves the chance to unlock it.
            Our curriculum prepares learners for a world where AI is everywhere.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:bg-card/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  {feature.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
