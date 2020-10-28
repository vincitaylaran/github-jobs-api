import { useState, useEffect } from "react"
import { Props as IJob } from "./components/Job"

// https://jobs.github.com/api

interface Query {
  description?: string
  location?: string
  isFullTimeOnly?: string | boolean
  pageNumber?: number
}

export function useGithubJobsApi() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [jobs, setJobs] = useState<IJob[]>([])
  const [page, setPage] = useState<number>(1)
  const endpoint = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`

  const fetchData = (pageNumber?: number) => {
    console.log("fetching data...")

    let endpointCopy = endpoint

    if (pageNumber) setPage(pageNumber)

    endpointCopy += `page=${page}&`
    setIsLoading(true)
    fetch(endpointCopy)
      .then((req) => {
        return req.json()
      })
      .then((res) => {
        setJobs(res)
        setIsLoading(false)
        console.log("data fetched!")

        return res
      })
  }

  const findJobs = (
    description?: string,
    location?: string,
    isFullTimeOnly?: boolean
  ) => {
    let endpointCopy = endpoint
    if (description) endpointCopy += `description=${description}&`
    if (location) endpointCopy += `location=${location}&`
    if (isFullTimeOnly)
      endpointCopy += `full_time=${isFullTimeOnly ? "true" : "false"}&`

    setIsLoading(true)

    fetch(endpointCopy)
      .then((req) => {
        return req.json()
      })
      .then((res) => {
        setJobs(res)
        setIsLoading(false)
      })
  }

  const loadMore = () => {
    if (jobs.length >= 50) {
      const nextPage = page + 1
      setPage(nextPage)
      const endpointWithPage = `${endpoint}page=${nextPage}`
      setIsLoading(true)
      fetch(endpointWithPage)
        .then((req) => {
          return req.json()
        })
        .then((res) => {
          if (res.length > 0) {
            setJobs(jobs.concat(res))
          }
          setIsLoading(false)
        })
    }
  }

  useEffect(fetchData, [])

  return { jobs, loadMore, findJobs, isLoading }
}
