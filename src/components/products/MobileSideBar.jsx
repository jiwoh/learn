import React, { Fragment } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const ProductsMobileSideBar = ({
  mobileFiltersOpen,
  setMobileFiltersOpen,
  categoriesToRender,
  filters,
  selectedFilters,
  handleFilterChange,
  setSelectedFilters,
}) => {
  return (
    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={setMobileFiltersOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl dark:bg-neutral-900">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                  Filters
                </h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-zinc-400 dark:bg-zinc-700 dark:text-zinc-100"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-zinc-200 dark:border-zinc-700">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="px-2 py-3 font-medium text-zinc-900 dark:text-zinc-50"
                >
                  <li>
                    <Link href={`/products`} className="block px-2 py-3">
                      All
                    </Link>
                  </li>
                  {categoriesToRender.map((category) => (
                    <li key={category.label}>
                      <Link
                        href={`/products?category=${category.value}`}
                        className="block px-2 py-3"
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
                    className="border-t border-zinc-200 px-4 py-6 dark:border-zinc-700"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          {selectedFilters && (
                            <button
                              type="button"
                              className="ml-2 text-xs text-zinc-900 underline dark:text-zinc-200"
                              onClick={() => setSelectedFilters(null)}
                            >
                              Remove filter
                            </button>
                          )}
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-zinc-400 hover:text-zinc-500 dark:bg-neutral-900 dark:text-zinc-100 hover:dark:text-zinc-200">
                            <span className="font-medium text-zinc-900 dark:text-zinc-50">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  onClick={handleFilterChange}
                                  defaultValue={option.value}
                                  checked={selectedFilters == option.value}
                                  type="radio"
                                  className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500 dark:border-zinc-100"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 min-w-0 flex-1 text-zinc-500 dark:text-zinc-200"
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
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ProductsMobileSideBar
