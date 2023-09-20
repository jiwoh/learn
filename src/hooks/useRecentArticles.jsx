import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useRecentArticles(range) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios({
      method: 'GET',
      url: '/api/articles',
      params: { r: range ? range : 6 },
    })
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((e) => {
        setError(true)
      })
    setLoading(false)
  }, [range])

  return { loading, error, data }
}
