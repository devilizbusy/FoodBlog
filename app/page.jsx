import { Hero } from '@/components/hero'
import { AboutUs } from '@/components/about-us'
import { LatestArticles } from '@/components/latest-articles'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <AboutUs />
        <LatestArticles />
      </main>
      <Footer />
    </div>
  )
}

