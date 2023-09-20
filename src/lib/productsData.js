import fs from 'fs'
import path from 'path'

const jsonDirectory = path.join(process.cwd(), 'data')

export const getProductsData = async () => {
  return fs.readFileSync(jsonDirectory + '/products.json', 'utf-8')
}

export const getProductsDataById = async (id) => {
  const productsData = await getProductsData()
  const products = productsData ? JSON.parse(productsData) : []
  const content = products.find((item) => item.id === id)
  return content
}

export const getProductsDataByCategory = async (category) => {
  const productsData = await getProductsData()
  const products = productsData ? JSON.parse(productsData) : []
  const content = products.filter((item) => item.category === category)
  return content
}

export const getProductsDataCategories = async () => {
  const productsData = await getProductsData()
  const products = productsData ? JSON.parse(productsData) : []
  const categories = products.map((item) => item.category)
  const uniqueCategories = [...new Set(categories)]
  const uniqueCategoriesWithLabel = uniqueCategories.map((item) => {
    return {
      label: item,
      value: item,
    }
  })
  return JSON.stringify(uniqueCategoriesWithLabel)
}
