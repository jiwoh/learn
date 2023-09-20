import React, { Fragment } from 'react'
import { classNames } from '@/utils'
import { Disclosure, Menu, Transition } from '@headlessui/react'

import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'

const sortOptions = [
  { name: 'Price: Low to High', value: 'asc' },
  { name: 'Price: High to Low', value: 'desc' },
]

const ProductToolBar = ({ setMobileFiltersOpen, setSortBy, sortBy }) => {
  return (
    <div className="flex items-baseline justify-end border-b border-zinc-200 pb-6 pt-24">
      <div className="flex items-center">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="group inline-flex items-center justify-center text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-50 hover:dark:text-zinc-200">
              Sort
              <ChevronDownIcon
                className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-zinc-400 group-hover:text-zinc-500 dark:text-zinc-200 hover:dark:text-zinc-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {sortOptions.map((option) => (
                  <Menu.Item key={option.name}>
                    {({ active }) => (
                      <p
                        onClick={() => setSortBy(option.value)}
                        className={classNames(
                          sortBy == option.value
                            ? 'font-medium text-zinc-900'
                            : 'text-zinc-500',
                          active ? 'bg-neutral-100' : '',
                          'block cursor-pointer px-4 py-2 text-sm'
                        )}
                      >
                        {option.name}
                      </p>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <button
          type="button"
          className="-m-2 ml-4 p-2 text-zinc-400 hover:text-zinc-500 sm:ml-6 lg:hidden"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <span className="sr-only">Filters</span>
          <FunnelIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default ProductToolBar
