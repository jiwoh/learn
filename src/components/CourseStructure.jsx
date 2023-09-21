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

const tabs = [
  {
    name: 'PCI DSS Compliance',
    features: [
      {
        name: 'Payment Card Industry Data Security Standard (PCI DSS)',
        description:
          'PCI DSS compliance is a set of security regulations designed to protect credit card data. Professionals in this field ensure that organizations handling payment card information follow strict security measures to prevent data breaches and secure financial transactions.',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
        imageAlt:
          'PCI DSS compliance is a set of security regulations designed to protect credit card data. Professionals in this field ensure that organizations handling payment card information follow strict security measures to prevent data breaches and secure financial transactions.',
      },
    ],
  },
  {
    name: 'NIST Framework (New)',
    features: [
      {
        name: 'National Institute of Standards and Technology (NIST)',
        description:
          'The NIST Framework is a comprehensive cybersecurity framework used to manage and improve organizational cybersecurity. Those pursuing careers in this field work with NIST guidelines to develop robust cybersecurity strategies, protect sensitive data, and defend against cyber threats.',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
        imageAlt:
          'The NIST Framework is a comprehensive cybersecurity framework used to manage and improve organizational cybersecurity. Those pursuing careers in this field work with NIST guidelines to develop robust cybersecurity strategies, protect sensitive data, and defend against cyber threats.',
      },
    ],
  },
  {
    name: 'SOX Compliance (New)',
    features: [
      {
        name: 'Sarbanes-Oxley (SOX)',
        description:
          'SOX (Sarbanes-Oxley) compliance is a regulatory framework that ensures the accuracy and reliability of financial reporting within publicly traded companies. Professionals in this field help organizations adhere to strict financial control and reporting standards to maintain transparency and accountability in financial operations.',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
        imageAlt:
          'SOX (Sarbanes-Oxley) compliance is a regulatory framework that ensures the accuracy and reliability of financial reporting within publicly traded companies. Professionals in this field help organizations adhere to strict financial control and reporting standards to maintain transparency and accountability in financial operations.',
      },
    ],
  },
  {
    name: 'PCI DSS Foundation (New)',
    features: [
      {
        name: 'An Introduction to PCI DSS',
        description:
          'PCI DSS is applicable to every entity involved in processing, storing, or transmitting cardholder data such as merchants, acquires, issuers, processors, and service providers. Therefore any organisation/enterprise involved in the processing, storing, or transmitting of cardholder data are required to be PCI DSS compliant. Adherence to the PCI DSS standards is enforced and regulated by payment brands.',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
        imageAlt:
          'Walnut organizer system on black leather desk mat on top of white desk.',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function CourseStructure() {
  return (
    <section
      aria-labelledby="features-heading"
      className="py-32 mx-auto max-w-7xl sm:px-2 lg:px-8"
    >
      <div className="max-w-2xl px-4 mx-auto lg:max-w-none lg:px-0">
        <div className="max-w-3xl">
          <h2
            id="features-heading"
            className=""
          >
            Course Structure
          </h2>
          <p className="mt-4 text-slate-500">
            The Organize modular system offers endless options for arranging
            your favorite and most used items. Keep everything at reach and in
            its place, while dressing up your workspace.
          </p>
        </div>

        <Tab.Group as="div" className="mt-4">
          <div className="flex -mx-4 overflow-x-auto sm:mx-0">
            <div className="flex-auto px-4 border-b border-slate-200 sm:px-0">
              <Tab.List className="flex -mb-px space-x-10">
                {tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700',
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
              <Tab.Panel key={tab.name} className="pt-10 space-y-16 lg:pt-16">
                {tab.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
                  >
                    <div className="mt-6 lg:col-span-5 lg:mt-0">
                      <h3 className="text-lg font-medium text-slate-900">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="overflow-hidden rounded-lg aspect-h-1 aspect-w-2 bg-slate-100 sm:aspect-h-2 sm:aspect-w-5">
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
  )
}
