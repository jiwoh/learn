import React, { Fragment, useState } from 'react'
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

const cards = [
  {
    name: 'Brandon',
    description:
      'Our Innovative customer-centric approach takesa unique approach to make your home renovation experience a breeze.',
    icon: PlayCircleIcon,
    thumbnail: '/images/testimonials/brandon.webp',
    video_url: 'https://www.youtube.com/embed/gXMQt3Gsr-0?si=sKxapgulmHhy73GU',
    video_duration: '3:06',
  },
  {
    name: 'Ufuoma',
    description:
      'Whether you have a small or large project, our remodeling and construction project management model can help you save thousands through transparency and control.',
    icon: PlayCircleIcon,
    thumbnail: '/images/testimonials/ufuoma.webp',
    video_url: 'https://www.youtube.com/embed/CGvcdw_l3Nw?si=EQ9WWU0trnHYzcTS',
    video_duration: '2:07',
  },
  {
    name: 'Rukky',
    description:
      'Our Innovative customer-centric approach takes a unique approach to make your home renovation experience a breeze.',
    icon: PlayCircleIcon,
    thumbnail: '/images/testimonials/rukky.webp',
    video_url: 'https://www.youtube.com/embed/dHKWIAZ1fvY?si=aL4bx6mvTkH3Lusw',
    video_duration: '1:51',
  },
  {
    name: 'Ted',
    description:
      'Our Innovative customer-centric approach takes a unique approach to make your home renovation experience a breeze.',
    icon: PlayCircleIcon,
    thumbnail: '/images/testimonials/ted.webp',
    video_url: 'https://www.youtube.com/embed/CArW994gU1Q?si=1g6iBHv1s5GE4MTU',
    video_duration: '1:26',
  },
]

export function VideoTestimonials() {
  const [activeCard, setActiveCard] = useState()
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal(card) {
    setIsOpen(true)
    setActiveCard(card)
  }
  return (
    <div className="relative isolate overflow-hidden bg-slate-100 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
        <Image
          src="https://images.unsplash.com/photo-1573164574397-dd250bc8a598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=1920&h=1080&q=80&blend=222827&sat=-20&exp=15&blend-mode=multiply"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="right center"
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
          <h2 className="">What our students are saying</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300"></p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex flex-col gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-white/10"
            >
              <div className="relative" onClick={() => openModal(card)}>
                <Image
                  src={card.thumbnail}
                  alt={card.name}
                  height="300"
                  width="600"
                  className="h-full w-full cursor-pointer rounded-xl transition-opacity duration-200 ease-in-out hover:opacity-80"
                />
                <span className="absolute bottom-2 right-2 rounded-md bg-gray-950 px-1 text-xs text-white">
                  {card.video_duration}
                </span>
              </div>
              <div className="flex gap-x-4">
                <card.icon
                  className="h-7 w-5 flex-none text-indigo-400"
                  aria-hidden="true"
                />
                <div className="text-xl leading-7">
                  <h3 className="font-semibold text-white">{card.name}</h3>
                </div>
              </div>
            </div>
          ))}

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {activeCard && activeCard.name}
                      </Dialog.Title>
                      {/* Close button */}
                      <div className="absolute right-6 top-6">
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-500"
                          onClick={closeModal}
                        >
                          <span className="sr-only">Close</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-4">
                        {activeCard && (
                          <iframe
                            width="560"
                            height="315"
                            src={activeCard.video_url}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                            className="aspect-video w-full"
                          ></iframe>
                        )}
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  )
}
