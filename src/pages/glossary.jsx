import { Fragment, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Container } from '@/components/Container'
import { Dialog, Transition, Disclosure } from '@headlessui/react'
import { callAll } from '@/utils/index'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

export default function Glossary({ glossary }) {
  const glossaryData = glossary ? JSON.parse(glossary) : null
  const [selectedItem, setSelectedItem] = useState(null)

  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Edible Mushroom Strains - RealMush</title>
        <meta
          name="description"
          content="Embark on a captivating journey through the edible mushroom kingdom, encountering the magnificent Lion's Mane, delicate Enoki, and striking Chicken of the Woods mushrooms, each offering unique appearances, flavors, and textures that elevate culinary creations and celebrate the marvels of nature's bounty.
          "
        />
      </Head>
      <Container className="relative md:mt-6">
        {/* Modal */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            {/* ... (Modal transition, background, etc.) ... */}
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm"
              aria-hidden="true"
            />
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Panel className="... w-full max-w-lg transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl  transition-all dark:bg-gradient-to-b dark:from-zinc-700 dark:via-neutral-900 dark:to-neutral-950">
                    {selectedItem && (
                      <>
                        {/* New accordion layout for the modal content */}
                        <div className="relative min-h-[200px] break-inside-avoid-column">
                          <Image
                            src={selectedItem.Images}
                            alt={selectedItem.Appearance}
                            width="0"
                            height="0"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
                            className="h-full w-full"
                            priority
                          />
                          <button
                            className="absolute right-2 top-2 rounded-md bg-zinc-100/70 p-2 text-zinc-100 transition-all delay-100 hover:bg-zinc-100 hover:text-zinc-900"
                            onClick={closeModal}
                          >
                            <XMarkIcon className="h-6 w-6 text-zinc-900" />
                          </button>
                          <div className="... absolute bottom-0 flex flex-col rounded-t-xl bg-zinc-900/40 p-2  px-2 py-4 backdrop-blur-sm dark:bg-neutral-950/70">
                            <h3 className="px-4 text-2xl font-bold leading-7 text-zinc-50 dark:text-zinc-50">
                              {selectedItem.ScientificName}
                            </h3>
                            <p className="hidden max-w-2xl px-4 text-sm leading-tight text-zinc-50 dark:text-zinc-100 sm:block md:mt-2 ">
                              {selectedItem.Body}
                            </p>
                            <p className="mt-2 max-w-2xl px-4 pb-2 text-xs leading-tight text-zinc-50 dark:text-zinc-100 sm:hidden">
                              {selectedItem.CommonName}
                            </p>
                          </div>
                        </div>

                        <div className="px-1 last:pb-4">
                          {Object.keys(selectedItem)
                            .filter(
                              (key) =>
                                key !== 'ScientificName' &&
                                key !== 'Letter' &&
                                key !== 'Images' &&
                                key !== 'Appearance' &&
                                key !== 'CommonName' &&
                                key !== 'Body' &&
                                key !== 'Introduction'
                            )
                            .map((key) => (
                              <Disclosure key={key}>
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button className="dark:hover:text-emerald-green-600 flex w-full items-center justify-between px-6 py-3 text-left text-base font-medium text-zinc-600 odd:dark:text-emerald-400 even:dark:bg-neutral-950/90 even:dark:text-emerald-400/90">
                                      {key}
                                      <span className="ml-6 flex h-7">
                                        {open ? (
                                          <MinusSmallIcon className="h-6 w-6" />
                                        ) : (
                                          <PlusSmallIcon className="h-6 w-6" />
                                        )}
                                      </span>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-6 text-sm font-normal text-zinc-600 dark:text-zinc-100">
                                      {selectedItem[key]}
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            ))}
                        </div>
                      </>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        {/* table of content */}

        <div className="relative border-b border-zinc-200 pb-5">
          <h1 className="text-3xl font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
            Edible and Medicinal Fungi Database
          </h1>
          <p className="mt-2 max-w-4xl text-sm text-zinc-700 dark:text-zinc-200">
            Explore the Mushroom Library, featuring mushroom and fungi
            descriptions, identifications, and real mushroom photos.
          </p>
        </div>
        <div className="fixed left-0 right-0 top-0 z-10 flex overflow-x-auto bg-white/40 pb-0 dark:bg-neutral-950/20 sm:static">
          {glossaryData.tableOfContents.links.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="w-full p-2 text-lg text-emerald-600 hover:underline hover:dark:text-blue-600"
            >
              {item.letter}
            </a>
          ))}
        </div>
        {/* Content */}
        <div className="mt-2 flex flex-col gap-16">
          {glossaryData.tableOfContents.links.map((item, index) => (
            <div
              key={index}
              className="flex scroll-mt-20 flex-col gap-4 md:flex-row"
              id={item.letter}
            >
              {/* Letter */}
              <div className="flex items-center justify-center md:w-4/12 md:items-start lg:w-2/12 ">
                <h1 className="flex h-24 w-24 items-center justify-center rounded-full text-6xl font-bold dark:text-zinc-100 ">
                  {item.letter}
                </h1>
              </div>

              {/* Glossary */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-8 leading-tight md:w-8/12 md:justify-start md:gap-6 lg:w-10/12 lg:gap-10">
                {glossaryData.glossary
                  .filter((g) => g.Letter === item.letter)
                  .map((r, index) => (
                    <div
                      key={index}
                      onClick={callAll(
                        () => setSelectedItem(r),
                        () => openModal()
                      )}
                      className="group relative cursor-pointer rounded-xl odd:bg-zinc-50 even:bg-emerald-100/30 dark:even:bg-emerald-100 "
                    >
                      <div className="... dark:highlight-white/5 group:cursor-pointer relative mx-auto flex max-w-md items-center  rounded-xl px-2 px-3.5 py-0.5 ring-1 ring-black/5 transition duration-200 group-hover:scale-105 group-hover:ease-in-out">
                        <Image
                          className="... absolute -left-1 hidden h-12 w-12 rounded-full object-cover ring-2 ring-zinc-400/60 ring-offset-2 drop-shadow  group-hover:ring-2 group-hover:ring-emerald-600/50 dark:ring-zinc-900/60  md:-left-2 md:block lg:h-16 lg:w-16"
                          src={r.Images}
                          width={64}
                          height={64}
                          alt="{r.Appearance}"
                          lazy={true}
                        />
                        <div className="flex flex-col md:pl-14">
                          <strong className="text-sm font-normal tracking-tight text-zinc-900 ">
                            {r.ScientificName}
                          </strong>
                          <span className="-mt-1 text-xs font-[300] tracking-tight text-zinc-700 ">
                            {r.CommonName}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

import fs from 'fs'
import path from 'path'
import { XMarkIcon } from '@heroicons/react/20/solid'

export async function getStaticProps() {
  const dataDirectory = path.join(process.cwd(), 'data')
  const glossary = fs.readFileSync(
    dataDirectory + '/edibleStrainsData.json',
    'utf8'
  )
  return {
    props: {
      glossary,
    },
  }
}
