"use client"

import { useEffect, useState, useRef } from "react"

export default function Timeline() {
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

  const events = [
    {
      day: "DAY 1",
      date: "July 15",
      events: [
        { time: "9:00 AM", title: "Opening Ceremony", description: "The Hand of the King welcomes all participants" },
        { time: "10:30 AM", title: "Team Formation", description: "Form your small council of hackers" },
        { time: "12:00 PM", title: "Lunch Feast", description: "A feast worthy of King Robert Baratheon" },
        { time: "1:00 PM", title: "Hacking Begins", description: "The battle of code commences" },
        { time: "7:00 PM", title: "Evening Banquet", description: "Refuel for the long night ahead" },
      ],
    },
    {
      day: "DAY 2",
      date: "July 16",
      events: [
        {
          time: "All Day",
          title: "Hacking Continues",
          description: "The night is dark and full of terrors... and bugs",
        },
        {
          time: "10:00 AM",
          title: "Workshop: Dragon API",
          description: "Learn to integrate with the latest Dragon API",
        },
        { time: "2:00 PM", title: "Mentor Sessions", description: "Guidance from the maesters of technology" },
        { time: "6:00 PM", title: "Game of Codes", description: "A mini-competition to break the ice" },
      ],
    },
    {
      day: "DAY 3",
      date: "July 17",
      events: [
        { time: "9:00 AM", title: "Hacking Ends", description: "Put down your keyboards, the battle is over" },
        { time: "10:00 AM", title: "Project Submissions", description: "Present your creation to the small council" },
        { time: "1:00 PM", title: "Judging", description: "The judges will decide your fate" },
        { time: "4:00 PM", title: "Closing Ceremony", description: "Winners announced and prizes awarded" },
        { time: "6:00 PM", title: "Farewell Feast", description: "Celebrate your victories and forge new alliances" },
      ],
    },
  ]

  return (
    <section id="timeline" className="py-20 bg-[#0a0a0a] relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/3 w-64 h-64 bg-[#8b0000]/10 blur-3xl rounded-full"></div>
      <div className="absolute right-0 bottom-1/3 w-64 h-64 bg-[#c8a951]/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#c8a951] mb-4 inline-block border-b-2 border-[#c8a951]/30 pb-2">
              THE CHRONICLES
            </h2>
            <p className="text-lg text-[#d0d0d0]/80 mt-6 max-w-3xl mx-auto">
              A detailed timeline of the events that will unfold during the three days of glory. Prepare yourself for an
              epic journey of coding, learning, and feasting.
            </p>
          </div>

          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#8b0000] via-[#c8a951] to-[#8b0000] rounded"></div>

            {events.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`mb-16 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + dayIndex * 200}ms` }}
              >
                <div className="flex justify-center mb-8">
                  <div className="bg-[#111] border-2 border-[#c8a951] rounded-full px-6 py-2 z-10">
                    <h3 className="text-xl font-bold text-[#c8a951]">
                      {day.day} - {day.date}
                    </h3>
                  </div>
                </div>

                <div className="grid gap-8">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className={`flex flex-col ${eventIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-4`}
                    >
                      <div className={`w-full md:w-1/2 ${eventIndex % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        <div className="bg-[#111] border border-[#c8a951]/20 p-4 rounded-lg hover:border-[#c8a951]/50 transition-all duration-300">
                          <h4 className="text-lg font-bold text-[#c8a951]">{event.title}</h4>
                          <p className="text-sm text-[#c8a951]/70 mb-2">{event.time}</p>
                          <p className="text-[#d0d0d0]">{event.description}</p>
                        </div>
                      </div>

                      <div className="hidden md:block w-4 h-4 bg-[#c8a951] rounded-full border-4 border-[#111] z-10"></div>

                      <div className="w-full md:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
