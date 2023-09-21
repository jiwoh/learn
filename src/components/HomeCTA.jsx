import React from 'react'
import { Container } from './Container'
import Link from 'next/link' // Import the Link component from Next.js
import SliderSection from '@/components/SliderSection'

export function HomeCTA() {
  return (
    <Container>
      <div className="">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h3 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-zinc-50 dark:text-white sm:text-4xl">
              Start your mushroom journey.
            </h3>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-7 text-zinc-300">
              Browse lids and cultures. Learn techniques. Identify mushrooms.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* Use Next.js Link instead of anchor tag */}
              <Link href="/products">
                <span className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Shop Now
                </span>
              </Link>
              <Link href="/articles">
                <span className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] dark:[mask-image:radial-gradient(closest-side,black,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#1c3c5c" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </Container>
  )
}