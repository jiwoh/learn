import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const ProductsFilter = ({
  categoriesToRender,
  filters,
  selectedFilters,
  handleFilterChange,
  setSelectedFilters,
}) => {
  return (
    <>
      <form className="sticky top-20 hidden h-screen lg:block">
        <h3 className="sr-only">Categories</h3>
        <ul
          role="list"
          className="space-y-4 border-b border-zinc-200 pb-6 text-sm font-medium text-zinc-900 dark:border-zinc-700 dark:text-zinc-50"
        >
          <li>
            <Link href={`/products`} className="block py-2">
              All
            </Link>
          </li>
          {categoriesToRender.map((category) => (
            <li key={category.label}>
              <Link
                href={`/products?category=${category.value}`}
                className="block py-2"
              >
                {category.value}
              </Link>
            </li>
          ))}
        </ul>

        {filters.map((section) => (
          <Disclosure
            as="div"
            key={section.id}
            className="border-b border-zinc-200 py-6 dark:border-zinc-700"
          >
            {({ open }) => (
              <>
                <h3 className="-my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-zinc-100 py-3 text-sm text-zinc-400 hover:text-zinc-500 dark:bg-neutral-900 dark:text-zinc-200 hover:dark:text-zinc-400">
                    <span className="font-medium text-zinc-900 dark:text-zinc-50">
                      {section.name}
                      {selectedFilters && (
                        <button
                          type="button"
                          className="ml-2 text-xs text-zinc-900 underline dark:text-zinc-200"
                          onClick={() => setSelectedFilters(null)}
                        >
                          Remove filter
                        </button>
                      )}
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="space-y-4">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          onClick={handleFilterChange}
                          defaultValue={option.value}
                          checked={selectedFilters == option.value}
                          type="radio"
                          className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500 dark:border-zinc-100"
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-zinc-600 dark:text-zinc-200"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </form>
    </>
  )
}

export default ProductsFilter
