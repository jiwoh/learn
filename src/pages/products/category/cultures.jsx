import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { getProductsDataByCategory } from '@/lib/productsData'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
const heroInfo = {
  title: 'We are changing the way people live, heal and grow.',
  description:
    'Unlock the world of mushrooms at . From cultivation, cuisine, health, and medicine, we are passionate about all things fungi. Embark today on an extraordinary journey of growth and wonder. Start your mushroom adventure with us today.',
  primaryAction: {
    text: 'Get Started',
    href: '#',
  },
  secondaryAction: {
    text: 'Live Demo',
    href: '#',
  },
  images: [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
      alt: '',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
      alt: '',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80',
      alt: '',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80',
      alt: '',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
      alt: '',
    },
  ],
}

export default function Product({ products }) {
  return (
    <Container className="... bg-zinc-100 bg-opacity-60 backdrop-blur-lg backdrop-filter dark:bg-neutral-900">
      <h2 id="products" className="sr-only">
        Footer
      </h2>
      <h2 id="products" className="sr-only">
        Mycology Fungi Culture Grain Spawn Jar Lids
      </h2>
      <div className="py-2 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-emerald-600">
          Shop Now
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-zinc-600 dark:text-zinc-200">
          Unlock the world of fungi and mushrooms. Start your extraordinary
          journey of growth, wonder and mushroom adventure with us today.
        </p>
      </div>
      <div className="max-w-2xlpy-16 mx-auto sm:py-24 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {products.map((product) => (
            <div key={product.id} className="">
              <Link href={`/products/${product.id}`}>
                {' '}
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className=""
                >
                  <article
                    key={product.id}
                    className="... ... ... group relative flex overflow-hidden rounded-lg border border-zinc-300/60 bg-gradient-to-t from-slate-900/10 via-zinc-100 shadow-sm backdrop-blur-md transition duration-300 ease-in-out hover:scale-105   hover:border-blue-600 hover:shadow-xl focus:border-blue-500 active:border-blue-500 dark:border-zinc-700/80 dark:bg-gradient-to-b  dark:from-neutral-800/60 dark:via-neutral-900 dark:hover:border-emerald-600 md:flex-col"
                  >
                    <div className="group relative w-1/3 sm:h-[250px] sm:w-full">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        width={300}
                        height={300}
                        className="group-hover:ease-in-ease-out absolute inset-0 h-full w-full transform object-cover p-2 opacity-100 duration-300 group-hover:opacity-0 sm:object-contain"
                      />
                      <Image
                        src={product.relatedImages[0].src}
                        alt={product.alt}
                        width={300}
                        height={300}
                        className="group-hover:ease-in-ease-out absolute inset-0 h-full w-full rounded-xl object-cover p-2 opacity-0 duration-300 group-hover:opacity-100"
                      />
                    </div>
                    <div className="flex w-2/3 flex-1 flex-col space-y-0 px-4 py-4 sm:w-full">
                      <h4 className="inline-block text-[10px] font-[300] text-zinc-800 dark:text-amber-500 sm:text-xs">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.category}
                      </h4>
                      <h3 className="text-shadow text-2xl font-normal tracking-wide text-zinc-800 hover:underline dark:text-amber-100 sm:text-2xl sm:font-bold sm:tracking-tight">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </h3>

                      <div className="flex items-center justify-between sm:py-2.5 md:items-center lg:justify-between">
                        <div className="flex">
                          <p className="!mb-0 text-2xl font-semibold tracking-tight text-blue-600 dark:text-zinc-50">
                            ${product.price}
                          </p>
                        </div>
                        <div className="group">
                          <button
                            onClick={() => handleAddToCart(product)}
                            type="button"
                            className="... ... ease-in-ease-out ... ... ... ... rounded-full bg-blue-600 p-2 text-white shadow-sm outline outline-1 outline-offset-4 outline-slate-600/40 transition-transform duration-300 focus:ring-4 focus:ring-[#2557D6]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 group-hover:scale-90  group-hover:bg-emerald-500 group-hover:shadow-md  group-hover:ring group-hover:ring-slate-800/50 group-hover:ring-offset-4 dark:bg-emerald-600 dark:outline dark:outline-1 dark:outline-offset-4 dark:outline-slate-50/50 dark:focus:ring-[#2557D6]/50"
                            aria-label="Add to Cart"
                            role="button"
                          >
                            <ShoppingCartIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
                {/* <div className="... relative mx-auto flex max-w-md flex-col space-y-3 rounded-xl border-2 border-zinc-200/50 p-3 shadow-lg dark:border-2 dark:border-zinc-900 dark:bg-zinc-900/30 dark:shadow-none md:max-w-3xl md:flex-row md:space-x-5 md:space-y-0 lg:max-w-6xl">
                  <div className="grid w-full place-items-center py-2 md:w-1/3">
                    <Image
                      src={product.image}
                      alt={product.metadata.species}
                      width={500}
                      height={500}
                      className="rounded-xl bg-black/0 md:mt-0"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>

                  <div className="flex w-full flex-col space-y-1 p-1 leading-6 md:w-2/3">
                    <h3 className="-mb-2 text-3xl font-[600] tracking-tight text-zinc-800 dark:text-zinc-100 lg:text-3xl">
                      {product.title}
                    </h3>
                    <span className="text-xs font-[300] text-zinc-600 dark:text-yellow-100">
                      {product.metadata.type}
                    </span>{' '}
                    <span className="text-sm font-[300] leading-snug text-zinc-700 dark:text-zinc-200 ">
                      {product.subtitle}
                    </span>
                    <div className="flex items-center justify-between">
                      <p className="py-2 text-3xl font-bold text-emerald-600 dark:text-emerald-400 lg:text-4xl ">
                        ${product.price}
                      </p>
                      <button
                        role="button"
                        aria-label="Add product to cart"
                        aria-describedby="product-details"
                        aria-live="polite"
                        data-item-id={product.id}
                        data-item-image={product.image}
                        data-item-name={product.title}
                        data-item-url={`/products/${product.id}`}
                        data-item-price={product.price}
                        type="button"
                        className="mr-2 inline-flex items-center rounded-lg bg-emerald-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-emerald-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <svg
                          aria-hidden="true"
                          className="-ml-1 mr-2 h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                        <span id="product-details" className="sr-only">
                          {product.title} - ${product.price}
                        </span>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export async function getStaticProps({ params }) {
  const products = await getProductsDataByCategory('Liquid Culture') // getProductsDataByCategory("category_name")
  return {
    props: {
      products,
    },
  }
}
