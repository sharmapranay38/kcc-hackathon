"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hot.jpg"
          alt="Game of Thrones inspired background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center pt-40">
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
        </div>


        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 mt-20 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="#register"
            className="bg-[#8b0000] hover:bg-[#a52a2a] text-white px-8 py-3 rounded-md text-lg font-bold uppercase tracking-wider border-2 border-[#c8a951]/30 hover:border-[#c8a951] transition-all duration-300"
          >
            Register Now
          </Link>
          <Link
            href="#about"
            className="bg-transparent hover:bg-[#c8a951]/10 text-[#c8a951] px-8 py-3 rounded-md text-lg font-bold uppercase tracking-wider border-2 border-[#c8a951]/50 hover:border-[#c8a951] transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-6 h-10 border-2 border-[#c8a951]/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#c8a951] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
