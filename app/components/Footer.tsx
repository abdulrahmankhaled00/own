import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-light tracking-wider mb-4">OWN.</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Excellence in real estate development since 1990. Creating sustainable environments where businesses and
              families thrive across Egypt and the GCC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/projects" className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/companies" className="block text-gray-400 hover:text-white transition-colors">
                Companies
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Companies */}
          <div>
            <h4 className="text-white font-medium mb-4">Our Companies</h4>
            <div className="space-y-2">
              <p className="text-gray-400">Al Qima Constructions</p>
              <p className="text-gray-400">OWN Developments</p>
            </div>
            <div className="mt-4">
              <h5 className="text-white font-medium mb-2">Since</h5>
              <p className="text-gray-400">1990</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} OWN Developments. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
