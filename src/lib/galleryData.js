import fs from 'fs'
import path from 'path'

const jsonDirectory = path.join(process.cwd(), 'data')

export const getGalleryData = async () => {
  return fs.readFileSync(jsonDirectory + '/gallery.json', 'utf-8')
}

export const getGalleryDataById = async (id) => {
  const galleryData = await getGalleryData()
  const gallery = galleryData ? JSON.parse(galleryData) : []
  const content = gallery.find((item) => item.id === id)
  return JSON.stringify(content)
}

export const getGalleryDataCategories = async () => {
  const galleryData = await getGalleryData()
  const gallery = galleryData ? JSON.parse(galleryData) : []
  const categories = gallery.map((item) => item.Category)
  const uniqueCategories = [...new Set(categories)]
  const uniqueCategoriesWithLabel = uniqueCategories.map((item) => {
    return {
      label: item,
      value: item,
    }
  })
  return JSON.stringify(uniqueCategoriesWithLabel)
}
