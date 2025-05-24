"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-100 to-zinc-100 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/images/skyline-view.jpg" alt="City skyline" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-neutral-900/80 to-zinc-900/90"></div>
      </div>

      <div
        className={`text-center transition-all duration-2000 z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider text-white mb-8">OWN.</h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">DEVELOPMENTS</p>
        <div className="mt-12">
          <div className="w-24 h-px bg-gray-400 mx-auto"></div>
        </div>
        <p className="text-lg text-gray-400 mt-8 max-w-2xl mx-auto px-6">
          Excellence in real estate development since 1990. Creating sustainable environments where businesses and
          families thrive.
        </p>
      </div>
    </section>
  )
}
