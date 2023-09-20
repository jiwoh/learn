import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useProductsData(page, query, price) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [total, setTotal] = useState(0)
  const [range, setRange] = useState({
    from: 0,
    to: 0,
  })

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: '/api/products',
      params: {
        page,
        category: query ? query : null,
        price: price ? price : null,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setData(res.data.data)
        setHasMore(res.data.hasMore)
        setTotal(res.data.total)
        setRange(res.data.range)
        setLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancel()
  }, [page, price, query])

  return { loading, error, data, hasMore, setData, total, range }
}
