import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { BlockFaqLiquidCulture } from '@/components/BlockFaqLiquidCulture.jsx'
import { TableLiquidCulture } from '@/components/TableLiquidCulture.jsx'
import { Tab } from '@headlessui/react'
import { TabsLiquidCultureSteps } from '@/components/TabsLiquidCultureSteps.jsx'
import { getProductsData, getProductsDataById } from '@/lib/productsData.js'
import { classNames } from '@/utils'
import { PlayIcon } from '@heroicons/react/24/outline'

export default function Product({ product }) {
  return (
    <div>
      <Head>
        <title>{product.title} - John Iwoh</title>
      </Head>
      <Container>
        <h2 id="products" className="sr-only">
          Products
        </h2>
        <div className="mx-auto max-w-2xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.relatedImages.map(
                    ({ id, src, alt, type, thumbnail }) => (
                      <Tab
                        key={id}
                        className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                      >
                        {({ selected }) => (
                          <>
                            <span className="absolute inset-0 overflow-hidden rounded-md">
                              <Image
                                src={type === 'video' ? thumbnail : src}
                                alt={alt}
                                width={500}
                                height={500}
                                priority
                                className="h-full w-full object-cover object-center"
                              />
                              {type === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-30">
                                  <PlayIcon className="h-10 w-10 text-white" />
                                </div>
                              )}
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-blue-500' : 'ring-transparent',
                                'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>
                    )
                  )}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
                {product.relatedImages.map(({ id, type, src, alt }) => (
                  <Tab.Panel key={id}>
                    {type === 'video' ? (
                      <div className="aspect-square">
                        <video
                          src={src}
                          autoPlay
                          loop
                          controls
                          muted
                          playsinline
                          className="h-full w-full sm:rounded-lg"
                        />
                      </div>
                    ) : (
                      <Image
                        src={src}
                        alt={alt}
                        width={500}
                        height={500}
                        priority
                        className="h-full w-full object-cover object-center sm:rounded-lg"
                      />
                    )}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 flex flex-col px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="whitespace-pre-wrap text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {product.title}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl font-[300] tracking-tight text-emerald-600 dark:text-emerald-400 sm:text-5xl">
                  ${product.price}
                </p>
              </div>

              <form className="mt-6">
                <div className="sm:flex-col1 flex">
                  <button
                    role="button"
                    aria-label="Add product to cart"
                    aria-describedby="product-details"
                    aria-live="polite"
                    className="snipcart-add-item inline-flex items-center rounded border-b-2 border-emerald-500 bg-white px-6 py-2 font-[650] text-zinc-800 shadow-md transition duration-100 ease-in hover:border-emerald-600 hover:bg-emerald-500 hover:text-white hover:shadow-md hover:shadow-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:hover:shadow-zinc-400/50 "
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-url={`/products/${product.id}`}
                    data-item-price={product.price}
                  >
                    <span className="mr-3">Buy Now</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span id="product-details" className="sr-only">
                      {product.title} - ${product.price}
                    </span>
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <pre className="whitespace-pre-line font-sans text-base font-[300] leading-snug text-zinc-700 dark:border-zinc-600 dark:text-zinc-200 lg:text-lg">
                  {product.description}
                </pre>
              </div>
            </div>
          </div>
        </div>
        <TableLiquidCulture />
        <TabsLiquidCultureSteps />
        <BlockFaqLiquidCulture />
      </Container>
    </div>
  )
}
export async function getStaticProps({ params }) {
  const { productId } = params
  const product = await getProductsDataById(productId)
  return {
    props: {
      product,
    },
  }
}
export async function getStaticPaths() {
  const products = await getProductsData()
  return {
    paths: JSON.parse(products).map(({ id }) => {
      return {
        params: {
          productId: id,
        },
      }
    }),
    fallback: false,
  }
}
