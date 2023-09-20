import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'What is liquid culture?',
    answer:
      'Liquid culture is a mycological method of propagating mycelium in liquid nutrient-rich solution rather than on a solid substrate like agar. Liquid culture allows for faster mycelium growth and can be used to inoculate bulk substrates.',
  },
  {
    question: 'What is the difference between liquid culture and spores?',
    answer:
      'Spores are typically used to start mushroom cultivation, while liquid culture is used as a more efficient and faster way to propagate the mycelium. Spores are also less predictable and are more susceptible to contamination than liquid cultures.',
  },
  {
    question: 'How do I make liquid culture?',
    answer:
      'To make liquid culture, you will need a sterile syringe, a liquid nutrient solution, a pressure cooker, and a spore print or tissue sample. First, sterilize your tools and equipment. Then, inject the spores or tissue sample into the nutrient solution and incubate at room temperature until mycelium growth is visible.',
  },
  {
    question: 'What are the benefits of using liquid culture?',
    answer:
      'Liquid culture allows for faster mycelium growth, easier inoculation of bulk substrates, and can be used to store and propagate specific strains of mycelium.',
  },
  {
    question: 'What are the risks of using liquid culture?',
    answer:
      'The main risks of using liquid culture are contamination and the potential for genetic drift in the mycelium over time.',
  },
  {
    question: 'How do I store liquid culture?',
    answer:
      'Liquid culture can be stored in a refrigerator for short-term storage or in a freezer for long-term storage.',
  },
  {
    question: 'How do I use liquid culture?',
    answer:
      'Liquid culture can be used to inoculate sterilized grain or bulk substrate jars using a sterile syringe.',
  },
  {
    question: 'How do I troubleshoot liquid culture problems?',
    answer:
      'If you suspect contamination, discard the entire batch of liquid culture and start over with fresh materials. If the mycelium growth is slow or stalled, check the temperature and humidity levels and make sure there is enough oxygen in the container.',
  },
  {
    question: 'Where can I buy liquid culture supplies?',
    answer:
      'You can buy liquid culture supplies on our ecommerce site, as well as other mycology related products.',
  },
  {
    question: 'What are some tips for growing mushrooms with liquid culture?',
    answer:
      'Sterilize all tools and equipment before and after use, maintain proper environmental conditions, and follow proper inoculation and fruiting procedures.',
  },
  {
    question: 'What are the ingredients for liquid culture?',
    answer:
      'The ingredients for liquid culture can vary, but typically consist of a nutrient-rich solution containing water, malt extract, yeast extract, peptone, and dextrose.',
  },
  {
    question: 'How often do you stir liquid culture?',
    answer:
      'It is not necessary to stir liquid culture, but you can gently swirl the container every day or so to ensure even mycelium growth.',
  },
]

export default function BlockFaqLiquidCulture() {
  return (
    <div className="bg-emerald-200">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-zinc-900/10">
          <h3 className="text-2xl font-bold leading-10 tracking-tight text-zinc-800 dark:text-zinc-100 ">
            Frequently Asked questions
          </h3>
          <dl className="mt-10 space-y-6 divide-y divide-zinc-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left ">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-zinc-800 dark:text-zinc-100">
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
    </div>
  )
}
