"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [isHomePage])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/companies", label: "Companies" },
    { href: "/leadership", label: "Leadership" },
    { href: "/strategies", label: "Strategies" },
    { href: "/contact", label: "Contact" },
  ]

  // Determine navigation style based on page and scroll state
  const getNavStyle = () => {
    if (isHomePage) {
      return isScrolled ? "bg-black/95 backdrop-blur-sm border-b !border-neutral-800" : "bg-transparent"
    }
    return "bg-black/95 backdrop-blur-sm border-b !border-neutral-800"
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-transparent ${getNavStyle()}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light tracking-wider text-white">
            OWN.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-300 hover:text-white transition-colors ${
                  pathname === item.href ? "text-white font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-0.5" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white mt-1 transition-all ${isOpen ? "-rotate-45 -translate-y-0.5" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800 bg-black/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 text-gray-300 hover:text-white transition-colors ${
                  pathname === item.href ? "text-white font-medium" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
