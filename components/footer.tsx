import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#c8a951]/20 relative">
      <div className="absolute left-0 top-0 w-full h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-[#c8a951] flex items-center mb-4">
              <span className="mr-2">⚔️</span>
              WESTEROS HACKATHON
            </Link>
            <p className="text-[#d0d0d0] mb-6 max-w-md">
              The greatest minds of the Seven Kingdoms gather to innovate, collaborate, and compete in this legendary
              hackathon. Join us for three days of coding, learning, and feasting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#c8a951] hover:text-[#d0d0d0] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#c8a951] hover:text-[#d0d0d0] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#c8a951] hover:text-[#d0d0d0] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#c8a951] hover:text-[#d0d0d0] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#c8a951] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Timeline", href: "#timeline" },
                { name: "Team", href: "#team" },
                { name: "Prizes", href: "#prizes" },
                { name: "Venue", href: "#venue" },
                { name: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#d0d0d0] hover:text-[#c8a951] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#c8a951] mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#c8a951] mr-2 mt-0.5" />
                <a
                  href="mailto:ravens@westeroshack.com"
                  className="text-[#d0d0d0] hover:text-[#c8a951] transition-colors"
                >
                  ravens@westeroshack.com
                </a>
              </li>
              <li className="text-[#d0d0d0]">
                <span className="block font-bold text-[#c8a951]">Raven Address:</span>
                The Red Keep, Aegon's Hill
                <br />
                King's Landing, Crownlands
                <br />
                Westeros
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#c8a951]/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#d0d0d0]/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Westeros Hackathon. All rights reserved by decree of the Iron Throne.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-[#d0d0d0]/60 hover:text-[#c8a951] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#d0d0d0]/60 hover:text-[#c8a951] text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-[#d0d0d0]/60 hover:text-[#c8a951] text-sm transition-colors">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
