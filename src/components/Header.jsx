import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
  UserCircleIcon,
  HomeIcon,
  ArrowTrendingUpIcon,
  AcademicCapIcon,
  BuildingStorefrontIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { classNames } from '@/utils'

const navigation = {
  categories: [
    {
      name: 'Grow',
      icon: BeakerIcon,
      featured: [
        {
          name: 'Lids',
          subtitle: 'Liquid Culture and Grain Spawn Lids',
          href: '/products/category/lids',
          imageSrc: '/images/mainmenu/lids.webp',
          imageAlt: 'Mycology lids',
        },
        {
          name: 'Cultures',
          subtitle: 'Shop Liquid Culture and Culture Plates',
          href: '/products/category/cultures',
          imageSrc: '/images/mainmenu/lc.webp',
          imageAlt: 'Mushroom Fungi Liquid Cultures and Plates',
        },
        {
          name: 'Supplies',
          subtitle: 'Shop Supplies for vigorous mycology',
          href: '/products/category/supplies',
          imageSrc: '/images/mainmenu/supplies.webp',
          imageAlt: 'Supplies for vigorous mycology',
        },
        {
          name: 'Merch',
          subtitle: 'Rep your squad with merchandise',
          href: '/products/category/merch',
          imageSrc: '/images/mainmenu/merch.webp',
          imageAlt: 'John Iwoh Merchandise.',
        },
      ],
    },
    {
      name: 'Thrive',
      icon: ArrowTrendingUpIcon,
      featured: [
        {
          name: 'Capsules',
          subtitle:
            'Buy Vegan capsules with natural mushroom and plant extracts',
          href: '/products/category/capsules',
          imageSrc: '/images/mainmenu/capsule.webp',
          imageAlt: 'Capsules',
        },
        {
          name: 'Chocolate',
          subtitle:
            'Order Artisinal chocolate bars made with mushroom and plant extracts',
          href: '/products/category/chocolate',
          imageSrc: '/images/mainmenu/chocolate.webp',
          imageAlt: 'Medicinal and Gourmet Chocolate',
        },
        {
          name: 'Tincture',
          subtitle: 'Shop double extracted mushroom and plant extracts',
          href: '/products/category/tincture',
          imageSrc: '/images/mainmenu/tincture.webp',
          imageAlt: 'Double extracted tinctures',
        },
        {
          name: 'Nutraceuticals',
          subtitle:
            'Shop functional mushroom supplements formulated and backed by science',
          href: '/products/category/nutraceuticals',
          imageSrc: '/images/mainmenu/supplements.webp',
          imageAlt:
            'A nutraceutical or bioceutical is a pharmaceutical alternative which claims physiological benefits.',
        },
      ],
    },
    {
      name: 'Learn',
      icon: AcademicCapIcon,
      featured: [
        {
          name: 'Articles',
          subtitle:
            'Dive into our captivating blog for a wealth of knowledge on mushrooms and fungi.',
          href: '/articles',
          imageSrc: '/images/mainmenu/articles.webp',
          imageAlt: 'Pink Oyster Mushrooms',
        },
        {
          name: 'Recipes',
          subtitle:
            'Indulge in delectable mushroom-inspired recipes that will tantalize your taste buds.',
          href: '/articles',
          imageSrc: '/images/mainmenu/recipes.webp',
          imageAlt: 'Delicious mushroom-inspired recipes on a plate.',
        },
        {
          name: 'Health+Wellness',
          subtitle: 'Discover a world of holistic health and wellness.',
          href: '/articles',
          imageSrc: '/images/mainmenu/health-wellness.webp',
          imageAlt: 'A person practicing yoga in a serene natural setting.',
        },
        {
          name: 'Database',
          subtitle: 'Explore the known world of edible fungi mushrooms.',
          href: '/database',
          imageSrc: '/images/mainmenu/mycology.webp',
          imageAlt:
            'A variety of edible mushrooms displayed on a wooden surface.',
        },
      ],
    },
  ],
  pages: [{ name: 'Shop', href: '/products', icon: ShoppingBagIcon }],
}

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="fixed inset-x-0 z-10 bg-white dark:bg-zinc-900">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpen}
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
              <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px]" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-ease-out duration-300 transform"
                enterFrom="translate-y-full"
                enterTo="-translate-y-0"
                leave="transition ease-in-ease-out duration-300 transform"
                leaveFrom="-translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl dark:bg-zinc-900">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-zinc-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-zinc-200 dark:border-zinc-500">
                      <Tab.List className="-mb-px flex space-x-8 px-4">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? 'border-emerald-600 text-emerald-600'
                                  : 'border-transparent text-emerald-600',
                                'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                      {navigation.categories.map((category) => (
                        <Tab.Panel
                          key={category.name}
                          className="space-y-12 px-4 py-6"
                        >
                          <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                            {category.featured.map((item) => (
                              <div
                                key={item.name}
                                className="group relative"
                                onClick={() => setOpen(false)}
                              >
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-zinc-100 group-hover:opacity-75">
                                  <Image
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    width="500"
                                    height="500"
                                    className="object-cover object-center"
                                  />
                                </div>
                                <Link
                                  href={item.href}
                                  className="mt-6 block text-sm font-medium text-zinc-900 dark:text-zinc-200"
                                >
                                  <span
                                    className="absolute inset-0 z-10"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                                <p
                                  aria-hidden="true"
                                  className="mt-1 text-xs text-zinc-500"
                                >
                                  {item.subtitle}
                                </p>
                              </div>
                            ))}
                          </div>
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>

                  <div className="space-y-6 border-t border-zinc-200 px-4 py-6 dark:border-zinc-500">
                    {navigation.pages.map((page) => (
                      <div
                        key={page.name}
                        className="flow-root"
                        onClick={() => setOpen(false)}
                      >
                        <Link
                          href={page.href}
                          className="-m-2 block p-2 font-medium text-zinc-900 dark:text-zinc-200"
                        >
                          {page.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative hidden md:block">
          <nav aria-label="Top">
            {/* Secondary navigation */}
            <div className="bg-white dark:bg-zinc-900">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="border-b border-zinc-200 dark:border-zinc-900">
                  <div className="flex h-14 items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden md:flex md:flex-1 md:items-center">
                      <Link href="/">
                        <div className="flex items-center">
                          <div>
                            <Image
                              src="/images/logos/logo.webp"
                              alt="mobile logo John Iwoh"
                              width="35"
                              height="35"
                              className="inline-block h-9 w-9"
                            />
                          </div>
                          <div className="ml-2">
                            <span className="... ...  bg-gradient-to-r from-zinc-950 via-emerald-600 to-zinc-400 bg-clip-text text-xl font-[200] text-transparent dark:bg-gradient-to-r dark:from-zinc-100 dark:via-emerald-400 dark:to-emerald-700 dark:bg-clip-text dark:text-transparent">
                              Real<strong>Mush</strong>.com
                            </span>
                          </div>
                        </div>
                        <span className="sr-only">John Iwoh</span>
                      </Link>
                    </div>

                    <div className="hidden h-full md:flex">
                      {/* Flyout menus Desktop  */}
                      <Popover.Group className="inset-x-0 bottom-0 px-4">
                        <div className="flex h-full justify-center space-x-12">
                          {navigation.pages.map((page) => (
                            <Link
                              key={page.name}
                              href={page.href}
                              className="ease-in-ease-out flex items-center text-base font-medium text-zinc-700 transition-colors duration-200 hover:scale-110 hover:text-emerald-600 dark:text-zinc-50 hover:dark:text-emerald-400"
                            >
                              {page.icon && (
                                <page.icon className="mr-2 h-5 w-5 text-emerald-600 hover:scale-125 dark:text-emerald-600" />
                              )}
                              {page.name}
                            </Link>
                          ))}
                          {navigation.categories.map((category) => (
                            <Popover key={category.name} className="flex">
                              {({ open, close }) => (
                                <>
                                  <div className="relative flex">
                                    <Popover.Button
                                      className={classNames(
                                        open
                                          ? 'border-emerald-600 text-emerald-600'
                                          : 'border-transparent text-zinc-700 hover:text-emerald-600 dark:text-zinc-50 hover:dark:text-emerald-400',
                                        'ease-in-ease-out relative z-10 -mb-px flex items-center border-b-2 pt-px text-base font-medium transition-colors duration-200 hover:scale-110'
                                      )}
                                    >
                                      {category.icon && (
                                        <category.icon className="mr-2 h-5 w-5 text-emerald-600 hover:scale-125 dark:text-emerald-600" />
                                      )}
                                      {category.name}
                                    </Popover.Button>
                                  </div>

                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Popover.Panel className="absolute inset-x-0 top-full z-50 text-sm text-zinc-500">
                                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                      <div
                                        onClick={close}
                                        className="fixed inset-0 top-1/2 backdrop-blur"
                                      />
                                      <div
                                        className="absolute inset-0 top-1/2 bg-white shadow dark:bg-zinc-900"
                                        aria-hidden="true"
                                      />
                                      {/* <Transition.Child
                                        as={Fragment}
                                        enter="transition ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                      > */}
                                      {/* </Transition.Child> */}

                                      <div className="relative bg-white dark:bg-zinc-900">
                                        <div className="mx-auto max-w-7xl px-8">
                                          <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                            {category.featured.map((item) => (
                                              <div
                                                key={item.name}
                                                className="group relative"
                                                onClick={close}
                                              >
                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-zinc-100 group-hover:opacity-75">
                                                  <Image
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    width="500"
                                                    height="500"
                                                    className="object-cover object-center"
                                                  />
                                                </div>
                                                <Link
                                                  href={item.href}
                                                  className="mt-4 block font-medium text-zinc-900 dark:text-zinc-200"
                                                >
                                                  <span
                                                    className="absolute inset-0 z-10"
                                                    aria-hidden="true"
                                                  />
                                                  {item.name}
                                                </Link>
                                                <p
                                                  aria-hidden="true"
                                                  className="mt-1 dark:text-zinc-400"
                                                >
                                                  {item.subtitle}
                                                </p>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                </>
                              )}
                            </Popover>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex flex-1 items-center md:hidden">
                      <button
                        type="button"
                        className="-ml-2 rounded-md bg-white p-2 text-zinc-400 dark:border-emerald-600 dark:bg-neutral-900"
                        onClick={() => setOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
                      </button>
                    </div>

                    {/* Logo (lg-) */}
                    <Link href="/" className="md:hidden">
                      <span className="sr-only">John Iwoh</span>
                      <Image
                        src="/images/_avatar.webp"
                        alt="mobile logo Real Mush"
                        width="40"
                        height="40"
                        className="h-full w-full rounded-full"
                      />
                    </Link>

                    <div className="flex flex-1 items-center justify-end">
                      <div className="flex items-center gap-4 lg:ml-8">
                        {/* Cart */}
                        <div className="ml-4 flow-root lg:ml-8">
                          <div className="snipcart-checkout group:ease-in-ease-out group -m-2 flex cursor-pointer items-center p-2">
                            <ShoppingBagIcon
                              className="h-6 w-6 flex-shrink-0 text-zinc-900 group-hover:scale-110 group-hover:text-emerald-600 dark:text-emerald-600"
                              aria-hidden="true"
                            />

                            <span className="snipcart-items-count ml-2 text-sm font-medium text-zinc-700 group-hover:text-zinc-800 dark:text-zinc-50 group-hover:dark:text-zinc-50"></span>
                            <span className="sr-only">
                              items in cart, view bag
                            </span>
                          </div>
                        </div>
                        {/* My account */}
                        <div className="snipcart-customer-signin cursor-pointer ">
                          <UserCircleIcon
                            className="ease-in-ease-out h-6 w-6 flex-shrink-0 text-zinc-900 hover:scale-110 group-hover:text-emerald-600 dark:text-emerald-600"
                            aria-hidden="true"
                          />
                        </div>
                        <ModeToggle />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      {/* Mobile navbar with icons */}
      <div className="shadow-top fixed bottom-0 left-1/2 z-50 w-[100%] -translate-x-1/2  bg-white bg-opacity-70 p-2 px-4 ring-1 ring-neutral-200/60 backdrop-blur-lg backdrop-filter dark:bg-[#1d1c20] dark:bg-opacity-70 dark:ring-neutral-600/40 md:hidden">
        <div className="flex w-full items-center justify-between gap-4">
          <div>
            <ModeToggle />
          </div>

          {/* My account */}
          <div className="menu-item">
            <UserCircleIcon className="menu-item-icon" aria-hidden="true" />
            <div className="menu-item-text">Account</div>
          </div>

          {/* Home */}
          <Link href="/" className="menu-item">
            <HomeIcon className="menu-item-icon" aria-hidden="true" />
            <div className="menu-item-text">Home</div>
          </Link>

          {/* Shop */}
          <Link href="/products" className="menu-item">
            <BuildingStorefrontIcon
              className="menu-item-icon"
              aria-hidden="true"
            />
            <div className="menu-item-text">Shop</div>
          </Link>

          {/* Learn
          <Link href="/articles" className="menu-item">
            <AcademicCapIcon className="menu-item-icon" aria-hidden="true" />
            <div className="menu-item-text">Learn</div>
          </Link> */}

          {/* Cart */}
          <div className="menu-item">
            <div className="cart-item">
              <ShoppingBagIcon className="menu-item-icon" aria-hidden="true" />
              <span className="sr-only">Items in cart, view bag</span>
            </div>
            <div className="menu-item-text ">Cart</div>
          </div>

          {/* Burger menu */}
          <div className="menu-item">
            <button
              type="button"
              className="menu-item-button 0 group relative ml-[-0.5rem]  rounded-md  p-2 transition-all duration-300  ease-in-out hover:scale-105 hover:transform hover:opacity-90"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-neutral-50 ring-0 ring-1 ring-zinc-200/80 ring-opacity-30 transition-all duration-200 hover:ring-8 group-focus:ring-4 dark:bg-neutral-950 dark:ring-emerald-400/60">
                <div className="flex h-[14px] w-[16px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 group-focus:-translate-x-1.5 group-focus:rotate-180">
                  <div className="h-[2px] w-8 origin-left transform bg-emerald-600 transition-all delay-150 duration-300 group-focus:w-2/3 group-focus:rotate-[42deg] dark:bg-white"></div>
                  <div className="h-[2px] w-8 transform rounded bg-emerald-600 transition-all duration-300 group-focus:translate-x-10 dark:bg-white"></div>
                  <div className="h-[2px] w-8 origin-left transform bg-emerald-600 transition-all delay-150 duration-300 group-focus:w-2/3 group-focus:-rotate-[42deg] dark:bg-white"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full bg-white/90 px-2 py-1 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-neutral-900 dark:ring-white/40 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-emerald-50 [@media(prefers-color-scheme:dark)]:stroke-emerald-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-emerald-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-emerald-600" />
      <MoonIcon className="hidden h-6 w-6 fill-neutral-900 stroke-zinc-50/70 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-emerald-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-emerald-500" />
    </button>
  )
}
