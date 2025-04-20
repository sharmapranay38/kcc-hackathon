"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function Team() {
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
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const team = [
    {
      name: "Eddard Stark",
      role: "Hackathon Director",
      house: "House Stark",
      image: "/stark.jpg",
      description:
        "Lord of Winterfell and Warden of the North. Known for his honor and fairness in judging hackathon projects.",
    },
    {
      name: "Tyrion Lannister",
      role: "Technical Advisor",
      house: "House Lannister",
      image: "/lannister.jpg",
      description:
        "A brilliant mind with extensive knowledge of complex systems and creative problem-solving approaches.",
    },
    {
      name: "Daenerys Targaryen",
      role: "Innovation Lead",
      house: "House Targaryen",
      image: "/Targaryen.jpg",
      description:
        "Brings revolutionary ideas and disruptive technologies to the hackathon. Expert in scaling solutions.",
    },
    {
      name: "Jon Snow",
      role: "Community Manager",
      house: "Night's Watch",
      image: "/placeholder.svg?height=400&width=400",
      description: "Brings together diverse groups and ensures everyone works together harmoniously during the event.",
    },
    {
      name: "Arya Stark",
      role: "Security Expert",
      house: "House Stark",
      image: "/stark.jpg",
      description: "Specializes in cybersecurity and penetration testing. No system is safe from her scrutiny.",
    },
    {
      name: "Samwell Tarly",
      role: "Knowledge Master",
      house: "The Citadel",
      image: "/margaery.jpg",
      description: "Provides participants with research resources and documentation. Expert in information retrieval.",
    },
  ]

  return (
    <section id="team" className="py-20 relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-[#8b0000]/10 blur-3xl rounded-full"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-[#c8a951]/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#c8a951] mb-4 inline-block border-b-2 border-[#c8a951]/30 pb-2">
              THE SMALL COUNCIL
            </h2>
            <p className="text-lg text-[#d0d0d0]/80 mt-6 max-w-3xl mx-auto">
              Meet the lords and ladies who have come together to organize this grand tournament of minds. They will
              guide you through your journey and judge your creations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8b0000] to-[#c8a951] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-[#111] border border-[#c8a951]/20 rounded-lg overflow-hidden hover:transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-64 relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-[#111] border border-[#c8a951]/50 px-3 py-1 rounded-full">
                      <p className="text-xs text-[#c8a951]">{member.house}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#c8a951] mb-1">{member.name}</h3>
                    <p className="text-sm text-[#d0d0d0]/70 mb-3">{member.role}</p>
                    <p className="text-[#d0d0d0]">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
