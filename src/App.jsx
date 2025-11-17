import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCollection from './components/FeaturedCollection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#2A1F1A]">
      {/* soft background texture and lighting */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,237,231,0.8),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(240,221,210,0.8),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(233,201,180,0.5),transparent_40%)]" />
      </div>

      <div className="relative z-10">
        <div className="sticky top-4 px-6">
          <Navbar />
        </div>

        <main>
          <Hero />
          <FeaturedCollection />
          <Testimonials />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
