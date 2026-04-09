"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            <span>Introducing AI-Powered Learning</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-heading)' }}>
          <span className="text-foreground">Future-proof education</span>
          <br />
          <span className="text-foreground">for the </span>
          <span className="text-accent">AI era</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Empowering all students with AI literacy and coding skills. 
          We&apos;re bridging the digital divide to ensure every learner is ready for tomorrow&apos;s opportunities.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium"
          >
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-border hover:bg-secondary px-8 py-6 text-base font-medium"
          >
            View Programs
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>1000+</span>
            <span className="mt-2 text-sm text-muted-foreground">Students Reached</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>50+</span>
            <span className="mt-2 text-sm text-muted-foreground">Partner Schools</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>95%</span>
            <span className="mt-2 text-sm text-muted-foreground">Completion Rate</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>AI+</span>
            <span className="mt-2 text-sm text-muted-foreground">Ready Curriculum</span>
          </div>
        </div>
      </div>
    </section>
  )
}
