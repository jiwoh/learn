import React from 'react'
import { Container } from './Container'
import Link from 'next/link'
import SliderSection from '@/components/SliderSection'

export function HomeMantra() {
  return (
    <Container>
      <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-emerald-600 sm:text-4xl">
            Mushrooms add tremendous value to our lives and the world in many ways
          </h2>
          <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-200">
          Mushrooms provide nutritional and culinary value as food, therapeutic benefits as medicine, ecological services that enrich soils and ecosystems, sustainable materials for building, and creative inspiration across cultures.
          </p>
        </div>
        <div className="flex flex-col max-w-2xl gap-8 mx-auto mt-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div className="flex flex-col-reverse justify-between p-8 gap-x-16 gap-y-8 rounded-2xl bg-[#6b8d46] sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-zinc-50">Fungi have medicinal uses</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-zinc-200">Penicillin is derived from the Penicillium fungus</p>
              <p className="mt-2 text-base leading-relaxed text-yellow-400">
                Fungal compounds are used to treat infections, cancer, cholesterol, and recent research suggests certain fungi may even stimulate brain cell growth.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between p-8 bg-[#c9a47a] gap-x-16 gap-y-8 rounded-2xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">3.7 square miles (9.6 km<sup>2</sup>)</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
              The largest known organism on Earth is a fungus colony of honey mushroom (Armillaria ostoyae)
              </p>
              <p className="mt-2 text-base leading-relaxed text-zinc-900">
                This massive underground network is in in the Blue Mountains of eastern Oregon, U.S. It is estimated to be 2,400 to 8,650 years old! 
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between p-8 bg-[#ab7851] gap-x-16 gap-y-8 rounded-2xl sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-20">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">5.1 million fungal species on Earth</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">As of 2020, around 148,000 species of fungi have been documented by taxonomists</p>
              <p className="mt-2 text-base leading-7 text-emerald-50">
              Some of the most popular mushrooms are Shiitake, Portobello, Button, Cremini, Lion&#39;s Mane, Oyster, Chanterelle, Maitake, Porcini, and Truffles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  )
}
