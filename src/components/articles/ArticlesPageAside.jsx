import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid'
import { callAll, classNames } from '@/utils/index'
import { Button } from '../Button'

const ArticlesPageAside = ({
  filters,
  handleFilterChange,
  handleApplyFilter,
  selectedFilters,
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return (
    <>
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="font-body relative z-40 lg:hidden"
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
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-zinc-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-zinc-400 hover:text-zinc-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.name}
                      className="border-t border-zinc-200 pb-4 pt-4"
                      defaultOpen="true"
                    >
                      {({ open }) => (
                        <fieldset>
                          <legend className="w-full px-2">
                            <Disclosure.Button className="flex w-full items-center justify-between p-2 text-zinc-400 hover:text-zinc-500">
                              <span className="text-sm font-medium text-zinc-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex h-7 items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? '-rotate-180' : 'rotate-0',
                                    'h-5 w-5 transform'
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </legend>
                          <Disclosure.Panel className="px-4 pb-2 pt-4">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`${section.id}-${optionIdx}-mobile`}
                                    name={`${section.id}[]`}
                                    onChange={handleFilterChange}
                                    defaultValue={option.value}
                                    checked={selectedFilters.includes(
                                      option.value
                                    )}
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}-mobile`}
                                    className="ml-3 text-sm text-zinc-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </fieldset>
                      )}
                    </Disclosure>
                  ))}
                </form>
                <Button
                  onClick={callAll(
                    () => handleApplyFilter(),
                    () => setMobileFiltersOpen(false)
                  )}
                  className="mx-4"
                >
                  Apply Filter
                </Button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <aside>
        <h2 className="sr-only">Filters</h2>

        <button
          type="button"
          className="inline-flex items-center lg:hidden"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
            Filters
          </span>
          <PlusIcon
            className="ml-1 h-5 w-5 flex-shrink-0 text-zinc-400 dark:text-zinc-100"
            aria-hidden="true"
          />
        </button>

        <div className="hidden lg:block">
          <form className="space-y-10 divide-y divide-slate-200">
            {filters.map((section, sectionIdx) => (
              <div
                key={section.name}
                className={sectionIdx === 0 ? null : 'pt-10'}
              >
                <fieldset>
                  <legend className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {section.name}
                  </legend>
                  <div className="space-y-3 pt-6">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`${section.id}-${optionIdx}`}
                          onChange={handleFilterChange}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          checked={selectedFilters.includes(option.value)}
                          type="checkbox"
                          className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label
                          htmlFor={`${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-zinc-600 dark:text-zinc-100"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            ))}
          </form>
          <Button className="mt-4 w-full" onClick={handleApplyFilter}>
            Apply Filter
          </Button>
        </div>
      </aside>
    </>
  )
}
export default ArticlesPageAside
