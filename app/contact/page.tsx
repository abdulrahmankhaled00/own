import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-black via-neutral-100 to-zinc-100 relative">
        <div className="absolute inset-0 z-0">
          <img src="/images/luxury-compound.jpg" alt="Contact us" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-zinc-900/90"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider text-white mb-8">Contact Us</h1>
          <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Get in touch with our team to discuss your next project
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-neutral-900 p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-light text-white mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded-lg focus:outline-none focus:border-neutral-400 text-white placeholder-gray-400"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded-lg focus:outline-none focus:border-neutral-400 text-white placeholder-gray-400"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded-lg focus:outline-none focus:border-neutral-400 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded-lg focus:outline-none focus:border-neutral-400 text-white placeholder-gray-400"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded-lg focus:outline-none focus:border-neutral-400 text-white placeholder-gray-400"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-neutral-900 p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-light text-white mb-8">Get in touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-white mb-4">Office Locations</h3>
                  <div className="space-y-4">
                    <div className="bg-neutral-800 p-4 rounded-lg">
                      <h4 className="font-medium text-white">Egypt Headquarters</h4>
                      <p className="text-gray-300">Cairo, Egypt</p>
                      <p className="text-gray-400 text-sm mt-1">Main operations center</p>
                    </div>
                    <div className="bg-neutral-800 p-4 rounded-lg">
                      <h4 className="font-medium text-white">KSA Office</h4>
                      <p className="text-gray-300">Kingdom of Saudi Arabia</p>
                      <p className="text-gray-400 text-sm mt-1">Regional operations</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">Our Companies</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <p className="text-gray-300">Al Qima Constructions</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <p className="text-gray-300">OWN Developments</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sunday - Thursday:</span>
                      <span className="text-gray-400">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Friday - Saturday:</span>
                      <span className="text-gray-400">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-800 p-4 rounded-lg">
                  <h3 className="text-xl font-medium text-white mb-2">Excellence Since</h3>
                  <p className="text-3xl font-light text-white">1990</p>
                  <p className="text-gray-400 text-sm">30+ years of industry leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
