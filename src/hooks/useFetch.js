import { useEffect, useState } from "react"

const useFetch = () => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch()
  })
}

export default useFetch
