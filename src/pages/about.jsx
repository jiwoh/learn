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
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-emerald-500 dark:text-zinc-200 dark:hover:text-emerald-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-emerald-500" />
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

export default function About() {
  return (
    <>
      <Head>
        <title>About - </title>
        <meta
          name="description"
          content="Our mission is to share transformative properties of mushrooms and fungi, unlocking your full potential in the human experience."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-neutral-900"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Our mission is to empower you to discover the transformative
              properties of mushrooms and fungi, unlocking your full potential
              in the human experience.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                At , we believe that including mushrooms and fungi as part of a
                balanced diet has the potential to transform lives by improving
                health and well-being. Join us on a journey of growth,
                discovery, and revitalization as we share and teach the
                countless benefits of the remarkable Fungi kingdom through
                cultivation, cuisine, health, and medicine.
              </p>
              <p>
                Whether you are a beginner or an experienced cultivator, we will
                guide you on your mushroom cultivation path.
              </p>
              <p>
                <em>Thank you</em> for choosing as your go-to source for all
                things mushroom-related.{' '}
                <strong>Let&apos;s start growing!</strong>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={FacebookIcon} className="mt-4">
                Follow on Facebook
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="#" icon={TikTokIcon} className="mt-4">
                Follow on TikTok
              </SocialLink>
              <SocialLink href="#" icon={PinterestIcon} className="mt-4">
                Follow on Pinterest
              </SocialLink>
              <SocialLink href="#" icon={YouTubeIcon} className="mt-4">
                Follow on YouTube
              </SocialLink>
              <SocialLink
                href="mailto:info@.co"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                info@.co
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
