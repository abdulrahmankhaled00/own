import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function Companies() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-black via-neutral-100 to-zinc-100 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/commercial-complex.jpg"
            alt="Our companies"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-zinc-900/90"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider text-white mb-8">Our Companies</h1>
          <div className="w-24 h-px bg-gray-400 mx-auto"></div>
        </div>
      </section>

      {/* Al Qima Construction */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-white mb-8">Al Qima Constructions</h2>
              <div className="w-16 h-px bg-gray-400 mb-8"></div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  Since its establishment in 2017, our AL Qima construction company has been a cornerstone of the
                  Egyptian construction industry, providing exceptional construction solutions tailored to the needs of
                  our clients.
                </p>
                <p>
                  At Al Qima construction company, we specialize in delivering high-quality, innovative services for
                  residential, commercial, industrial and infrastructure projects.
                </p>
                <p>
                  What sets us apart is our dedication to using the latest technologies and best practices in concrete
                  construction. From advanced mixing techniques to eco-friendly materials, we continuously strive to
                  enhance efficiency, durability and sustainability.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/construction-site.jpg"
                alt="Construction site"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/images/commercial-complex.jpg"
                alt="Building construction"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/images/modern-apartments.jpg"
                alt="Infrastructure project"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/images/residential-towers.jpg"
                alt="Commercial building"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OWN Developments */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/luxury-compound.jpg"
                alt="Luxury residential"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/images/waterfront-development.jpg"
                alt="Modern development"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/images/luxury-interior.jpg"
                alt="Community spaces"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/images/skyline-view.jpg"
                alt="Sustainable design"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-light text-white mb-8">OWN Developments</h2>
              <div className="w-16 h-px bg-gray-400 mb-8"></div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  OWN developments emerged onto the Egyptian real estate market in 2025, bringing with it a fresh
                  perspective, innovative ideas and commitment to excellence.
                </p>
                <p>
                  Since its inception, OWN developments has quickly established itself as a leading player in the
                  industry, driven by vision to redefine modern living and create vibrant communities that enrich the
                  lives of residents.
                </p>
                <p>
                  With focus on quality, integrity and customer satisfaction, OWN developments has set new standards of
                  excellence in the Egyptian real estate market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
