import { useMemo, useState } from 'react'
import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles, getArticlesCategories } from '@/lib/getAllArticles'
import ArticlesPageAside from '@/components/articles/ArticlesPageAside'
import ArticlesList from '@/components/articles/ArticlesList'
import { useDeferredValue } from 'react'

export default function ArticlesIndex({ articles, categories }) {
  const articlesToRender = useMemo(() => articles, [articles])
  const categoriesToRender = JSON.parse(categories)

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
  const [isLoading, setIsLoading] = useState(false)
  const [filteredArticles, setFilteredArticles] = useState(articlesToRender)
  const handleApplyFilter = () => {
    setIsLoading(true)
    const newArticles = articlesToRender.filter((article) => {
      if (selectedFilters.length === 0) {
        return true
      }
      return selectedFilters.includes(article.category)
    })
    setIsLoading(false)
    setFilteredArticles(newArticles)
  }
  const deferFilteredArticles = useDeferredValue(filteredArticles)

  const filters = [
    {
      id: 'category',
      name: 'Category',
      options: categoriesToRender,
    },
  ]
  return (
    <>
      <Head>
        <title>Articles - RealMush</title>
        <meta
          name="description"
          content="Products and resources for mushroom cultivation, including liquid culture and mushroom jar lids."
        />
      </Head>
      <SimpleLayout
        title="At RealMush, we offer a range of products and resources for mushroom cultivation, including liquid culture, mushroom jar lids."
        intro="Our offerings are perfect for both beginners and experienced cultivators. Discover the many benefits of mushroom cultivation, from culinary exploration to health and medicine. Join us on a journey of growth, discovery, and revitalization through the wonders of the Fungi kingdom."
      >
        <div className="relative pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <ArticlesPageAside
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleApplyFilter={handleApplyFilter}
            selectedFilters={selectedFilters}
          />
          {/* Product grid */}
          <div className="relative mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <div className="max-h-[1000px] overflow-y-auto scrollbar-hide">
              {/* Your content */}
              {!isLoading ? (
                <ArticlesList articles={deferFilteredArticles} />
              ) : (
                <div className="flex h-96 items-center justify-center">
                  <svg
                    className="-ml-1 mr-3 h-20 w-20 animate-spin text-zinc-800 dark:text-zinc-100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                </div>
              )}
            </div>
            <div className="... absolute -inset-x-20 bottom-0 bg-gradient-to-t from-slate-100 pt-[25%] dark:bg-gradient-to-t dark:from-zinc-800  dark:pt-[25%] "></div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  const articles = await getAllArticles()
  const categories = await getArticlesCategories()
  return {
    props: {
      articles: articles.map(({ component, ...meta }) => meta),
      categories: JSON.stringify(categories),
    },
  }
}
