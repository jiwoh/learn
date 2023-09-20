/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import AOS from 'aos'

export function ProductsHero({
  title,
  description,
  primaryAction,
  secondaryAction,
  images,
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation Duration
      easing: 'ease-in-out', // Animation Transition
    })
  }, [])
  return (
    <div className="">
      <main>
        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-zinc-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-zinc-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-6xl pb-6 pt-6 ">
              <div className="mx-auto max-w-2xl gap-x-4 lg:mx-0 lg:flex lg:max-w-md lg:items-center">
                <div
                  data-aos="fade-up"
                  className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl "
                >
                  <h1
                    data-aos="fade-up"
                    className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl "
                  >
                    {title}
                  </h1>
                  <p className="relative mt-6 text-lg font-[300] leading-7 text-zinc-600 dark:text-zinc-200 sm:max-w-md lg:max-w-none">
                    {description}
                  </p>
                  <div
                    data-aos="fade-down"
                    className="mt-10 flex items-center gap-x-6"
                  >
                    <a
                      href={primaryAction.href}
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      {primaryAction.text}
                    </a>
                    <a
                      data-aos="fade-down"
                      href={secondaryAction.href}
                      className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-200"
                    >
                      {secondaryAction.text} <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div
                  data-aos="fade"
                  className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
                >
                  {images[0] && (
                    <div
                      data-aos="fade-down"
                      className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
                    >
                      <div className="relative">
                        <img
                          src={images[0].src}
                          alt={images[0].alt}
                          className="aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/10" />
                      </div>
                    </div>
                  )}
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    {images[1] && (
                      <div data-aos="fade-up" className="relative">
                        <img
                          src={images[1].src}
                          alt={images[1].alt}
                          className="aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/10" />
                      </div>
                    )}
                    {images[2] && (
                      <div data-aos="fade-down" className="relative">
                        <img
                          src={images[2].src}
                          alt={images[2].alt}
                          className="aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/10" />
                      </div>
                    )}
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    {images[3] && (
                      <div data-aos="fade-left" className="relative">
                        <img
                          src={images[3].src}
                          alt={images[3].alt}
                          className="aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/10" />
                      </div>
                    )}
                    {images[4] && (
                      <div data-aos="fade-right" className="relative">
                        <img
                          src={images[4].src}
                          alt={images[4].alt}
                          className="aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/10" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
