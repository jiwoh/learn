import { Container } from '@/components/Container'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import Image from 'next/legacy/image'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'How It Works',
    description:
      'LearnCyba consultancy services combine a comprehensive set of methodologies and expertise across various technical areas, including the ability to implement positive cyber security change. ',
    imageSrc:
      'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    imageAlt:
      'LearnCyba consultancy services combine a comprehensive set of methodologies and expertise across various technical areas, including the ability to implement positive cyber security change.',
  },
  {
    name: 'Are you ready to change your career trajectory?',
    description:
      'Many cyber security consultancy engagements focus on the implementation of industry control frameworks, international standards and specific programme requirements. Instead, LearnCyba develops tailored approaches to help meet each of our client’s and our students unique requirements.',
    imageSrc:
      'https://images.unsplash.com/photo-1521790945508-bf2a36314e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80',
    imageAlt:
      'Many cyber security consultancy engagements focus on the implementation of industry control frameworks, international standards and specific programme requirements. Instead, LearnCyba develops tailored approaches to help meet each of our client’s and our students unique requirements.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function AboutUs() {
  return (
    <section aria-labelledby="whyus" className="py-4 mx-auto max-w-7xl">
      <div className="">
        <div className="max-w-2xl px-4 py-24 mx-auto sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-7xl ">
            <h2 className="">About Us</h2>
            <p className="max-w-4xl mt-4 text-slate-700">
              We are a risk-management cybersecurity consulting firm focused on
              helping organizations prevent data loss, system lock-ups before a
              cyber breach and provide training on cybersecurity that can give
              you cutting edge program to get you your career as a six-figure
              Cybersecurity Specialist or Payment Security Specialist.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0
                      ? 'lg:col-start-1'
                      : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                  )}
                >
                  <h3 className="text-lg font-medium text-slate-900 md:text-xl lg:text-2xl">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0
                      ? 'lg:col-start-6 xl:col-start-5'
                      : 'lg:col-start-1',
                    'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                  )}
                >
                  <div className="overflow-hidden rounded-lg shadow-xl aspect-h-2 aspect-w-5">
                    <img
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
