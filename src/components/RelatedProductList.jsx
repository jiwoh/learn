import Image from 'next/legacy/image'
import { AiOutlineAim } from 'react-icons/ai'
import { FaRecycle } from 'react-icons/fa'
import { GiSteelClaws } from 'react-icons/gi'
import { IoIosFlask } from 'react-icons/io'
import { RiArrowRightSLine } from 'react-icons/ri'
import { supplies } from '../../supplies.jsx'

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
    question: 'What are the benefits of using liquid culture?',
    answer:
      'Liquid culture allows for faster mycelium growth, easier inoculation of bulk substrates, and can be used to store and propagate specific strains of mycelium.',
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

export function RelatedProductList() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl ">
        <h2 className="py-2 text-4xl">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:gap-x-6 sm:gap-y-10 md:grid-cols-2 lg:gap-x-10">
          {supplies
            .filter(
              (supplies) =>
                supplies.category ===
                'Mushroom Cultivation Supplies > Mycology Jar Lids'
            )
            .map((supplies) => (
              <div
                key={supplies.id}
                className="relative flex flex-col overflow-hidden rounded-xl border-zinc-200 bg-white shadow-lg dark:border-zinc-900 dark:bg-zinc-900/30 dark:shadow-none"
              >
                <div className="aspect-h-4 aspect-w-3 bg-neutral-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                  <Image
                    src={supplies.image}
                    alt={supplies.image}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="px-4 py-4">
                  <h3 className="pb-0 text-3xl font-[600] text-zinc-800 dark:text-zinc-50 md:text-3xl lg:text-4xl">
                    {supplies.name}
                  </h3>
                  <span className="text-base font-[500] text-zinc-700 dark:text-zinc-200">
                    {supplies.subtitle}
                  </span>
                  <p className="py-4 text-base text-zinc-600 dark:text-zinc-100">
                    {supplies.metadata.description}
                  </p>
                  <div className="mb-4 space-y-2">
                    {supplies.options.map((option) => (
                      <div key={option.name}>
                        <h4 className="mb-2 text-sm font-medium text-zinc-900 dark:text-white">
                          {option.name}
                        </h4>
                        <div className="flex flex-wrap">
                          {option.values.map((value, index) => {
                            let icon = null
                            switch (value) {
                              case 'PP5 Plastic':
                                icon = (
                                  <FaRecycle className="mr-1 inline-block text-zinc-600" />
                                )
                                break
                              case 'Stainless Steel':
                                icon = (
                                  <GiSteelClaws className="mr-1 inline-block text-zinc-600" />
                                )
                                break
                              case 'Wide Mouth':
                                icon = (
                                  <RiArrowRightSLine className="mr-1 inline-block text-zinc-600" />
                                )
                                break
                              case 'Regular Mouth':
                                icon = (
                                  <RiArrowRightSLine className="mr-1 inline-block rotate-180 transform text-zinc-600" />
                                )
                                break
                              case '6 Lids':
                                icon = (
                                  <IoIosFlask className="mr-1 inline-block text-zinc-600" />
                                )
                                break
                              default:
                                icon = (
                                  <AiOutlineAim className="mr-1 inline-block text-zinc-600" />
                                )
                            }
                            return (
                              <button
                                key={value}
                                className={`mb-2 mr-2 flex items-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ${
                                  selectedOptions[option.name] === value
                                    ? 'bg-neutral-900 text-white'
                                    : 'bg-neutral-100 text-zinc-900 hover:bg-neutral-200'
                                }`}
                                onClick={() =>
                                  handleOptionChange(
                                    option.name,
                                    value,
                                    option.prices[index]
                                  )
                                }
                              >
                                {icon}
                                {value}
                              </button>
                            )
                          })}
                          {option.name === 'Pack Size' && (
                            <select
                              className="mb-2 mr-2 whitespace-nowrap rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-neutral-200"
                              value={selectedOptions.quantity || 'Quantity'}
                              onChange={(e) =>
                                handleOptionChange(
                                  'Quantity',
                                  parseInt(e.target.value),
                                  supplies.price * parseInt(e.target.value)
                                )
                              }
                            >
                              {[...Array(10)].map((_, i) => (
                                <option key={i} value={i + 1}>
                                  {i + 1}
                                </option>
                              ))}
                            </select>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="... inline-flex items-center rounded-md border border-transparent bg-red-600  px-6 py-2 text-sm font-medium text-white shadow-sm transition duration-100 ease-in hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2   "
                    onClick={() =>
                      handleAddToCart({
                        id: supplies.id,
                        name: supplies.name,
                        price: selectedOptions.price || supplies.price,
                        url: supplies.url,
                        image: supplies.image,
                        description: supplies.description,
                        metadata: {
                          ...supplies.metadata,
                          ...selectedOptions,
                        },
                        quantity: selectedOptions.quantity || 1,
                      })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
