import React, { useEffect } from 'react'
import { Container } from './Container'
import Link from 'next/link'
import AOS from 'aos'

export function HomeVideoHero() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation Duration
      easing: 'ease-in-out', // Animation Transition
    })

    // Ensure the video plays automatically
    const videoElement = document.querySelector('video')
    if (videoElement) {
      videoElement.play().catch((error) => {
        // Autoplay was prevented
        console.log('Autoplay prevented:', error)
      })
    }
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-center h-screen -mt-24 text-center text-white">
      <div
        data-aos="fade-up"
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
      >
        <video
          className="absolute object-cover min-w-full min-h-full"
          src="/videos/laptopuser.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
          playsInline
        >
          {/* Fallback content in case the video doesn't play */}
          <img src="/learncyba_ring.webp" alt="Fallback content" />
        </video>
      </div>
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-neutral-950/75"></div>

      <div className="z-10 max-w-4xl px-2 py-2 mx-auto space-y-4 text-center -mt-42 sm:py-8 md:space-x-6 md:px-0 lg:-mt-32 lg:space-y-8 lg:py-6">
        <h1
          data-aos="fade-up"
          className="mt-4 text-balance text-4xl font-bold leading-none tracking-tight sm:text-[min(14vw,4.2rem)]"
        >
          <span className="text-transparent bg-gradient-to-br from-blue-100 via-slate-200 to-amber-100 bg-clip-text">
            Level up your tech career to 6-figures and beyond with
            CyberSecurity.
          </span>
        </h1>
        <p
          data-aos="fade-down"
          className="max-w-4xl py-6 mx-auto text-lg leading-normal text-center text-zinc-200 sm:px-6 md:px-12 md:text-xl"
        >
          Start your new career as a Cybersecurity Compliance Specialist and
          earn 6-figures in about 6 months. There are no certifications,
          degrees, or coding required.
        </p>
        <div
          data-aos="fade-up"
          className="z-10 flex items-center justify-center mt-1 opacity-100 gap-x-6"
        >
          <Link
            href="https://calendly.com/d/4sq-mpj-ktz/cybersecurity-career-advice-strategy-session"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Get Started Now
          </Link>

          <Link
            href="#course-structure"
            className="flex items-center justify-center px-8 py-3 text-xs text-center text-white transition-all border rounded-md whitespace-nowrap border-zinc-700 bg-zinc-900/20 backdrop-blur hover:bg-emerald-800 sm:text-sm"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
}
