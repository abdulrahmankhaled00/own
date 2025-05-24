import Link from "next/link"

export default function CompanyOverview() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Excellence Since 1990</h2>
            <div className="w-16 h-px bg-gray-400 mb-8"></div>

            <div className="space-y-6 text-lg leading-relaxed text-gray-300 mb-8">
              <p>
                From the beginning we had a vision to establish ourselves as a trailblazer in the real estate sector,
                known for its innovative approaches and commitment to excellence.
              </p>
              <p>
                OWN stands as a beacon of progress, pushing the boundaries of traditional real estate to create not just
                buildings, but sustainable environments where businesses and families can thrive.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Learn More About Us
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/modern-apartments.jpg"
              alt="Modern apartments"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/images/construction-site.jpg"
              alt="Construction excellence"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/images/luxury-interior.jpg"
              alt="Luxury interior design"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/images/residential-towers.jpg"
              alt="Residential towers"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
