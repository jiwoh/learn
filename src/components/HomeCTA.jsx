import React from 'react'
import { Container } from './Container'
import Link from 'next/link' // Import the Link component from Next.js
import SliderSection from '@/components/SliderSection'

export function HomeCTA() {
  return (
    <Container>
      <div className="">
        <div className="py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 ">
          <div className="relative px-6 py-24 overflow-hidden text-center shadow-2xl isolate bg-gradient-to-b from-slate-100 to-slate-200 sm:rounded-3xl sm:px-16">
            <h2 className="max-w-2xl mx-auto text-4xl text-blue-800 md:text-5xl">
              Start your CyberSecurity journey today.
            </h2>
            <p className="max-w-xl mx-auto mt-6 text-lg leading-7 text-zinc-800">
              Capitalize on the rising demand, learn and start moving your
              career to a six-figure CyberSecurity Career.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              {/* Use Next.js Link instead of anchor tag */}
              <Link href="https://calendly.com/d/4sq-mpj-ktz/cybersecurity-career-advice-strategy-session">
                <span className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-zinc-100 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Start Now
                </span>
              </Link>
              <Link href="/#testimonials">
                <span className="text-sm font-normal leading-6 text-blue-600">
                  Learn More <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
