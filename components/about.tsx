"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="about" className="py-20 relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>
      <div className="absolute left-0 top-1/4 w-32 h-64 bg-[#8b0000]/10 blur-3xl rounded-full"></div>
      <div className="absolute right-0 bottom-1/4 w-32 h-64 bg-[#c8a951]/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#c8a951] mb-4 inline-block border-b-2 border-[#c8a951]/30 pb-2">
              ABOUT THE HACKATHON
            </h2>
            <p className="text-lg text-[#d0d0d0]/80 mt-6 max-w-3xl mx-auto">
              Join the greatest minds across the Seven Kingdoms for three days of innovation, collaboration, and
              technological breakthroughs. Winter is coming, and we need your skills to build solutions that will help
              the realm survive and thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`relative transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8b0000] to-[#c8a951] rounded-lg blur opacity-25"></div>
              <div className="relative bg-[#111] rounded-lg p-1">
                <Image
                  src="/hackofthrones.jpg"
                  alt="Previous hackathon"
                  width={800}
                  height={600}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold text-[#c8a951] mb-4">WHY PARTICIPATE?</h3>
              <ul className="space-y-4">
                {[
                  "Collaborate with the brightest minds from all houses of Westeros",
                  "Win legendary prizes worthy of the Iron Throne",
                  "Network with lords, ladies, and maesters of the tech industry",
                  "Showcase your skills and earn recognition throughout the realm",
                  "Learn new technologies from the Citadel's finest scholars",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#c8a951] mr-2">⚔️</span>
                    <span className="text-[#d0d0d0]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-[#111] border border-[#c8a951]/20 rounded-lg">
                <h4 className="text-xl font-bold text-[#c8a951] mb-2">THEME</h4>
                <p className="text-[#d0d0d0]">
                  This year's theme: <span className="font-bold text-[#c8a951]">"A Song of Code and Innovation"</span> —
                  Build solutions that bridge the gap between ancient traditions and modern technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
