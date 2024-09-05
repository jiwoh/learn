import React from 'react'
import { Container } from './Container'
import {
  PhoneIcon,
  LifebuoyIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'
import Link from 'next/link' // Import the Link component from Next.js
import Image from 'next/image'
export function ContactUs() {
  return (
    <section>
      {/* Contact Us section */}
      <div className="relative px-6 overflow-hidden isolate pt-14 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-50&exp=45&blend-mode=multiply"
          alt=""
          layout="fill"
          className="absolute inset-0 object-cover w-full h-full -z-10"
        />
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
        >
          <path
            fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="10724532-9d81-43d2-bb94-866e98dd6e42"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
        >
          <path
            fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
        <div className="py-24 mx-auto max-w-7xl sm:py-40">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight text-yellow-300 sm:text-6xl">
              Let&apos;s get started
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300"></p>
          </div>
          <div id="contact-us" className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            <div className="flex p-6 backdrop-blur-xl gap-x-4 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
              <PhoneIcon
                className="flex-none w-5 text-zinc-50 h-7"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-yellow-300">
                  Get the conversation started
                </h3>
                <p className="mt-2 text-gray-300">
                    <a
                    className="text-white hover:text-blue-300"
                    href="tel:+12819914244"
                  >
                    +1 (281) 991-4244
                  </a>
                  <br />
                  <a
                    className="text-white hover:text-blue-300"
                    href="mailto:connect@learncyba.com"
                  >
                    connect@learncyba.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex p-6 backdrop-blur-xl gap-x-4 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
              <LifebuoyIcon
                className="flex-none w-5 text-zinc-50 h-7"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-yellow-300">Hours</h3>
                <p className="mt-2 text-gray-300">
                  8am - 5pm (CT)
                  <br />
                  <a
                    className="text-white hover:text-gray-300"
                    href="mailto:support@example.com"
                  >
                    Monday - Friday
                  </a>
                </p>
              </div>
            </div>
            <div className="flex p-6 backdrop-blur-xl gap-x-4 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
              <BuildingOffice2Icon
                className="flex-none w-5 text-zinc-50 h-7"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-yellow-300">Address</h3>
                <p className="mt-2 text-gray-300">
                  17350 State Highway 249, STE 220 #14755,
                  <br />
                  Houston, TX 77064
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
