import Link from 'next/link'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company', href: '#' },
]

const features = [
  {
    name: 'How It Works',
    description:
      'LearnCyba consultancy services combine a comprehensive set of methodologies and expertise across various technical areas, including the ability to implement positive cyber security change. ',
    imageSrc:
      'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'LearnCyba consultancy services combine a comprehensive set of methodologies and expertise across various technical areas, including the ability to implement positive cyber security change.',
  },
  {
    name: 'Are you ready to change your career trajectory?',
    description:
      'Many cyber security consultancy engagements focus on the implementation of industry control frameworks, international standards and specific programme requirements. Instead, LearnCyba develops tailored approaches to help meet each of our client’s and our students unique requirements.',
    imageSrc:
      'https://images.unsplash.com/photo-1521790945508-bf2a36314e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'Many cyber security consultancy engagements focus on the implementation of industry control frameworks, international standards and specific programme requirements. Instead, LearnCyba develops tailored approaches to help meet each of our client’s and our students unique requirements.',
  },
]

const stats = [
  { label: 'Six-Figure Salaries Achieved', value: '200+' },
  { label: 'Years Exclusively Helping I.T. Professionals', value: '4+' },
  { label: 'Degrees or Certifications Needed', value: 'Zero' },
]
const values = [
  {
    name: 'We train you',
    description:
      'With courses ranging from beginner to advanced levels, we will help to strengthen and build your cybersecurity skillsets at your own pace and schedule!',
  },
  {
    name: 'We give you the experience',
    description:
      'We are giving you the top industry skills, certifications, job outlook, and possible future of the growing industry.',
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
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function AboutUs() {
  return (
    <section aria-labelledby="whyus" className="py-16 mx-auto max-w-7xl">
      <div className="relative isolate ">
        <div
          className="absolute inset-x-0 overflow-hidden -translate-y-1/2 top-1/2 -z-10 transform-gpu opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 flex pt-32 overflow-hidden opacity-25 -z-10 transform-gpu blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <main className="isolate">

          
          
          {/* Content section */}
          <div className="px-6 mx-auto mt-12 max-w-7xl sm:mt-0 lg:px-8 xl:mt-8">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
              <h2 className="">Our Vision</h2>
              <div className="flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-100">
                    We strive to provide our students with the highest quality
                    information security education available through our
                    cybersecurity training program.
                  </p>
                  <div className="mt-8">
                    <h3 className="... ... bg-gradient-to-br from-[#3B82F6] via-indigo-500 to-blue-700 bg-clip-text  text-[min(14vw,3.0rem)] font-bold leading-none tracking-tight text-blue-700 text-transparent">
                      Our Plan
                    </h3>
                    <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-200">
                      Our plan is to give our students a proper training to
                      become the next generation cyber leaders.
                    </p>
                  </div>
                  <div className="pt-6 mt-8 border-t border-slate-400 dark:border-slate-200">
                    <blockquote>
                      <div>
                        <p className="text-sm italic text-zinc-500 dark:text-zinc-200">
                          &ldquo;There is a plethora of information out there
                          about PCI-DSS which can get you confused. Look no
                          further, Learncyba provides a wealth of information
                          that is concise and easy to digest. If you are serious
                          about making that career change and landing a great
                          job, this is it...&rdquo;
                        </p>
                      </div>
                      <footer className="mt-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <Image
                              className="w-6 h-6 rounded-full"
                              src="https://images.unsplash.com/photo-1556656246-55b8f3b895d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                              alt=""
                              width={1470}
                              height={600}
                            />
                          </div>
                          <div className="text-xs font-normal text-zinc-700 dark:text-zinc-200">
                            Richard O., Qualified Security Assessor
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="lg:flex lg:flex-auto lg:justify-center">
                  <dl className="w-64 space-y-8 xl:w-80">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col-reverse gap-y-4"
                      >
                        <dt className="text-base leading-7 text-zinc-600 dark:text-zinc-200">
                          {stat.label}
                        </dt>
                        <dd className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>

          

          {/* Image section */}
          <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
              alt=""
              className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            />
          </div>

          {/* Values section 
          <div className="px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Our Values
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>
            <dl className="grid max-w-2xl grid-cols-1 mx-auto mt-16 text-base leading-7 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.name}>
                  <dt className="font-semibold text-zinc-900">{value.name}</dt>
                  <dd className="mt-1 text-zinc-600">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div> */}

          <div className="relative mt-32 isolate -z-10 sm:mt-48">
            <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
              <svg
                className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                    width={200}
                    height={200}
                    x="50%"
                    y="50%"
                    patternUnits="userSpaceOnUse"
                    patternTransform="translate(-100 0)"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                  <path
                    d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
                />
              </svg>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
