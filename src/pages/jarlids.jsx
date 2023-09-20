import Head from 'next/head'
import Link from 'next/link'
import { supplies } from '../../supplies.jsx'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { useState } from 'react'
import { FaRecycle } from 'react-icons/fa'
import { GiSteelClaws } from 'react-icons/gi'
import { RiArrowRightSLine } from 'react-icons/ri'
import { IoIosFlask } from 'react-icons/io'
import { AiOutlineAim } from 'react-icons/ai'

export default function ProductsPage() {
  const [selectedOptions, setSelectedOptions] = useState({})

  const handleOptionChange = (optionName, optionValue, optionPrice) => {
    if (optionName === 'Quantity') {
      setSelectedOptions({
        ...selectedOptions,
        quantity: optionValue,
        price: optionPrice,
      })
    } else {
      setSelectedOptions({
        ...selectedOptions,
        [optionName]: optionValue,
      })
    }
  }

  const handleAddToCart = (item) => {
    window.Snipcart.api.cart.add(item).then(() => {
      setSelectedOptions({})
    })
  }

  return (
    <>
      <Head>
        <title>RealMush</title>
      </Head>
      <Container className="bg-zinc-100 dark:bg-neutral-900">
        <div className="">
          <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl ">
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
      </Container>
    </>
  )
}
