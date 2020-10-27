import { useState, useEffect } from "react"
import { Props as IJob } from "./components/Job"

interface Query {
  description?: string
  location?: string
  isFullTimeOnly?: string | boolean
  pageNumber?: number
}

export function useGithubJobsApi() {
  // TODO: create a loading state to track whether if a request is being made.
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

  // Since we can't make queries for jobs based on their ID, we have to search through each page until we find the job with a matching ID.
  // Not being able to make a query for IDs is the limitation of the API.
  const findJob = (id: string) => {
    // make a request using endpoint
    // check if the response is an array
    // check if the array's length is greater than 0
    // iterate through the array
    // if the element's id matches to the argument id
    //    return the element
    // otherwise
    //    check the next page
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
    if (jobs.length >= 50) {
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
  }

  useEffect(fetchData, [])

  return { jobs, loadMore, findJobs }
}
