import React from 'react'
import { Container } from './Container'
import Link from 'next/link'
import SliderSection from '@/components/SliderSection'

export function HomeVideoJarLids() {
  return (
    <Container>
      <section className="">
        <div className="container mx-auto flex flex-col px-0 py-24">
          <div className="mx-auto lg:w-full">
            <div className="h-[40%] overflow-hidden rounded-lg">
              <video
                id="#myVideo"
                autoPlay={true}
                playsInline={true}
                muted
                loop={true}
                controls={false}
                poster="/images/parallax_video_fallback_image.webp"
                preload="auto"
                className="relative h-full w-full rounded-xl object-cover"
                src="/videos/parallax/parallax_home_video_1.mp4"
                aria-label="Parallax Video"
                loading="lazy"
              >
                <source
                  srcSet="/videos/parallax/parallax_home_video_1.mp4"
                  type="video/mp4"
                  codecs="avc1.42E01E, mp4a.40.2"
                />
                {/* <source src="/videos/heroVideo.webm" type="video/mp4" /> */}
              </video>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center">
              <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
                <div className="flex flex-col items-center justify-center text-center">
                  <h2
                    className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-emerald-600 md:text-5xl lg:text-left"
                    aria-label="Fungi Liquid Cultures Heading"
                  >
                    Innoculation Lids
                  </h2>
                </div>
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:w-2/3 sm:py-8 sm:pl-8 sm:text-left">
                <p className="mb-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-200 md:mt-4 md:text-lg">
                  Keep the contamination out. RealMush provides high-quality
                  mushroom mycology lids for grain and liquid cultures. Our lids
                  are carefully designed to ensure optimal growth conditions for
                  mushroom cultivation, allowing you to achieve outstanding
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Center the SliderSection */}
      <div className="-mt-24 flex justify-center py-0">
        <SliderSection />
      </div>
    </Container>
  )
}
