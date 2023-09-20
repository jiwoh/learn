import { memo } from 'react'
import Link from 'next/link'
import ArticlesCard from './ArticlesCard'

const ArticlesList = ({ articles }) => {
  // console.log(articles, '@articles...!')
  return (
    <>
      {articles.length
        ? articles.map((article, index) => (
            <div
              key={index}
              className="mb-16 flex flex-col space-y-16"
              id={`${article?.category?.replaceAll(' ', '-')}`}
            >
              <ArticlesCard article={article} key={article.slug} />
            </div>
          ))
        : null}
    </>
  )
}

export default memo(ArticlesList)
