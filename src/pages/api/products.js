import { getProductsData } from '@/lib/productsData'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @returns {Promise<void>}
 * @description
 * This is a serverless function that returns a JSON object of products data
 * for a given page number.
 */

const perPage = 6

export default async function getProductsDataByPage(req, res) {
  const { page = 0, category, price } = req.query
  const productsData = await getProductsData()
  let products = productsData ? JSON.parse(productsData) : []

  if (category) {
    products = products.filter((item) => {
      //  filter by mutilple categories using query string
      return category
        .toLowerCase()
        .split(',')
        .includes(item.category.toLowerCase())
    })
  }
  if (price) {
    products = products.filter((item) => {
      //  filter by price range using query string
      return (
        item.price >= price.split('-')[0] && item.price <= price.split('-')[1]
      )
    })
  }
  // if (!page) {
  //   return res.status(200).json(products)
  // }
  const content = {
    data: products.slice(page * perPage, page * perPage + perPage),
    total: products.length,
    hasMore: products.length > page * perPage + perPage,
    range: {
      from: products.length > page * perPage ? page * perPage + 1 : 0,
      to:
        products.length > page * perPage + perPage
          ? page * perPage + perPage
          : products.length,
    },
  }
  res.status(200).json(content)
}
