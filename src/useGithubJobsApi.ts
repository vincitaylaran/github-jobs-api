import { useState, useEffect } from "react"

interface Criteria {
  description?: string
  location?: string
  isFullTimeOnly?: boolean
}

export function useGithubJobsApi() {
  const [jobs, setJobs] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)
  const endpoint = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}`

  const filter = (criteria: Criteria) => {
    const { description, location, isFullTimeOnly } = criteria

    let updatedEndpoint = `${endpoint}`
    if (description) updatedEndpoint += `&description=${description}`
    if (location) updatedEndpoint += `&location=${location}`
    if (isFullTimeOnly) updatedEndpoint += `&full_time=${isFullTimeOnly}`

    fetch(updatedEndpoint)
      .then((req) => {
        return req.json()
      })
      .then((res) => {
        const data = res
        console.log(data)
      })
  }

  const fetchData = () => {
    fetch(endpoint)
      .then((req) => {
        return req.json()
      })
      .then((res) => {
        const data = res
        if (data.length > 0) {
          setJobs(jobs.concat(data))
          console.log(data)
        }
      })
  }

  const loadMore = () => {
    setPage(page + 1)
  }

  useEffect(fetchData, [page])

  return { jobs, filter, loadMore }
}
