import products from '../../data/products.json'

import {
  FaSyringe,
  FaFlask,
  FaMicroscope,
  FaRegClock,
  FaDumbbell,
  FaThermometerHalf,
} from 'react-icons/fa'
import { GiTrunkMushroom } from 'react-icons/gi'

const actions = [
  {
    title: 'Type',
    href: '#',
    icon: FaSyringe,
    iconForeground: 'text-emerald-700',
    iconBackground: 'bg-emerald-50',
  },
  {
    title: 'Volume',
    href: '#',
    icon: FaFlask,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Species',
    href: '#',
    icon: FaMicroscope,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'Classification',
    href: '#',
    icon: FaRegClock,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Cultivation Difficulty',
    href: '#',
    icon: FaDumbbell,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    title: 'Temperature Colonizing',
    href: '#',
    icon: FaThermometerHalf,
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-50',
  },
  {
    title: 'Temperature Fruiting',
    href: '#',
    icon: FaThermometerHalf,
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-50',
  },
  {
    title: 'Substrates',
    href: '#',
    icon: GiTrunkMushroom,
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-50',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function TableLiquidCulture() {
  return (
    <div className="... overflow-hidden rounded-lg bg-white shadow dark:bg-neutral-900">
      <div className="... bg-white py-6 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="font-[400]leading-7 text-base text-zinc-500 dark:text-yellow-100">
              StrainLiquid Culture Strain Syringe Details
            </p>
            <h2 className="mt-2 text-2xl font-[600] tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Liquid Culture Strain Name Here
            </h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-200">
              Product Subtitles here. Anim aute id magna aliqua ad ad non
              deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
              amet fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="... mx-auto max-w-6xl divide-y divide-zinc-200 overflow-hidden rounded-lg shadow dark:divide-zinc-100 sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 ">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              '... group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 dark:bg-zinc-900'
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white'
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
                {action.title}
              </h3>
              <p className="mt-2 text-sm font-[300] text-zinc-500 dark:text-zinc-100">
                Doloribus doloreffs nostrum quia qui natus officia quod et
                dolorem. Sit repellendus qui ut at blanditiis et quo et
                molestiae.
              </p>
            </div>
            <span
              className="pointer-events-none absolute right-6 top-6 text-zinc-300 group-hover:text-zinc-400"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const { productId } = params
  const product = products.find(({ id }) => id === productId)
  return {
    props: {
      product,
    },
  }
}
export async function getStaticPaths() {
  return {
    paths: products.map(({ id }) => {
      return {
        params: {
          productId: id,
        },
      }
    }),
    fallback: false,
  }
}
