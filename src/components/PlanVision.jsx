import { Container } from '@/components/Container'
import Image from 'next/image'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'

export function PlanVision() {
  return (
    <section aria-labelledby="features-heading" className="mx-auto max-w-7xl md:px-8">
      <div className="relative pt-16 pb-32 overflow-hidden ">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 ">
            <div className="max-w-xl px-6 mx-auto lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
              <div>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
                    <InboxIcon
                      className="w-8 h-8 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="... ... bg-gradient-to-br from-[#3B82F6] via-indigo-500 to-blue-700 bg-clip-text  text-[min(14vw,4.0rem)] font-bold leading-none tracking-tight text-blue-700 text-transparent">
                    Our Plan
                  </h2>
                  <p className="mt-4 text-lg text-slate-500 dark:text-slate-200">
                    Our plan is to give our students a proper training to become
                    the next generation cyber leaders.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-8 border-t border-slate-200">
                <blockquote>
                  <div>
                    <p className="text-base text-slate-500 dark:text-slate-200">
                      &ldquo;There is a plethora of information out there about
                      PCI-DSS which can get you confused. Look no further,
                      Learncyba provides a wealth of information that is concise
                      and easy to digest. If you are serious about making that
                      career change and landing a great job, this is
                      it...&rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://images.unsplash.com/photo-1556656246-55b8f3b895d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="text-base font-normal text-slate-700 dark:text-slate-200">
                        Richard O., Qualified Security Assessor
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-6 -mr-48 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1577760263010-ebfa5798337c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  width={1470}
                  height={600}
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="max-w-xl px-6 mx-auto lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
              <div>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
                    <SparklesIcon
                      className="w-8 h-8 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="... ... bg-gradient-to-br from-[#3B82F6] via-indigo-500 to-blue-700 bg-clip-text  text-[min(14vw,4.0rem)] font-bold leading-none tracking-tight text-blue-700 text-transparent">
                    Our Vision
                  </h2>
                  <p className="mt-4 text-lg text-slate-500 dark:text-slate-200">
                    Our Vision is striving to provide our students with the
                    highest quality information security education available
                    through our cybersecurity training program.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="pr-6 -ml-48 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1567641091594-71640a68f847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Customer profile user interface"
                  width={800}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
