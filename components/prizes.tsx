"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function Prizes() {
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

  const prizes = [
    {
      place: "1st Place",
      title: "The Iron Throne",
      image: "/ironthrone.avif",
      rewards: [
        "50,000 Gold Dragons",
        "Internship opportunities with the Small Council",
        "Custom-forged trophy resembling the Iron Throne",
        "Featured in the Raven's Newsletter across all Seven Kingdoms",
      ],
    },
    {
      place: "2nd Place",
      title: "Hand of the King",
      image: "/handofking.jpeg",
      rewards: [
        "25,000 Gold Dragons",
        "Exclusive mentorship from industry maesters",
        "Silver pin of the Hand",
        "Recognition at the closing ceremony",
      ],
    },
    {
      place: "3rd Place",
      title: "Master of Coin",
      image: "/placeholder.svg?height=300&width=300",
      rewards: [
        "10,000 Gold Dragons",
        "Premium software licenses",
        "Bronze medallion",
        "Special mention in the Raven's Newsletter",
      ],
    },
  ]

  const specialAwards = [
    {
      title: "Most Innovative Solution",
      reward: "5,000 Gold Dragons + Innovation Scroll",
    },
    {
      title: "Best Technical Implementation",
      reward: "5,000 Gold Dragons + Maester's Chain Link",
    },
    {
      title: "Best UI/UX Design",
      reward: "5,000 Gold Dragons + Artist's Quill",
    },
    {
      title: "People's Choice",
      reward: "5,000 Gold Dragons + Crowd's Favor Banner",
    },
  ]

  return (
    <section id="prizes" className="py-20 bg-[#0a0a0a] relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/3 w-64 h-64 bg-[#8b0000]/10 blur-3xl rounded-full"></div>
      <div className="absolute right-0 bottom-1/3 w-64 h-64 bg-[#c8a951]/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#c8a951] mb-4 inline-block border-b-2 border-[#c8a951]/30 pb-2">
              ROYAL TREASURES
            </h2>
            <p className="text-lg text-[#d0d0d0]/80 mt-6 max-w-3xl mx-auto">
              Compete for glory and riches beyond your wildest dreams. The victors will be rewarded handsomely for their
              valor and innovation on the battlefield of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8b0000] to-[#c8a951] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-[#111] border border-[#c8a951]/20 rounded-lg overflow-hidden p-6 text-center">
                  <div className="mb-4">
                    <Image
                      src={prize.image || "/placeholder.svg"}
                      alt={prize.title}
                      width={150}
                      height={150}
                      className="mx-auto"
                    />
                  </div>

                  <div className="mb-2">
                    <span className="inline-block bg-[#8b0000] text-white px-3 py-1 rounded-full text-sm font-bold">
                      {prize.place}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#c8a951] mb-4">{prize.title}</h3>

                  <ul className="text-left space-y-2">
                    {prize.rewards.map((reward, rewardIndex) => (
                      <li key={rewardIndex} className="flex items-start">
                        <span className="text-[#c8a951] mr-2">⚔️</span>
                        <span className="text-[#d0d0d0] text-sm">{reward}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`bg-[#111] border border-[#c8a951]/20 rounded-lg p-6 transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-[#c8a951] mb-4 text-center">SPECIAL RECOGNITIONS</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {specialAwards.map((award, index) => (
                <div key={index} className="bg-[#0a0a0a] border border-[#c8a951]/10 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-[#c8a951] mb-2">{award.title}</h4>
                  <p className="text-[#d0d0d0] text-sm">{award.reward}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
