import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const ProductsGrid = ({ products }) => {
  const router = useRouter()

  const handleAddToCart = (product) => {
    window.Snipcart.api.cart.items.add({
      id: product.id,
      name: product.title,
      price: product.price,
      url: `${router.basePath}/products/${product.slug}`,
      image: product.image,
    })
  }

  return (
    <>
      {products.length ? (
        <section className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-6 lg:gap-x-6 lg:gap-y-6">
          {products.map((product) => (
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
          ))}
        </section>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-50">
            No products found
          </h2>
          <p className="text-base text-zinc-500 dark:text-zinc-300">
            Try adjusting your search or filter to find what you&apos;re looking
            for.
          </p>
        </div>
      )}
    </>
  )
}

export default ProductsGrid
