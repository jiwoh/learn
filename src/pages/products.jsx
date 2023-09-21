import { Container } from '@/components/Container'

import { useState } from 'react'

import { getProductsDataCategories } from '@/lib/productsData'
import useProductsData from '@/hooks/useProductsData'
import { useRouter } from 'next/router'
import ProductsMobileSideBar from '@/components/products/MobileSideBar'
import ProductToolBar from '@/components/products/ProductsToolBar'
import ProductsFilter from '@/components/products/ProductsFilter'
import ProductsGrid from '@/components/products/ProductsGrid'
import Spinner from '@/components/Spinner'
import { useEffect } from 'react'

const heroInfo = {
  title: 'We are changing the way people live, heal and grow.',
  description:
    'Unlock the world of mushrooms at John Iwoh. From cultivation, cuisine, health, and medicine, we are passionate about all things fungi. Embark today on an extraordinary journey of growth and wonder. Start your mushroom adventure with us today.',
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

const filters = [
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '0-10', label: '$0 - $10', checked: false },
      { value: '10-20', label: '$10 - $20', checked: false },
      { value: '20-30', label: '$20 - $30', checked: false },
    ],
  },
]

export default function ProductsPage({ categories }) {
  const categoriesToRender = JSON.parse(categories)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState(null)
  const [pagination, setPagination] = useState(0)
  const [sortBy, setSortBy] = useState('asc')
  const router = useRouter()
  const { category, price, page } = router.query

  const { data, loading, hasMore, total, range } = useProductsData(
    page,
    category,
    price
  )

  const products =
    sortBy === 'asc'
      ? data?.sort((a, b) => parseInt(a.price) - parseInt(b.price))
      : data?.sort((a, b) => parseInt(b.price) - parseInt(a.price))

  const handleFilterChange = (e) => {
    const value = e.target.value
    setSelectedFilters(value)
  }

  useEffect(() => {
    let currentUrl = new URL(window.location.href)
    if (
      currentUrl.searchParams.has('price') ||
      currentUrl.searchParams.has('page')
    ) {
      currentUrl.searchParams.delete('price')
      currentUrl.searchParams.delete('page')
    }
    if (selectedFilters) {
      currentUrl.searchParams.append('price', selectedFilters)
    }
    router.push(currentUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters])

  useEffect(() => {
    if (page) {
      setPagination(parseInt(page))
    } else {
      setPagination(0)
    }
  }, [page])

  useEffect(() => {
    let currentUrl = new URL(window.location.href)
    if (currentUrl.searchParams.has('page')) {
      currentUrl.searchParams.delete('page')
    }
    pagination === 0
      ? currentUrl.searchParams.delete('page')
      : currentUrl.searchParams.append('page', pagination)
    router.push(currentUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination])

  return (
    <>
      <Container className="mb-20 overflow-hidden bg-zinc-100 bg-opacity-60 backdrop-blur-lg backdrop-filter dark:bg-neutral-900">
        <h2 id="products" className="sr-only">
          Shop Products
        </h2>
      </Container>

      <div className="bg-zinc-100 dark:bg-neutral-900">
        <div>
          <ProductsMobileSideBar
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
            categoriesToRender={categoriesToRender}
            filters={filters}
            selectedFilters={selectedFilters}
            handleFilterChange={handleFilterChange}
            setSelectedFilters={setSelectedFilters}
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-2 text-center sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-emerald-600">
                Shop Now
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-zinc-600 dark:text-zinc-200">
                Unlock the world of fungi and mushrooms. Start your
                extraordinary journey of growth, wonder and mushroom adventure
                with us today.
              </p>
            </div>
            <ProductToolBar
              setMobileFiltersOpen={setMobileFiltersOpen}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="relative grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <ProductsFilter
                  categoriesToRender={categoriesToRender}
                  filters={filters}
                  selectedFilters={selectedFilters}
                  handleFilterChange={handleFilterChange}
                  setSelectedFilters={setSelectedFilters}
                />

                {/* Product grid */}
                <div className="lg:col-span-3">
                  {/* Your content */}
                  {!loading ? (
                    <ProductsGrid products={products} />
                  ) : (
                    <Spinner />
                  )}
                </div>
              </div>
              {/* Pagination */}
              <nav
                className="mt-8 flex items-center justify-between border-t border-zinc-200 bg-zinc-100 px-4 py-3 dark:bg-neutral-900 sm:px-6"
                aria-label="Pagination"
              >
                <div className="hidden sm:block">
                  <p className="text-sm text-zinc-700 dark:text-zinc-50">
                    Showing <span className="font-medium">{range.from}</span> to{' '}
                    <span className="font-medium">{range.to}</span> of{' '}
                    <span className="font-medium">{total}</span> results
                  </p>
                </div>
                <div className="flex flex-1 justify-between sm:justify-end">
                  <button
                    onClick={() => setPagination((prevPage) => prevPage - 1)}
                    disabled={!page}
                    className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-slate-300 hover:bg-neutral-50 focus-visible:outline-offset-0 disabled:bg-zinc-200 disabled:dark:bg-zinc-300"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setPagination((prevPage) => prevPage + 1)}
                    disabled={!hasMore}
                    className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-slate-300 hover:bg-neutral-50 focus-visible:outline-offset-0 disabled:bg-zinc-200 disabled:dark:bg-zinc-300"
                  >
                    Next
                  </button>
                </div>
              </nav>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const categories = await getProductsDataCategories()
  return {
    props: {
      categories,
    },
  }
}
