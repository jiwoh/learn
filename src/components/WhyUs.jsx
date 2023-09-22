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

const cards = [
  {
    name: 'Foundation Skills',
    description:
      'Trainings are done from beginner to advanced levels and this will equip you with the required knowledge and skills to become an expert in the PCI-DSS specialty.',
    icon: PhoneIcon,
  },
  {
    name: 'Career Focused',
    description:
      'Our trainings are career-focused hence, the sessions are comprehensive and hands-on in order to get you up to speed with the techniques and tools required for the job.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Real-World Application',
    description:
      'Upon completion of the course, learners are be able to apply the learnings to solving real-world PCI-DSS problems.',
    icon: NewspaperIcon,
  },
]

export function WhyUs() {
  return (
    <section aria-labelledby="whyus" className="mx-auto max-w-7xl py-4">
      <div className="relative isolate overflow-hidden rounded-2xl py-24">
        <div className="h-full w-full p-2 ">
          <Image
            src="https://images.unsplash.com/photo-1604933762021-54a5858c9832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80&blend=677777&sat=-10&exp=10&blend-mode=multiply"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            className="absolute inset-0 -z-10 rounded-2xl bg-black/10 md:object-center"
          />
        </div>
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="... ... bg-gradient-to-br from-amber-100 via-slate-100 to-blue-100 bg-clip-text text-[min(14vw,3.5rem)] font-bold leading-none tracking-tight text-blue-700 text-transparent">
              Why Learners Choose Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-100">
              We offer comprehensive, career-focused programs that equip you
              with foundational skills and the ability to apply your knowledge
              to real-world situations.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {cards.map((card) => (
              <div
                key={card.name}
                className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/50 backdrop-blur-md"
              >
                <card.icon
                  className="h-7 w-5 flex-none text-amber-100"
                  aria-hidden="true"
                />
                <div className="text-base leading-7">
                  <h3 className="text-xl font-semibold text-amber-300 text-white">
                    {card.name}
                  </h3>
                  <p className="mt-2 text-zinc-300">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
