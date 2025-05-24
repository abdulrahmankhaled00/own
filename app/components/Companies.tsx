export default function Companies() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-8">Our Companies</h2>
          <div className="w-16 h-px bg-stone-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Al Qima Construction */}
          <div className="bg-white p-12 rounded-lg shadow-sm">
            <h3 className="text-3xl font-light text-stone-800 mb-6">Al Qima Constructions</h3>
            <div className="w-12 h-px bg-stone-400 mb-8"></div>

            <div className="space-y-6 text-stone-700 leading-relaxed">
              <p>
                Since its establishment in 2017, our AL Qima construction company has been a cornerstone of the Egyptian
                construction industry, providing exceptional construction solutions tailored to the needs of our
                clients.
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

          {/* OWN Developments */}
          <div className="bg-stone-800 text-white p-12 rounded-lg">
            <h3 className="text-3xl font-light mb-6">OWN Developments</h3>
            <div className="w-12 h-px bg-stone-400 mb-8"></div>

            <div className="space-y-6 text-stone-200 leading-relaxed">
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
  )
}
