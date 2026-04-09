import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Quote icon */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Quote className="h-8 w-8 text-accent" />
            </div>
          </div>

          {/* Quote text */}
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            &ldquo;Before joining this program, I didn&apos;t think computer science was for me. 
            But now, I&apos;ve built my own game, learned how AI works, and even helped teach younger students. 
            It&apos;s made me feel confident and excited about my future!&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="mt-10">
            <div className="flex items-center justify-center gap-4">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-lg font-bold text-accent">M</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Middle School Student</p>
                <p className="text-sm text-muted-foreground">Create a Loop Program Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
