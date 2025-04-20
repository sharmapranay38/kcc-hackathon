"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "Team", href: "#team" },
    { name: "Prizes", href: "#prizes" },
    { name: "Venue", href: "#venue" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#c8a951] flex items-center">
          <span className="mr-2">⚔️</span>
          <span className="hidden sm:inline">HACK OF THRONES</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#d0d0d0] hover:text-[#c8a951] transition-colors uppercase text-sm tracking-wider font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#register"
            className="bg-[#8b0000] hover:bg-[#a52a2a] text-white px-4 py-2 rounded uppercase text-sm tracking-wider font-medium border border-[#c8a951]/30 transition-all hover:border-[#c8a951]"
          >
            Register
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-[#c8a951]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-[#c8a951]/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#d0d0d0] hover:text-[#c8a951] transition-colors py-2 uppercase text-sm tracking-wider font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#register"
              className="bg-[#8b0000] hover:bg-[#a52a2a] text-white px-4 py-2 rounded uppercase text-sm tracking-wider font-medium border border-[#c8a951]/30 transition-all hover:border-[#c8a951] text-center"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
