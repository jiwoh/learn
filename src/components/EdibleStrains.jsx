import React, { useEffect } from 'react'
import AOS from 'aos'
import edibleStrainsData from './../../data/edibleStrainsData.json'

export function EdibleStrainsData() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation Duration
      easing: 'ease-in-out', // Animation Transition
    })
  }, [])
  return (
    <div>
      <div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          {edibleStrainsData.glossary.map((strain) => (
            <div
              key={strain.ScientificName}
              className="border-t border-zinc-100 px-4 py-6 sm:col-span-1 sm:px-0"
            >
              <dt className="text-sm font-medium leading-6 text-zinc-900">
                Scientific Name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-zinc-700 sm:mt-2">
                {strain.ScientificName}
              </dd>

              <dt className="text-sm font-medium leading-6 text-zinc-900">
                Common Name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-zinc-700 sm:mt-2">
                {strain.CommonName}
              </dd>

              <dt className="text-sm font-medium leading-6 text-zinc-900">
                Introduction
              </dt>
              <dd className="mt-1 text-sm leading-6 text-zinc-700 sm:mt-2">
                {strain.Introduction}
              </dd>

              {/* Add more data fields as needed */}
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
