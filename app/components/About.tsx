export default function About() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-8">About Us</h2>
            <div className="w-16 h-px bg-stone-400 mb-8"></div>

            <div className="space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                From the beginning we had a vision to establish ourselves as a trailblazer in the real estate sector,
                known for its innovative approaches and commitment to excellence.
              </p>

              <p>
                OWN stands as a beacon of progress, pushing the boundaries of traditional real estate to create not just
                buildings, but sustainable environments where businesses and families can thrive.
              </p>

              <p>
                Our projects are designed with the future in mind, incorporating cutting-edge technologies and
                sustainable practices that set new benchmarks in the industry.
              </p>
            </div>
          </div>

          <div className="bg-white p-12 rounded-lg shadow-sm">
            <h3 className="text-2xl font-light text-stone-800 mb-6">Company History</h3>
            <p className="text-stone-700 leading-relaxed">
              With over 30 years of experience spanning the GCC, across multiple sectors and industries, we have
              leveraged our expertise to establish a formidable presence in the Egyptian market. Our journey began in
              2017 with AL Qima constructions, paving the way for numerous other companies operating in diverse sectors
              and industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
