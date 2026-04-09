import Link from "next/link"

const navigation = {
  programs: [
    { name: "AI Literacy", href: "#" },
    { name: "Coding Fundamentals", href: "#" },
    { name: "AP Computer Science", href: "#" },
    { name: "Summer Programs", href: "#" },
  ],
  resources: [
    { name: "For Educators", href: "#" },
    { name: "For Schools", href: "#" },
    { name: "Curriculum Guide", href: "#" },
    { name: "Research & Impact", href: "#" },
  ],
  organization: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Contact", href: "#" },
  ],
  social: [
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Create a Loop
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              Future-proofing education through AI literacy and coding. 
              Empowering all students for an AI-driven world.
            </p>
          </div>
          
          {/* Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Programs</h3>
                <ul className="mt-4 space-y-3">
                  {navigation.programs.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">Resources</h3>
                <ul className="mt-4 space-y-3">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Organization</h3>
                <ul className="mt-4 space-y-3">
                  {navigation.organization.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">Connect</h3>
                <ul className="mt-4 space-y-3">
                  {navigation.social.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Create a Loop. All rights reserved. Building the future of education.
          </p>
        </div>
      </div>
    </footer>
  )
}
