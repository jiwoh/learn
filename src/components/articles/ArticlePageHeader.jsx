import { Fragment } from 'react'
import moment from 'moment'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'
import CopyToClipboard from 'react-copy-to-clipboard'
import { AiOutlineLink } from 'react-icons/ai'

export const ArticlePageHeader = ({ meta }) => {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  return (
    <>
      <header className="container relative mx-auto -mt-16 flex flex-col px-4 md:px-8 md:py-14 lg:flex-row lg:items-center lg:py-20 xl:px-36">
        <div className="nc-PageSingleVideo__headerWrap ... absolute inset-y-0 end-1/2 w-screen translate-x-1/2 transform dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-neutral-700 dark:via-neutral-950/20  dark:to-[#171717] lg:w-[calc(100vw/2)] lg:translate-x-0 lg:rounded-e-[30px]"></div>
        <div className="relative pb-10 lg:pb-0 lg:pr-10">
          <div className="nc-SingleHeader">
            <div className="space-y-5 text-zinc-100">
              <div
                className="nc-CategoryBadgeList flex flex-wrap space-x-2"
                data-nc-id="CategoryBadgeList"
              >
                <span className="nc-Badge inline-flex items-center gap-x-1.5 rounded-full bg-white px-4 py-1 text-xs font-medium text-zinc-900 ring-1 ring-inset ring-zinc-200 transition-colors duration-300 dark:bg-neutral-800 dark:text-white dark:ring-neutral-400">
                  <svg
                    className="h-1.5 w-1.5 fill-green-500"
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                  >
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                  {meta.category}
                </span>
                <Popover>
                  {() => (
                    <>
                      <Popover.Button>
                        <button
                          className="flex h-10 w-10 flex-shrink-0 rotate-180 items-center justify-center rounded-full bg-neutral-50 text-zinc-700 transition duration-200 hover:bg-emerald-400 hover:text-blue-50 hover:ring-4 hover:ring-blue-600/80 focus:outline-none dark:bg-emerald-600 dark:text-zinc-200 dark:hover:bg-blue-600"
                          title="Share this article"
                          id="headlessui-menu-button-:rq:"
                          type="button"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                            ></path>
                          </svg>
                        </button>
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-[2] mt-3 w-80 -translate-x-1/2 transform px-4 sm:px-0 md:top-1/4 lg:max-w-3xl xl:w-96">
                          <div className="overflow-hidden rounded-lg bg-neutral-900 p-4 pb-8 text-zinc-50 shadow-lg ring-2 ring-zinc-200 ring-opacity-30 dark:bg-black">
                            <p className="text-center ">Share</p>
                            <div className="relative mt-4 grid grid-cols-4 gap-4 xl:grid-cols-5">
                              <FacebookShareButton
                                url={url}
                                className="flex flex-col items-center justify-center gap-1"
                              >
                                <FacebookIcon round={true} size={45} />
                                <small className="font-body">Facebook</small>
                              </FacebookShareButton>
                              <TwitterShareButton
                                url={url}
                                className="flex flex-col items-center justify-center gap-1"
                              >
                                <TwitterIcon round={true} size={45} />
                                <small className="font-body">Twitter</small>
                              </TwitterShareButton>
                              <WhatsappShareButton
                                url={url}
                                className="flex flex-col items-center justify-center gap-1"
                              >
                                <WhatsappIcon round={true} size={45} />
                                <small className="font-body">Whatsapp</small>
                              </WhatsappShareButton>
                              <FacebookMessengerShareButton
                                url={url}
                                className="flex flex-col items-center justify-center gap-1"
                              >
                                <FacebookMessengerIcon round={true} size={45} />
                                <small className="font-body">Messenger</small>
                              </FacebookMessengerShareButton>
                              <div className="flex flex-col items-center justify-center gap-1">
                                <CopyToClipboard text={url}>
                                  <button className="rounded-full bg-neutral-50 p-3 text-zinc-700 active:p-2">
                                    <AiOutlineLink size="1.5rem" />
                                  </button>
                                </CopyToClipboard>
                                <small className="font-body">Copy link</small>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
              <h1
                className="max-w-4xl text-3xl font-semibold text-zinc-900 dark:text-zinc-50 md:!leading-[120%] lg:text-4xl"
                title={meta.title}
              >
                {meta.title}
              </h1>
              <div className="w-full border-b border-zinc-700 dark:border-zinc-400/60"></div>
              <div className="flex flex-col space-y-5">
                <div className="nc-PostMeta2 flex flex-shrink-0 flex-wrap items-center text-left text-sm leading-none text-zinc-700">
                  {meta.authorImage && (
                    <p className="flex items-center space-x-2 rtl:space-x-reverse">
                      <div className="wil-avatar relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full text-xl font-semibold uppercase text-zinc-600 shadow-inner ring-1 ring-white sm:h-11 sm:w-11 md:h-16 md:w-16">
                        <Image
                          src="/images/avatar.jpg"
                          width={100}
                          height={100}
                          alt={meta.author}
                        />
                      </div>
                    </p>
                  )}
                  <div className="ms-3">
                    <div className="flex items-center">
                      <p className="block text-xl font-semibold dark:text-zinc-100">
                        {meta.author}
                      </p>
                    </div>
                    <div className="text-xs">
                      <span className="text-zinc-600 dark:text-zinc-200">
                        {moment(meta.published_at).format('LL')}
                      </span>
                      {meta.readingTime && (
                        <>
                          <span className="mx-2 font-semibold text-zinc-600 dark:text-zinc-200">
                            ·
                          </span>
                          <span className="text-zinc-600 dark:text-zinc-200">
                            {meta.readingTime} min read
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-shrink-0 lg:w-8/12">
          <div className="dark:border-neutral-50/9 aspect-h-16 aspect-w-16 z-0 overflow-hidden rounded-xl border-4 border-neutral-100 bg-neutral-800 shadow-2xl sm:aspect-h-9">
            <div className="">
              <div
                className="absolute inset-0"
                style={{
                  width: ' 100%',
                  height: ' 100%',
                }}
              >
                <div
                  tabindex="0"
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url(${meta.image})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
