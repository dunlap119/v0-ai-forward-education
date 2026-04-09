"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Create a Loop
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-10">
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#programs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Programs
          </Link>
          <Link href="#ai-learning" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            AI Learning
          </Link>
          <Link href="#impact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Impact
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" className="text-sm font-medium">
            Learn More
          </Button>
          <Button className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  Create a Loop
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  <Link
                    href="#about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="#programs"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Programs
                  </Link>
                  <Link
                    href="#ai-learning"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    AI Learning
                  </Link>
                  <Link
                    href="#impact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Impact
                  </Link>
                </div>
                <div className="py-6 space-y-3">
                  <Button variant="ghost" className="w-full justify-center">
                    Learn More
                  </Button>
                  <Button className="w-full justify-center bg-primary text-primary-foreground">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
