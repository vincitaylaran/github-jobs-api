import { useState, useEffect } from "react"

interface Query {
  description?: string
  location?: string
  isFullTimeOnly?: string | boolean
  pageNumber?: number
}

export function useGithubJobsApi() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [jobs, setJobs] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)
  const endpoint = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`

  const fetchData = (query?: Query) => {
    let endpointCopy = endpoint

    if (query) {
      const { description, location, isFullTimeOnly, pageNumber } = query

      if (description) endpointCopy += `description=${description}&`
      if (location) endpointCopy += `location=${location}&`
      if (isFullTimeOnly) endpointCopy += `full_time=${description}&`

      endpointCopy += `page=${pageNumber}&`

      setIsLoading(true)

      fetch(endpointCopy)
        .then((req) => {
          return req.json()
        })
        .then((res) => {
          console.log(res)
          console.log(endpointCopy)
          setIsLoading(false)
          setJobs(res)
        })
    } else {
      endpointCopy = `${endpointCopy}page=${page}`
      setIsLoading(true)

      fetch(endpointCopy)
        .then((req) => {
          return req.json()
        })
        .then((res) => {
          console.log(res)
          console.log(endpointCopy)
          setIsLoading(false)
          setJobs(jobs.concat(res))
        })
    }
  }

  const loadMore = () => {
    setPage(page + 1)
  }

  useEffect(fetchData, [page])

  return { jobs, fetchData, loadMore, isLoading }
}
