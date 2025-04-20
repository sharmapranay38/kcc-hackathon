"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronDown } from "lucide-react"

export default function Faq() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

  const faqs = [
    {
      question: "Who can participate in the Westeros Hackathon?",
      answer:
        "The hackathon is open to all residents of the Seven Kingdoms, from the Wall to Dorne. Whether you're a seasoned maester of code or a novice just starting your journey, all skill levels are welcome. Teams can consist of 2-4 members.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "Participants should bring their own laptops, chargers, and any special equipment needed for their projects. We provide food, drinks, WiFi, and plenty of power outlets. Don't forget to bring your house sigil for team identification!",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "The registration fee is 50 Gold Dragons per person. This covers all meals, accommodation, and access to the event. Houses Stark, Tully, Arryn, Greyjoy, Lannister, Tyrell, Baratheon, Martell, and Targaryen may sponsor talented individuals from their regions.",
    },
    {
      question: "What kind of projects can we build?",
      answer:
        "Projects should align with this year's theme: 'A Song of Code and Innovation.' You can build web applications, mobile apps, hardware solutions, AI/ML models, or any tech solution that addresses challenges in Westeros. All projects must be started from scratch during the hackathon.",
    },
    {
      question: "Will there be mentors available?",
      answer:
        "Yes, maesters from the Citadel and tech lords from across the realm will be available to provide guidance and support throughout the event. Mentorship sessions can be scheduled through the Raven Messaging System.",
    },
    {
      question: "Is there a code of conduct?",
      answer:
        "Yes, all participants must adhere to the King's Peace during the event. This includes treating all participants with respect, following venue rules, and adhering to the hackathon guidelines. Any violation may result in expulsion from the event and possibly a stay in the Black Cells.",
    },
    {
      question: "What happens to the intellectual property of our projects?",
      answer:
        "All intellectual property remains with the creating team. However, by participating, you grant the Small Council the right to showcase your project for promotional purposes. The Crown does not claim ownership of any innovations developed during the hackathon.",
    },
    {
      question: "Will there be food and drinks provided?",
      answer:
        "Yes, meals worthy of a royal feast will be provided throughout the event, including breakfast, lunch, dinner, and midnight snacks. Special dietary requirements can be accommodated if specified during registration.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-[#0a0a0a] relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/3 w-64 h-64 bg-[#8b0000]/10 blur-3xl rounded-full"></div>
      <div className="absolute right-0 bottom-1/3 w-64 h-64 bg-[#c8a951]/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#c8a951] mb-4 inline-block border-b-2 border-[#c8a951]/30 pb-2">
              RAVENS' KNOWLEDGE
            </h2>
            <p className="text-lg text-[#d0d0d0]/80 mt-6 max-w-3xl mx-auto">
              Common questions answered by our maesters. If your question is not answered here, send a raven to our
              Small Council.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-[#c8a951]/20 rounded-lg overflow-hidden transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-[#111] hover:bg-[#1a1a1a] transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-bold text-[#c8a951]">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-[#c8a951] transition-transform ${openIndex === index ? "transform rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 p-4" : "max-h-0"
                  }`}
                >
                  <p className="text-[#d0d0d0]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 text-center transition-all duration-700 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-[#d0d0d0]">
              Still have questions? Contact our ravens at{" "}
              <a href="mailto:ravens@westeroshack.com" className="text-[#c8a951] hover:underline">
                ravens@westeroshack.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
