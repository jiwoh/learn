import React from 'react'
import { Container } from './Container'
import Link from 'next/link'

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Reliable Quality',
    description: 'Consistent and reliable liquid cultures for optimal results.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Contaminant-Free',
    description: 'Guaranteed 100% contaminant-free liquid cultures.',
    icon: LockClosedIcon,
  },
  {
    name: 'Enhanced Growth',
    description: 'Promotes vigorous and accelerated mushroom growth.',
    icon: ArrowPathIcon,
  },
  {
    name: 'High-Yield Strains',
    description: 'Cultures derived from high-yield mushroom strains.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Proven Performance',
    description: 'Demonstrated success in producing abundant harvests.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Time-Efficient',
    description: 'Minimizes incubation time for faster mushroom cultivation.',
    icon: ServerIcon,
  },
]
export function HomeVideoLiquidCulture() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-32 rounded-lg bg-slate-100"></div>
        <div className="h-32 rounded-lg bg-slate-100 lg:col-span-2"></div>
      </div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl ">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-zinc-600 dark:text-zinc-200">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-emerald-600 sm:text-4xl lg:text-5xl">
              Mushroom Liquid Cultures
            </p>
            <p className="mt-6 text-lg leading-normal text-zinc-700 dark:text-zinc-200">
              John Iwoh provides contaminant-free live fungi mushroom culture
              syringes, carefully nurtured and tested for high quality. Our
              specially selected strains ensure abundant mushroom production in
              less time, maximizing your yield.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex justify-center md:mb-8">
              <video
                id="#myVideo"
                autoPlay={true}
                playsInline={true}
                muted
                loop={true}
                controls={false}
                poster="/images/parallax_video_fallback_image.webp"
                preload="auto"
                className="relative z-10 h-full w-full object-cover"
                src="/videos/parallax/parallax_video.mp4"
              >
                <source
                  srcSet="/videos/parallax/parallax_video.mp4"
                  type="video/mp4"
                  codecs="avc1.42E01E, mp4a.40.2"
                />
                {/* <source src="/videos/heroVideo.webm" type="video/mp4" /> */}
              </video>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-normal text-zinc-600 dark:text-zinc-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-zinc-700 dark:text-white">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-emerald-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Container>
  )
}
