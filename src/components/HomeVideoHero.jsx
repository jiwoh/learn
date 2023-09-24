import React, { useEffect } from 'react'
import { Container } from './Container'
import Link from 'next/link'
import AOS from 'aos'
export function HomeVideoHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation Duration
      easing: 'ease-in-out', // Animation Transition
    })
  }, [])
  return (
    <section className="relative flex flex-col items-center justify-center h-screen -mt-24 text-center text-white">
      <div data-aos="fade-up" className="absolute top-0 left-0 w-full h-full overflow-hidden ">
        <video
          className="absolute object-cover min-w-full min-h-full "
          src="/videos/laptopuser.mp4"
          type="video/mp4"
          codecs="avc1.42E01E, mp4a.40.2"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-neutral-950/75"></div>

      <div className="... z-10 mx-auto -mt-42 max-w-4xl space-y-4  px-2 py-2 text-center sm:py-8 md:space-x-6 md:px-0 lg:-mt-32 lg:space-y-8 lg:py-6 ">
        <h1 data-aos="fade-up" className="mt-4 text-4xl sm:text-[min(14vw,4.2rem)] font-bold leading-none tracking-tight">
          <span className="... bg-gradient-to-br from-blue-100 via-slate-200 to-amber-100 bg-clip-text text-transparent ">
            Level up your tech career to 6-figures and beyond with
            CyberSecurity.
          </span>
        </h1>
        <p data-aos="fade-down" className="max-w-4xl py-6 mx-auto text-lg leading-normal text-center md:text-xl sm:px-6 text-zinc-200 md:px-12">
          Start your new career as a Cybersecurity Compliance Specialist and
          earn 6-figures in about 6 months. There are no certifications, degrees, or coding
          required.
        </p>
        <div data-aos="fade-up" className="z-10 flex items-center justify-center mt-1 opacity-100 gap-x-6">
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
            Learn more{' '}
          </Link>
        </div>
      </div>
    </section>
  )
}
