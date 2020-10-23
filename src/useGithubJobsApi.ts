import { useState, useEffect } from "react"

interface Query {
  description?: string
  location?: string
  isFullTimeOnly?: boolean
}

export function useGithubJobsApi() {
  const [jobs, setJobs] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)
  const [query, setQuery] = useState<Query>({
    description: undefined,
    location: undefined,
    isFullTimeOnly: false,
  })
  const [endpoint, setEndpoint] = useState(
    `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`
  )

  // keep a copy of the original endpoint for filter function. Queries for endpoint will keep on appending when working with
  // endpoint. Use originalEndpoint so that we don't get a long string of repeating queries.
  const originalEndpoint = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`

  const containsQuerySymbol = (url: string) => {
    return endpoint[endpoint.length - 1] === "?"
  }
  const filter = (filters: Query) => {
    const { description, location, isFullTimeOnly } = filters

    let updatedEndpoint = `${originalEndpoint}`

    if (!containsQuerySymbol(updatedEndpoint)) updatedEndpoint += "?"
    if (description) updatedEndpoint += `description=${description}&`
    if (location) updatedEndpoint += `location=${location}&`
    if (isFullTimeOnly) updatedEndpoint += `full_time=${isFullTimeOnly}&`

    // always start from page 1 when filtering.
    updatedEndpoint += "page=1"

    setEndpoint(updatedEndpoint)

    console.log(updatedEndpoint)

    fetch(updatedEndpoint)
      .then((req) => {
        return req.json()
      })
      .then((res) => {
        const data = res
        setJobs(data)
        console.log(data)
      })
  }

  const fetchData = () => {
    let updatedEndpoint = `${endpoint}`

    if (!containsQuerySymbol(updatedEndpoint)) {
      updatedEndpoint += "?"
    }
    updatedEndpoint += `page=${page}`
    console.log(updatedEndpoint)

    fetch(updatedEndpoint)
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
    const nextPage = page + 1
    setPage(nextPage)
  }

  useEffect(fetchData, [page])

  return { jobs, filter, loadMore }
}
