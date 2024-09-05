import React, { useDeferredValue, useEffect, useState } from 'react'
import GridPhotos from '@/components/gallery/gridphotos'
import Head from 'next/head'
import { Container } from '@/components/Container'
import useGalleryData from '@/hooks/useGalleryData'
import { useRouter } from 'next/router'
import GalleryPageAside from '@/components/gallery/GalleryPageAside'
import { getGalleryDataCategories } from '@/lib/galleryData'
import Spinner from '@/components/Spinner'

const Gallery = ({ categories }) => {
  const categoriesToRender = JSON.parse(categories)
  const router = useRouter()
  const { q } = router.query
  const { data, loading, setData } = useGalleryData(null, q)
  const deferredValue = useDeferredValue(data)

  const filters = [
    {
      id: 'category',
      name: 'Category',
      options: categoriesToRender,
    },
  ]

  const [selectedFilters, setSelectedFilters] = useState([])
  const handleFilterChange = (e) => {
    const value = e.target.value
    setSelectedFilters((prev) => {
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value)
      }
      return [...prev, value]
    })
  }

  const handleApplyFilter = () => {
    setData([])
    router.push({
      pathname: '/gallery',
      query: {
        q: selectedFilters.join(',').toLowerCase(),
      },
    })
  }

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Gallery - </title>
        <meta name="description" content="Create lasting memories" />
      </Head>
      {/* <Container className="relative mt-16 sm:mt-32">
        
      </Container> */}
      <div className="font-body mx-auto max-w-2xl px-4 py-16 sm:px-8 sm:py-24 lg:max-w-7xl lg:px-20">
        <div className="border-b border-zinc-200 pb-10">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Our mission is to empower you to discover the transformative
            properties of mushrooms and fungi, unlocking your full potential in
            the human experience.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Embark on a captivating journey through the edible mushroom kingdom,
            encountering the magnificent Lions Mane, delicate Enoki, and
            striking Chicken of the Woods mushrooms, each offering unique
            appearances, flavors, and textures that elevate culinary creations
            and celebrate the marvels bounty nature has to offer.
          </p>
        </div>

        <div className="relative pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <GalleryPageAside
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleApplyFilter={handleApplyFilter}
            selectedFilters={selectedFilters}
          />
          {/* Product grid */}
          <div className="relative mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <div className="max-h-[1000px] overflow-y-auto scrollbar-hide">
              {/* Your content */}
              {!loading ? <GridPhotos photos={deferredValue} /> : <Spinner />}
            </div>
            <div className="... absolute -inset-x-20 bottom-0 bg-gradient-to-t from-slate-100 pt-[35%] dark:bg-gradient-to-t dark:from-zinc-800  dark:pt-[25%] "></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const categories = await getGalleryDataCategories()
  return {
    props: {
      categories,
    },
  }
}

export default Gallery
