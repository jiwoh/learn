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
  VideoCameraIcon,
  CalendarDaysIcon,
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
  pages: [
    { name: 'Home', href: '/', icon: ShoppingBagIcon },
    { name: 'Course', href: '/#course-structure', icon: AcademicCapIcon },
    { name: 'Contact', href: '/#contact-us', icon: UserCircleIcon },
    {
      name: 'Schedule',
      href: 'https://calendly.com/d/4sq-mpj-ktz/cybersecurity-career-advice-strategy-session',
      icon: VideoCameraIcon,
    },
    { name: 'Reviews', href: '/#video-testimonials', icon: ShoppingBagIcon },
  ],
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
                <Dialog.Panel className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl dark:bg-zinc-900">
                  <div className="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 -m-2 rounded-md text-zinc-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links 
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-zinc-200 dark:border-zinc-500">
                      <Tab.List className="flex px-4 -mb-px space-x-8">
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
                          className="px-4 py-6 space-y-12"
                        >
                          <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                            {category.featured.map((item) => (
                              <div
                                key={item.name}
                                className="relative group"
                                onClick={() => setOpen(false)}
                              >
                                <div className="overflow-hidden rounded-md aspect-h-1 aspect-w-1 bg-zinc-100 group-hover:opacity-75">
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
                                  className="block mt-6 text-sm font-medium text-zinc-900 dark:text-zinc-200"
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
                  */}

                  <div className="px-4 py-6 space-y-6 border-t border-zinc-200 dark:border-zinc-500">
                    {navigation.pages.map((page) => (
                      <div
                        key={page.name}
                        className="flow-root"
                        onClick={() => setOpen(false)}
                      >
                        <Link
                          href={page.href}
                          className="block p-2 -m-2 font-medium text-zinc-900 dark:text-zinc-200"
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
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <div className="border-b border-zinc-200 dark:border-zinc-900">
                  <div className="flex items-center justify-between h-14">
                    {/* Logo (lg+) */}
                    <div className="hidden md:flex md:flex-1 md:items-center">
                      <Link href="/">
                        <div className="flex items-center">
                          <div>
                            <Image
                              src="/images/learncyba_ring.webp"
                              alt="Learn Cyba - John Iwoh"
                              width="221"
                              height="50"
                              className="inline-block h-9 w-9"
                            />
                          </div>
                          <div className="ml-2">
                            <span className="bg-gradient-to-r  text-xl font-[200] text-neutral-950 dark:text-white ">
                              <strong>Learn</strong> Cyba
                            </span>
                          </div>
                        </div>
                        <span className="sr-only">LearnCyba - John Iwoh</span>
                      </Link>
                    </div>

                    <div className="hidden h-full md:flex">
                      {/* Flyout menus Desktop  */}
                      <Popover.Group className="inset-x-0 bottom-0 px-4">
                        <div className="flex justify-center h-full space-x-12">
                          {navigation.pages.map((page) => (
                            <Link
                              key={page.name}
                              href={page.href}
                              className="flex items-center text-base font-medium transition-colors duration-200 ease-in-ease-out text-zinc-700 hover:scale-110 hover:text-emerald-600 dark:text-zinc-50 hover:dark:text-emerald-400"
                            >
                              {page.icon && (
                                <page.icon className="w-5 h-5 mr-2 text-emerald-600 hover:scale-125 dark:text-emerald-600" />
                              )}
                              {page.name}
                            </Link>
                          ))}
                          {/*
                           */}
                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex items-center flex-1 md:hidden">
                      <button
                        type="button"
                        className="p-2 -ml-2 bg-white rounded-md text-zinc-400 dark:border-emerald-600 dark:bg-neutral-900"
                        onClick={() => setOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="w-6 h-6 " aria-hidden="true" />
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
                        className="w-full h-full rounded-full"
                      />
                    </Link>

                    <div className="flex items-center justify-end flex-1">
                      <div className="flex items-center gap-4 lg:ml-8">
                        {/* Cart 
                        <div className="flow-root ml-4 lg:ml-8">
                          <div className="flex items-center p-2 -m-2 cursor-pointer snipcart-checkout group:ease-in-ease-out group">
                            <ShoppingBagIcon
                              className="flex-shrink-0 w-6 h-6 text-zinc-900 group-hover:scale-110 group-hover:text-emerald-600 dark:text-emerald-600"
                              aria-hidden="true"
                            />

                            <span className="ml-2 text-sm font-medium snipcart-items-count text-zinc-700 group-hover:text-zinc-800 dark:text-zinc-50 group-hover:dark:text-zinc-50"></span>
                            <span className="sr-only">
                              items in cart, view bag
                            </span>
                          </div>
                        </div>*/}
                        {/* My account 
                        <div className="cursor-pointer snipcart-customer-signin ">
                          <UserCircleIcon
                            className="flex-shrink-0 w-6 h-6 ease-in-ease-out text-zinc-900 hover:scale-110 group-hover:text-emerald-600 dark:text-emerald-600"
                            aria-hidden="true"
                          />
                        </div>*/}
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
      <div className="shadow-top fixed bottom-0 left-1/2 z-50 w-[100%] -translate-x-1/2  bg-white bg-opacity-70 px-4 py-1 ring-1 ring-neutral-200/60 backdrop-blur-lg backdrop-filter dark:bg-[#1d1c20] dark:bg-opacity-70 dark:ring-neutral-600/40 md:hidden">
        <div className="flex items-center justify-between w-full gap-4">
          <div>
            <ModeToggle />
          </div>

          {/* Home */}
          <Link href="/" className="menu-item">
            <HomeIcon className="menu-item-icon" aria-hidden="true" />
            <div className="menu-item-text">Home</div>
          </Link>

          {/* Learn */}
          <Link href="/#course-structure" className="menu-item">
            <AcademicCapIcon className="menu-item-icon" aria-hidden="true" />
            <div className="menu-item-text">Course</div>
          </Link>

          {/* Contact */}
          <Link href="/#video-testimonials" className="menu-item">
            <UserCircleIcon className="menu-item-icon" aria-hidden="true" />
            <div className="menu-item-text">Contact</div>
          </Link>

          {/* Video Testimonials */}
          <Link href="/#video-testimonials" className="menu-item">
            <CalendarDaysIcon className="menu-item-icon" aria-hidden="true" />
            <div className="menu-item-text">Schedule</div>
          </Link>

          {/* Video Testimonials */}
          <Link href="/#video-testimonials" className="menu-item">
            <VideoCameraIcon className="menu-item-icon" aria-hidden="true" />
            <div className="menu-item-text">Reviews</div>
          </Link>

          {/* Cart 
          <div className="menu-item">
            <div className="cart-item">
              <ShoppingBagIcon className="menu-item-icon" aria-hidden="true" />
              <span className="sr-only">Items in cart, view bag</span>
            </div>
            <div className="menu-item-text ">Cart</div>
          </div>*/}

          {/* Burger menu 
          <div className="menu-item">
            <button
              type="button"
              className="menu-item-button 0 group relative ml-[-0.5rem]  rounded-md  p-2 transition-all duration-300  ease-in-out hover:scale-105 hover:transform hover:opacity-90"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <div className="relative flex h-[40px] w-[40px] transform items-center justify-center overflow-hidden rounded-full bg-neutral-50 ring-0 ring-1 ring-zinc-200/80 ring-opacity-30 transition-all duration-200 hover:ring-8 group-focus:ring-4 dark:bg-neutral-950 dark:ring-emerald-400/60">
                <div className="flex h-[14px] w-[16px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 group-focus:-translate-x-1.5 group-focus:rotate-180">
                  <div className="h-[2px] w-8 origin-left transform bg-emerald-600 transition-all delay-150 duration-300 group-focus:w-2/3 group-focus:rotate-[42deg] dark:bg-white"></div>
                  <div className="h-[2px] w-8 transform rounded bg-emerald-600 transition-all duration-300 group-focus:translate-x-10 dark:bg-white"></div>
                  <div className="h-[2px] w-8 origin-left transform bg-emerald-600 transition-all delay-150 duration-300 group-focus:w-2/3 group-focus:-rotate-[42deg] dark:bg-white"></div>
                </div>
              </div>
            </button>
          </div> */}
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
      className="px-2 py-1 transition rounded-full shadow-md group bg-white/90 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-neutral-900 dark:ring-white/40 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-emerald-50 [@media(prefers-color-scheme:dark)]:stroke-emerald-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-emerald-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-emerald-600" />
      <MoonIcon className="hidden h-6 w-6 fill-neutral-900 stroke-zinc-50/70 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-emerald-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-emerald-500" />
    </button>
  )
}
