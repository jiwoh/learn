import React from 'react'
import { Container } from './Container'
import Link from 'next/link'

export function HomeVideoHero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen -mt-24 text-center text-white">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="absolute object-cover min-w-full min-h-full"
          src="/videos/parallax/parallax_home_video.mp4"
          type="video/mp4"
          codecs="avc1.42E01E, mp4a.40.2"
          autoPlay
          muted
        ></video>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-neutral-950/40 opacity-60"></div>

      <div className="... z-10 mx-auto -mt-52 max-w-3xl space-y-4 px-2  py-32 text-center sm:py-48 md:space-x-6 md:px-0 lg:-mt-32 lg:space-y-8 lg:py-56">
        <h1 className="text-[min(14vw,4.5rem)] font-bold tracking-tight leading-none">
          <span className="text-transparent bg-gradient-to-r from-white/90 via-blue-600 to-emerald-100 bg-clip-text">
            Supercharge Your Life with Mushroom Vitality
          </span>
        </h1>
        <p className="max-w-xl py-6 mx-auto text-lg leading-normal text-zinc-200 text-balance md:text-center">
          Tap into the vitality and life-force of mushrooms and enrich every aspect of the human journey and experience.
        </p>
        <div className="flex items-center justify-center mt-16 gap-x-6">
          <Link
            href="/products"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Shop Now
          </Link>

          <Link
            href="/articles"
            className="flex items-center justify-center px-8 py-3 text-xs text-center text-white transition-all border rounded-md whitespace-nowrap border-zinc-700 bg-zinc-900/20 backdrop-blur hover:bg-emerald-800 sm:text-sm"
          >
            Learn more{' '}
          </Link>
        </div>
      </div>
    </section>
  )
}
