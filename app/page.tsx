import Hero from "@/components/hero"
import About from "@/components/about"
import Timeline from "@/components/timeline"
import Team from "@/components/team"
import Faq from "@/components/faq"
import Prizes from "@/components/prizes"
import Venue from "@/components/venue"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#d0d0d0]">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Team />
      <Prizes />
      <Venue />
      <Faq />
      <Footer />
    </main>
  )
}
