/* eslint-disable @next/next/no-img-element */
import products from '../../data/products.json'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

const featuredTestimonial = {
  body: 'Trust John. Trust Learncyba and watch the change and transformation that will come into your life. His dedication, passion and continuous support got me here...Guys do not wait any longer run to John of Learncyba.',
  author: {
    name: 'Ted',
    handle: 'Cyber Security Compliance',
    imageUrl:
      'https://images.unsplash.com/photo-1614890094520-7b8dd0ec56d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-slate-900.svg',
  },
}
const testimonials = [
  [
    [
      {
        body: 'This course is amazing. John teaches you everything you need to know and gives amazing ongoing support even after the course is finished. I recommend to anyone.',
        author: {
          name: 'Brad',
          handle: 'INFOSEC Compliance Specialist',
          imageUrl:
            'https://images.unsplash.com/photo-1579983926774-399a9cb765c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'If you are looking for a career path in cyber security, LEARNCYBA is the training school you need. The staff is professional, and they will make sure you succeed.',
        author: {
          name: 'Almoctar',
          handle: 'PCI-DSS Compliance Analyst',
          imageUrl:
            'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: 'Excellent and very thorough in their trainings. I highly recommend Learncyba.',
        author: {
          name: 'Monighs',
          handle: 'Security Compliance Manager',
          imageUrl:
            'https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Amazing customer service. I’m so grateful I found John and his staff',
        author: {
          name: 'Jones',
          handle: 'IT Security-Compliance Controls Assessor',
          imageUrl:
            'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function Testimonial() {
  return (
    <div className="">
      <section
        aria-labelledby="testimonials"
        className="py-8 mx-auto max-w-7xl sm:px-2"
      >
        <div className="relative pt-24 pb-32 isolate sm:pt-32">
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
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-xl mx-auto text-center">
              <h2 data-aos="fade-up" id="testimonials" className="">Testimonials</h2>
              <span data-aos="fade-down" className="mt-2 text-3xl font-semibold tracking-tight text-zinc-700 dark:text-zinc-100 sm:text-4xl">
                We educate and transform careers.
              </span>
            </div>
            <div className="grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 mx-auto mt-16 text-sm leading-6 text-zinc-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
              <figure data-aos="fade-up" className="bg-white shadow-lg rounded-2xl ring-1 ring-slate-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-zinc-900 sm:p-12 sm:text-xl sm:leading-8">
                  <p>{`“${featuredTestimonial.body}”`}</p>
                </blockquote>
                <figcaption data-aos="fade-down" className="flex flex-wrap items-center px-6 py-4 border-t gap-x-4 gap-y-4 border-slate-900/10 sm:flex-nowrap">
                  <img
                    className="flex-none w-10 h-10 rounded-full bg-slate-50"
                    src={featuredTestimonial.author.imageUrl}
                    alt=""
                  />
                  <div  className="flex-auto">
                    <div className="font-semibold">
                      {featuredTestimonial.author.name}
                    </div>
                    <div className="text-xs text-zinc-600">{`@${featuredTestimonial.author.handle}`}</div>
                  </div>
                  <img
                    className="flex-none w-auto h-10"
                    src={featuredTestimonial.author.logoUrl}
                    alt=""
                  />
                </figcaption>
              </figure>
              {testimonials.map((columnGroup, columnGroupIdx) => (
                <div
                  key={columnGroupIdx}
                  className="space-y-8 xl:contents xl:space-y-0"
                >
                  {columnGroup.map((column, columnIdx) => (
                    <div
                      key={columnIdx}
                      className={classNames(
                        (columnGroupIdx === 0 && columnIdx === 0) ||
                          (columnGroupIdx === testimonials.length - 1 &&
                            columnIdx === columnGroup.length - 1)
                          ? 'xl:row-span-2'
                          : 'xl:row-start-1',
                        'space-y-8'
                      )}
                    >
                      {column.map((testimonial) => (
                        <figure
                          data-aos="fade-down"
                          key={testimonial.author.handle}
                          className="p-6 bg-white shadow-lg rounded-2xl ring-1 ring-slate-900/5"
                        >
                          <blockquote className="text-zinc-900">
                            <p>{`“${testimonial.body}”`}</p>
                          </blockquote>
                          <figcaption className="flex items-center mt-6 gap-x-4">
                            <img
                              className="w-10 h-10 rounded-full bg-slate-50"
                              src={testimonial.author.imageUrl}
                              alt=""
                            />
                            <div>
                              <div className="font-semibold">
                                {testimonial.author.name}
                              </div>
                              <div className="text-xs font-[300] leading-tight tracking-tight text-zinc-600">{`${testimonial.author.handle}`}</div>
                            </div>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
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
