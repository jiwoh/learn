import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FReeYourDesktop = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-6 text-center md:mb-8">
        <p className="text-base font-semibold dark:text-white md:text-lg">
          Apps
        </p>
        <p className="text-2xl font-bold dark:text-white sm:text-4xl md:font-extrabold lg:text-5xl">
          Free Your Desktop.
        </p>
        <p className="text-2xl font-bold dark:text-white sm:text-4xl md:font-extrabold lg:text-5xl">
          And Your apps will follow
        </p>
      </div>
      <div className="mb-6 flex justify-center md:mb-8">
        <video
          id="#myVideo"
          autoPlay={true}
          playsInline={true}
          muted
          loop={true}
          controls={false}
          poster="/images/parallax_video_fallback_image.webp"
          preload="auto"
          className="relative z-10 h-full w-full object-cover"
          // src="/videos/heroVideo.mp4"
        >
          <source
            src="/videos/parallax/parallax_video.mp4"
            type="video/mp4"
            codecs="avc1.42E01E, mp4a.40.2"
          />
          {/* <source src="/videos/heroVideo.webm" type="video/mp4" /> */}
        </video>
      </div>
      <div className="mx-auto mb-20 w-full max-w-3xl">
        <p className="text-lg font-semibold dark:text-white md:text-xl">
          Your apps live in your space.
        </p>
        <p className="mb-6 text-zinc-600 dark:text-white">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. In publishing
          and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before final copy is available.
        </p>
        <Link
          className="rounded-xl bg-[#e76022] px-3 py-1 text-sm capitalize dark:text-white lg:rounded-3xl lg:px-4 lg:py-2 lg:text-base"
          href={'/'}
        >
          learn more about apps
        </Link>
      </div>
    </div>
  )
}

export default FReeYourDesktop
