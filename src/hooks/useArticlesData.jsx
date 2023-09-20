import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useArticlesData(articles, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [hasMore, setHasMore] = useState(false)

  //   useEffect(() => {
  //     setData([])
  //   }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    // axios({
    //   method: 'GET',
    //   url: '/api/gallery',
    //   params: { page: pageNumber, q: query ? query : null },
    // })
    //   .then((res) => {
    //     setData((prevData) => [...prevData, ...res.data])
    //     setHasMore(res.data.length > 0)
    //     setLoading(false)
    //   })
    //   .catch((e) => {
    //     setError(true)
    //   })
    if (!pageNumber) {
      setData(articles)
      setHasMore(false)
      setLoading(false)
    }
    setData((prev) => [
      ...prev,
      ...articles.slice(pageNumber * 20, pageNumber * 20 + 20),
    ])
    setHasMore(data.length > 0)
    setLoading(false)
  }, [articles, data.length, pageNumber])

  return { loading, error, data, hasMore }
}
