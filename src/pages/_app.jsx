import { useEffect, useRef } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import { FiArrowUp } from 'react-icons/fi'
import dynamic from 'next/dynamic'
import 'nprogress/nprogress.css'

import '@/styles/tailwind.css'
import 'focus-visible'
import { FromTheBlog } from '@/components/FromTheBlog'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

const TopProgressBar = dynamic(
  () => {
    return import('@/components/TopProgressBar')
  },
  { ssr: false }
)

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      {/* <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div> */}

      <div className="relative">
        <TopProgressBar />
        <Header />
        <main className=" h-full min-h-[88vh] pt-20">
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>

        {/* <FromTheBlog /> */}
        <Footer />
        <a
          href="#backtobody"
          className="fixed bottom-[6rem] right-10 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 shadow-md shadow-zinc-100/30 dark:bg-zinc-100 md:bottom-5"
        >
          <FiArrowUp className="text-zinc-100 dark:text-zinc-900" />
        </a>
      </div>
    </>
  )
}
