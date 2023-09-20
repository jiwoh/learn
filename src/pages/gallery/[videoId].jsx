import { Container } from '@/components/Container'
import Head from 'next/head'
import { TbShare2 } from 'react-icons/tb'
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
import { Fragment } from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import CopyToClipboard from 'react-copy-to-clipboard'

const SingleVideo = ({ content, absoluteUrl }) => {
  const singleContent = content ? JSON.parse(content) : {}

  const route = useRouter()
  const url = absoluteUrl + route.asPath

  return (
    <div className="overflow-hidden">
      <Head>
        <title></title>
        <meta name="description" content="Create lasting memories" />
      </Head>
      <Container className="relative z-10 mt-16 sm:mt-20">
        <div className="relative mb-16 flex flex-col rounded-2xl border bg-white dark:border-none md:flex-row">
          <div className="w-full overflow-hidden rounded-l-2xl">
            <video src={singleContent.URL} className="h-full w-full" controls />
          </div>
          <div className=" w-full p-4">
            <Popover>
              {({ open }) => (
                <>
                  <Popover.Button>
                    <button className="rounded-full p-2 text-zinc-900 hover:bg-neutral-200">
                      <TbShare2 size="1.3rem" />
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
                    <Popover.Panel className="absolute left-1/2 right-1/2 top-1/2 z-10 mt-3 w-80 -translate-x-1/2 transform px-4 sm:px-0 md:top-1/4 lg:max-w-3xl xl:w-96">
                      <div className="overflow-hidden rounded-lg bg-white p-4 pb-8 shadow-lg ring-1 ring-black ring-opacity-5">
                        <p className="text-center">Share</p>
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
                              <button className="rounded-full bg-neutral-200 p-3 active:p-2">
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
            <div className="mt-3 flex flex-col gap-2 text-zinc-800">
              <h1 className="mt-2 text-xl font-bold">
                {singleContent['Page Title']}
              </h1>
              <p>{singleContent.q}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SingleVideo

import { getGalleryDataById } from '@/lib/galleryData'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const { videoId } = context.query
  const content = await getGalleryDataById(videoId)
  const absoluteUrl = context.req.headers.host
  return {
    props: {
      content,
      absoluteUrl,
    },
  }
}
