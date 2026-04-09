"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section id="impact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative px-6 py-16 sm:px-16 sm:py-24 lg:py-32 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Join the Movement</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to future-proof education?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Whether you&apos;re an educator, school administrator, or community partner—join us in preparing 
              the next generation for an AI-powered world.
            </p>
            
            {/* Email signup form */}
            <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                required
                disabled={isSubmitting || isSubmitted}
              />
              <Button 
                type="submit" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Joined!
                  </>
                ) : (
                  <>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            {isSubmitted && (
              <p className="mt-4 text-sm text-accent">
                Thank you! We&apos;ll be in touch soon.
              </p>
            )}

            <p className="mt-6 text-xs text-muted-foreground">
              Join 500+ educators and partners already working with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
