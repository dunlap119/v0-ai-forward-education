"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Cpu, Zap } from "lucide-react"

const aiModules = [
  {
    title: "Understanding AI",
    description: "How AI works, its capabilities and limitations, and its role in everyday life.",
    icon: Bot,
    level: "Foundational",
  },
  {
    title: "AI Tools & Applications",
    description: "Hands-on experience with AI tools for creativity, productivity, and problem-solving.",
    icon: Cpu,
    level: "Practical",
  },
  {
    title: "Building with AI",
    description: "Create AI-powered projects and understand the basics of machine learning.",
    icon: Zap,
    level: "Advanced",
  },
]

export function AISection() {
  return (
    <section id="ai-learning" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">AI-Forward Learning</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Preparing students for an AI-driven world
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              AI is transforming every industry. Our curriculum ensures students don&apos;t just use AI—they 
              understand it, shape it, and leverage it responsibly to solve real problems.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-foreground">Learn the fundamentals</h4>
                  <p className="text-sm text-muted-foreground">Understand how AI systems work and their impact on society</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-foreground">Apply knowledge practically</h4>
                  <p className="text-sm text-muted-foreground">Use AI tools effectively and responsibly in real projects</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-foreground">Build and innovate</h4>
                  <p className="text-sm text-muted-foreground">Create AI-powered solutions and prepare for future careers</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore AI Curriculum
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right content - AI Modules */}
          <div className="space-y-4">
            {aiModules.map((module, index) => (
              <div
                key={module.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <module.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                        {module.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {module.level}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
