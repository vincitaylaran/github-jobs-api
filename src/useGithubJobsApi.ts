import { useState, useEffect } from "react"
import { Props as IJob } from "./components/Job"

interface Query {
  description?: string
  location?: string
  isFullTimeOnly?: string | boolean
  pageNumber?: number
}

export function useGithubJobsApi() {
  const [jobs, setJobs] = useState<IJob[]>([])
  const [page, setPage] = useState<number>(1)
  const endpoint = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`

  const fetchData = (pageNumber?: number) => {
    let endpointCopy = endpoint

    if (pageNumber) setPage(pageNumber)

    endpointCopy += `page=${page}&`

    fetch(endpointCopy)
      .then((req) => {
        return req.json()
      })
      .then((res) => {
        setJobs(res)
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

    fetch(endpointCopy)
      .then((req) => {
        return req.json()
      })
      .then((res) => {
        setJobs(res)
      })
  }

  const loadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    const endpointWithPage = `${endpoint}page=${nextPage}`

    fetch(endpointWithPage)
      .then((req) => {
        return req.json()
      })
      .then((res) => {
        if (res.length > 0) {
          setJobs(jobs.concat(res))
        }
      })
  }

  useEffect(fetchData, [])

  return { jobs, loadMore, findJobs }
}
