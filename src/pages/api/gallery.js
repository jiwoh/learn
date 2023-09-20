import { getGalleryData } from '@/lib/galleryData'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @returns {Promise<void>}
 * @description
 * This is a serverless function that returns a JSON object of gallery data
 * for a given page number.
 */

export default async function getGalleryDataByPage(req, res) {
  const { page, q } = req.query
  const galleryData = await getGalleryData()
  let gallery = galleryData ? JSON.parse(galleryData) : []

  if (q) {
    gallery = gallery.filter((item) => {
      //  filter by mutilple categories using query string
      return q.toLowerCase().split(',').includes(item.Category.toLowerCase())
    })
  }
  if (!page) {
    return res.status(200).json(gallery)
  }
  const content = gallery.slice(page * 20, page * 20 + 20)
  res.status(200).json(content)
}
