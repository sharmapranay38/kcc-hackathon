"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { MapPin, Clock, Utensils, Wifi, Coffee } from "lucide-react"

export default function Venue() {
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

  const amenities = [
    { icon: <Wifi className="h-5 w-5 text-[#c8a951]" />, name: "High-speed WiFi" },
    { icon: <Coffee className="h-5 w-5 text-[#c8a951]" />, name: "Unlimited coffee & tea" },
    { icon: <Utensils className="h-5 w-5 text-[#c8a951]" />, name: "Catered meals" },
    { icon: <Clock className="h-5 w-5 text-[#c8a951]" />, name: "24/7 access" },
  ]

  return (
    <section id="venue" className="py-20 relative" ref={sectionRef}>
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
              THE BATTLEGROUND
            </h2>
            <p className="text-lg text-[#d0d0d0]/80 mt-6 max-w-3xl mx-auto">
              Our hackathon will be held in the grand halls of the Red Keep, the most prestigious venue in all of King's
              Landing. Prepare yourself for an environment worthy of the greatest minds in the realm.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8b0000] to-[#c8a951] rounded-lg blur opacity-25"></div>
              <div className="relative bg-[#111] rounded-lg p-1">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="The Red Keep venue"
                  width={800}
                  height={600}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>

            <div
              className={`space-y-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="bg-[#111] border border-[#c8a951]/20 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <MapPin className="h-6 w-6 text-[#c8a951] mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-[#c8a951]">Location</h3>
                    <p className="text-[#d0d0d0]">The Red Keep, Aegon's Hill</p>
                    <p className="text-[#d0d0d0]">King's Landing, Crownlands</p>
                  </div>
                </div>

                <div className="border-t border-[#c8a951]/10 pt-4 mt-4">
                  <h4 className="text-lg font-bold text-[#c8a951] mb-2">Amenities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        {amenity.icon}
                        <span className="ml-2 text-[#d0d0d0] text-sm">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#111] border border-[#c8a951]/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#c8a951] mb-4">Getting There</h3>
                <ul className="space-y-3">
                  <li className="text-[#d0d0d0]">
                    <span className="font-bold text-[#c8a951]">By Dragon:</span> Dragon landing pads available on the
                    east side of the castle.
                  </li>
                  <li className="text-[#d0d0d0]">
                    <span className="font-bold text-[#c8a951]">By Horse:</span> Stables available for all participants
                    at the King's Gate.
                  </li>
                  <li className="text-[#d0d0d0]">
                    <span className="font-bold text-[#c8a951]">By Ship:</span> Dock at Blackwater Bay and take the royal
                    carriages to the venue.
                  </li>
                </ul>
              </div>

              <div className="bg-[#111] border border-[#c8a951]/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#c8a951] mb-4">Accommodation</h3>
                <p className="text-[#d0d0d0] mb-3">
                  Limited rooms are available within the Red Keep for participants. Alternative lodging can be found in
                  nearby inns throughout King's Landing.
                </p>
                <p className="text-[#d0d0d0]">
                  <span className="font-bold text-[#c8a951]">Note:</span> Book early as rooms fill quickly during the
                  hackathon season!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
