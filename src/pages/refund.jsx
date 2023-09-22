import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  FacebookIcon,
  TikTokIcon,
  PinterestIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/king-oyster-mushroom.webp'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-emerald-500 dark:text-zinc-200 dark:hover:text-emerald-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-emerald-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy</title>
        <meta
          name="description"
          content="This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy."
        />
      </Head>
      <section className="px-4 mx-auto mt-4 max-w-7xl md:mt-8 lg:px-8">
        <div className="grid grid-cols-1">
          <div className="pb-8 lg:order-first lg:row-span-2 lg:pb-16">
            <h1 className="pb-8 prose-headings text-neutral-950 dark:text-zinc-100 sm:text-4xl">
            Welcome to our Cancellation and Refund Policy for Online Courses. We understand that circumstances can change, and we want to ensure that you have a clear understanding of our policies regarding cancellations and refunds for our online courses. Whether you are considering enrolling in one of our courses or you have already made a booking, this policy outlines the terms and conditions that apply. Please take a moment to familiarize yourself with the details provided below, which will help you navigate any potential changes or cancellations to your course enrollment. Your satisfaction and understanding are of utmost importance to us, and we aim to provide you with a transparent and fair process for cancellations and refunds.
            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <h2 className="text-2xl text-zinc-800 dark:text-zinc-200">
                Cancellation and Refund Policy for Online Courses
              </h2>
              <p className="text-base font-normal tracking-tighter text-zinc-600 dark:text-zinc-200">
                Cancellation and refund policy for online courses If you cancel
                the course booking within 14 calendar days of receiving your
                order confirmation and before the start of the course without
                giving any reason, you are entitled to a full refund of the
                price paid. Cancellations and refunds in circumstances outside
                those described above, and/or following the expiry of the 14-day
                cancellation period, are subject to the terms and conditions set
                out in this Cancellation and Refund policy. For the avoidance of
                doubt, the cancellation period will expire 14 days after the
                date of the Order Confirmation. We will make the reimbursement
                using the same means of payment as you used for the initial
                transaction unless you have expressly agreed otherwise. In any
                event, you will not incur any fees as a result of this
                reimbursement. If you start to use our services during the
                cancellation period (i.e. if the course commences during the
                14-day cancellation period) and/or if you access the course
                materials via our online course spaces (i.e. via our virtual
                learning environment), no refund will be payable.
              </p>
            </div>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <h2 className="text-2xl text-zinc-800 dark:text-zinc-200">
                Types of Data Collected
              </h2>
              <p className="text-base font-normal tracking-tighter text-zinc-600 dark:text-zinc-200">
                Whilst every effort is made to avoid changes to our program
                LearnCyba Inc. reserves the right to withdraw or cancel any
                course. If for any reason we cancel a course, all course fees
                will be returned in full.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
