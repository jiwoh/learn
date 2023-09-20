import { getRecentArticles } from '@/lib/getAllArticles'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @returns {Promise<void>}
 * @description
 * This is a serverless function that returns a JSON object of gallery data
 * for a given page number.
 */

export default async function recentArticles(req, res) {
  const { r } = req.query
  const response = await getRecentArticles(r || 6)
  res.status(200).json(response)
}
