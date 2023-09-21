import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import Image from 'next/legacy/image'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'Why should I sign up?',
    answer:
      'You do not need any certification. You do not need a college degree. This is a non-technical cybersecurity career. More affordable than getting a college degree.',
  },
  {
    question: 'What are you getting in this program?',
    answer:
      'Focus on the areas to excel faster on the job. This means I will be teaching you what I currently do on my day-to-day jobs.You will be taught how to build a resume. You will go through interview preparations with me or my success coach before attempting an actual interview. You will be taught how to write interview scripts and use our interview scripts that have been written or you can write your own.',
  },
  {
    question: 'What is the salary range?',
    answer:
      'The salary for PCI DSS Consultants goes from 100k to 170k annually ',
  },
  {
    question: 'Are there remote opportunities?',
    answer:
      'You can work remotely, as there are multiple remote opportunities ',
  },
  {
    question: 'What is this career all about?',
    answer:
      'This is a non-technical cybersecurity career path. This is typically called a security audit. ',
  },
]

export function FAQ() {
  return (
    <div className="py-8 mx-2 mx-auto max-w-7xl">
        <div className="max-w-6xl mx-auto divide-y divide-zinc-900/10">
          <h2
            id="faqs"
            className=""
          >
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-zinc-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-zinc-800 dark:text-zinc-100">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="flex items-center ml-6 h-7 ">
                          {open ? (
                            <MinusSmallIcon
                              className="w-6 h-6 "
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="w-6 h-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
                      <p className="text-base font-[300] leading-7 text-zinc-800 dark:text-yellow-100">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
  )
}
