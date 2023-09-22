import React from 'react'
import Image from 'next/image'
import { Container } from './Container'

// Define image data using a constant array
const imageArray = [
  {
    src: 'https://tailwindui.com/img/logos/tuple-logo-gray-900.svg',
    alt: 'Tuple',
    width: 105,
    height: 48,
  },
  {
    src: 'https://tailwindui.com/img/logos/reform-logo-gray-900.svg',
    alt: 'Reform',
    width: 104,
    height: 48,
  },
  {
    src: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
    alt: 'SavvyCal',
    width: 140,
    height: 48,
  },
  {
    src: 'https://tailwindui.com/img/logos/laravel-logo-gray-900.svg',
    alt: 'Laravel',
    width: 136,
    height: 48,
  },
  {
    src: 'https://tailwindui.com/img/logos/transistor-logo-gray-900.svg',
    alt: 'Transistor',
    width: 158,
    height: 48,
  },
  {
    src: 'https://tailwindui.com/img/logos/statamic-logo-gray-900.svg',
    alt: 'Statamic',
    width: 147,
    height: 48,
  },
]

export function Employers() {
  return (
    <section>
      <div className="bg-zinc-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="">Hiring Companies</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                egestas tempus tellus etiam sed. Quam a scelerisque amet
                ullamcorper eu enim et fermentum, augue.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </a>
                <a href="#" className="text-sm font-semibold text-zinc-900">
                  Contact us <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              {imageArray.map((image, index) => (
                <Image
                  key={index}
                  className="max-h-12 w-full object-contain object-left "
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
