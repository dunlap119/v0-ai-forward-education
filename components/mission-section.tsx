import { Heart, GraduationCap, Globe } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "All Kids",
    description: "Top-performing schools often offer cutting-edge computer science education. But in many others—particularly those serving under-resourced and economically disadvantaged students—access is limited. We bridge that gap.",
  },
  {
    icon: GraduationCap,
    title: "Learn to Code + AI",
    description: "Our curriculum delivers the depth needed for AP Computer Science and the breadth to build AI-powered applications. We incorporate real-world problem solving, creativity, and project-based learning.",
  },
  {
    icon: Globe,
    title: "Love to Code",
    description: "If it&apos;s not fun, it&apos;s not being taught right. Our curriculum sparks curiosity and excitement, helping break cycles of generational poverty by opening access to the tools shaping the future.",
  },
]

export function MissionSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Our Mission</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
            All kids learn and love coding—and AI
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We&apos;re building a scalable, curriculum-driven program that brings high-quality, 
            engaging computer science and AI education to all learners.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="relative flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                    {index + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <value.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  {value.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
