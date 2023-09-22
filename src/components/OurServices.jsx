import { Container } from '@/components/Container'

import Link from 'next/link'
import clsx from 'clsx'

import Image from 'next/legacy/image'

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

import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
  PlusSmallIcon,
} from '@heroicons/react/24/outline'

const actions = [
  {
    title: 'We train you',
    href: 'https://calendly.com/d/4sq-mpj-ktz/cybersecurity-career-advice-strategy-session',
    icon: ClockIcon,
    description:
      'With courses ranging from beginner to advanced levels, we will help to strengthen and build your cybersecurity skillsets at your own pace and schedule!',
    iconForeground: 'text-zinc-700',
    iconBackground: 'bg-rose-100',
  },
  {
    title: 'We mentor you',
    href: 'https://calendly.com/d/4sq-mpj-ktz/cybersecurity-career-advice-strategy-session',
    icon: CheckBadgeIcon,
    description:
      'We have cybersecurity experts to mentor you towards success. Land your dream career in tech. Build something extraordinary.',
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'We give you the mindset',
    href: 'https://calendly.com/d/4sq-mpj-ktz/cybersecurity-career-advice-strategy-session',
    icon: UsersIcon,
    description:
      'We are going to give you a mindset that will make you act and think like a pro',
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'We give you the experience',
    href: 'https://calendly.com/d/4sq-mpj-ktz/cybersecurity-career-advice-strategy-session',
    icon: BanknotesIcon,
    description:
      'We are giving you the top industry skills, certifications, job outlook, and possible future of the growing industry.',
    iconForeground: 'text-neutral-900',
    iconBackground: 'bg-green-50',
  },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function OurServices() {
  return (
    <section aria-labelledby="ourservices" className="px-4 py-4 mx-auto max-w-7xl lg:px-8">
      <div className="max-w-2xl py-4 mx-auto lg:mx-0">
        <h2 className="">
          Our Services
        </h2>
        <p className="mt-2 text-lg leading-8 text-zinc-700 dark:text-zinc-200">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="overflow-hidden divide-y divide-gray-200 shadow rounded-2xl bg-slate-200 dark:bg-zinc-900 sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 md:gap-2">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 dark:bg-zinc-800 '
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white dark:ring-black'
                )}
              >
                <action.icon className="w-6 h-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold leading-6 uppercase text-zinc-900 dark:text-zinc-100">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-base text-zinc-700 dark:text-zinc-200">
                {action.description}
              </p>
            </div>
            <span
              className="absolute text-gray-300 pointer-events-none right-6 top-6 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
