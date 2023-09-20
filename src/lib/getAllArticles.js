import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx', '*/*/*/*.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}

export async function getRecentArticles(range = 6) {
  let articles = await getAllArticles()
  return articles.slice(0, range - 1)
}

export async function getArticlesCategories() {
  const articles = await getAllArticles()
  const categories = articles.map((article) => ({
    value: article.category,
    label: article.category,
  }))
  const uniqueCategories = categories.filter(
    (category, index, self) =>
      index === self.findIndex((c) => c.value === category.value)
  )
  return uniqueCategories
}
