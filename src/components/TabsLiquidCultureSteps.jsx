/* eslint-disable @next/next/no-img-element */
import products from '../../data/products.json'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: '1. Preparation',
    features: [
      {
        name: 'Sterilize Work Area and Supplies',
        description:
          'Before beginning, sterilize your work area and supplies, including the syringe itself. The best way to sterilize these items is through the use of an autoclave or pressure cooker.\n\nIf that’s not available, you can use a torch lighter to flame-sterilize your syringe needle and a disinfecting agent to sterilize your work area such as 70% alcohol.',
        imageSrc: 'https://example.com/image-1.jpg',
        imageAlt: 'A person sterilizing a work area with a disinfecting agent.',
      },
      {
        name: 'Shake Liquid Culture Syringe',
        description:
          'Gently shake the liquid culture syringe to evenly distribute the spores (or mycelium) before injecting.\n\nIt’s essential to make sure the location where the spores have congregated is within the liquid to avoid “dry spots”. ',
        imageSrc: 'https://example.com/image-2.jpg',
        imageAlt: 'A person shaking a liquid culture syringe.',
      },
    ],
  },
  {
    name: '2. Inoculation',
    features: [
      {
        name: 'Protective Clothing and Equipment',
        description:
          'Before beginning the inoculation process, make sure you are wearing protective clothing such as a mask, gloves and goggles. These will help prevent contamination.\n\nUse a laminar flow hood or glove box for indoor cultivation. This will minimize airborne contaminants.',
        imageSrc: 'https://example.com/image-3.jpg',
        imageAlt:
          'A person wearing protective clothing and working in a glove box.',
      },
      {
        name: 'Injecting Liquid Culture',
        description:
          'Clean the injection port of your substrate or growing medium with alcohol. Insert the needle of the syringe through the injection port while keeping everything sterile.\n\nInject about 0.5 to 1 cc of the liquid culture per quart (1L) of substrate.  Although some growing medium may require slightly more or less depending on several factors such as the species being grown and environmental conditions.',
        imageSrc: 'https://example.com/image-4.jpg',
        imageAlt: 'A person injecting liquid culture into a substrate.',
      },
    ],
  },
  {
    name: '3. Storage',
    features: [
      {
        name: 'Store and Monitor incubation process',
        description:
          'Carefully label the jar with the date of inoculation, strain name/code, and any other distinguishing features or necessary information.\n\nStore the inoculated substrate in a dark, humid and warm environment until the spores have fully colonized the substrate and are ready to move on to the next phase of growth. Make sure to monitor the incubation process to catch any potential contamination.',
        imageSrc: 'https://example.com/image-5.jpg',
        imageAlt:
          'A labeled jar containing inoculated substrate stored on a shelf.',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function TabsLiquidCultureSteps() {
  return (
    <div className="">
      <section
        aria-labelledby="liquid-culture-steps"
        className="mx-auto max-w-7xl py-32 sm:px-2"
      >
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2
              id="liquid-culture-steps"
              className="text-3xl font-bold leading-10 tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl"
            >
              Liquid Culture Steps
            </h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-200">
              The Organize modular system offers endless options for arranging
              your favorite and most used items. Keep everything at reach and in
              its place, while dressing up your workspace.
            </p>
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-zinc-200 px-4 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-emerald-500 dark:text-yellow-100'
                            : 'border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-blue-400',
                          'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
                    >
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        <h3 className="text-lg font-medium text-zinc-900 dark:text-yellow-100">
                          {feature.name}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-200">
                          {feature.description}
                        </p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-zinc-100 sm:aspect-h-2 sm:aspect-w-5">
                          <img
                            src={feature.imageSrc}
                            alt={feature.imageAlt}
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const { productId } = params
  const product = products.find(({ id }) => id === productId)
  return {
    props: {
      product,
    },
  }
}
export async function getStaticPaths() {
  return {
    paths: products.map(({ id }) => {
      return {
        params: {
          productId: id,
        },
      }
    }),
    fallback: false,
  }
}
