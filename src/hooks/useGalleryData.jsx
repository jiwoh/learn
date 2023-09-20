import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useGalleryData(pageNumber, query) {
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
    let cancel
    axios({
      method: 'GET',
      url: '/api/gallery',
      params: { page: pageNumber, q: query ? query : null },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setData((prevData) => [...prevData, ...res.data])
        setHasMore(res.data.length > 0)
        setLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancel()
  }, [pageNumber, query])

  return { loading, error, data, hasMore, setData }
}
