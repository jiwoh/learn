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

const features = [
  {
    icon: PlusSmallIcon,
    name: 'We train you',
    description:
      'With courses ranging from beginner to advanced levels, we will help to strengthen and build your cybersecurity skillsets at your own pace and schedule!',
  },
  {
    name: 'We mentor you',
    description:
      'We have cybersecurity experts to mentor you towards success. Land your dream career in tech. Build something extraordinary.',
  },
  {
    name: 'We give you the mindset',
    description:
      'We are going to give you a mindset that will make you act and think like a pro',
  },
  {
    name: 'We give you the experience',
    description:
      'We are giving you the top industry skills, certifications, job outlook, and possible future of the growing industry.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function OurServices() {
  return (
    <section aria-labelledby="ourservices" className="py-32 mx-auto max-w-7xl">
      <div className="bg-white shadow-xl rounded-2xl">
        <div aria-hidden="true" className="relative ">
          <Image
            src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
            alt=""
            width={1920}
            height={560}
            className="object-cover object-center w-full h-96 rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div className="relative px-4 pb-16 mx-auto -mt-12 max-w-7xl sm:px-6 sm:pb-24 lg:px-8 lg:-mt-24">
          <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
            <h2 className="">Our Services</h2>
            <p className="max-w-3xl mx-auto mt-4 text-slate-800">
              @LearnCyba we guide you with a complete mindset, shaping your
              mindset and providing the experience you need to thrive in this
              dynamic industry
            </p>
          </div>
          <div className="flex items-center justify-center py-4 mt-1 opacity-100 gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get Started Now
            </Link>

            <Link
              href="/"
              className="flex items-center justify-center px-8 py-3 text-xs text-center text-black transition-all border rounded-md whitespace-nowrap border-zinc-700 bg-zinc-900/20 backdrop-blur hover:bg-emerald-800 hover:text-white sm:text-sm"
            >
              Learn more{' '}
            </Link>
          </div>

          <dl className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="pt-4 border-t border-slate-200"
              >
                <dt className="font-medium text-slate-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-slate-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
