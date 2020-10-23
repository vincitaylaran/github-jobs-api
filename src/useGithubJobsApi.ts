import { useState, useEffect } from "react"

interface Query {
  description?: string
  location?: string
  isFullTimeOnly?: string | boolean
}

export function useGithubJobsApi() {
  const [jobs, setJobs] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)
  const [endpoint, setEndpoint] = useState<string>(
    `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`
  )

  // ugly way to filter. Pretty this up.
  const filter = (query: Query) => {
    const { description, location, isFullTimeOnly } = query

    let endpointCopy = endpoint

    if (description) {
      endpointCopy += `description=${description}&`
    } else {
      endpointCopy += "description=&"
    }

    if (location) {
      endpointCopy += `location=${location}&`
    } else {
      endpointCopy += "location=&"
    }

    if (isFullTimeOnly) {
      endpointCopy += `full_time=${isFullTimeOnly}&`
    } else {
      endpointCopy += "full_time=false&"
    }

    setEndpoint(endpointCopy)

    // fetch(endpointCopy)
    //   .then((req) => {
    //     return req.json()
    //   })
    //   .then((res) => {
    //     const data = res
    //     setJobs(data)
    //     console.log(data)
    //   })
  }

  const fetchData = () => {
    let updatedEndpoint = `${endpoint}page=${page}`
    console.log(updatedEndpoint)

    fetch(updatedEndpoint)
      .then((req) => {
        return req.json()
      })
      .then((res) => {
        const data = res
        setJobs(jobs.concat(data))
        console.log(data)
      })
  }

  const loadMore = () => {
    setPage(page + 1)
  }

  const fetchFilteredData = () => {
    fetch(endpoint)
      .then((req) => {
        return req.json()
      })
      .then((res) => {
        const data = res
        setJobs(data)
        console.log(data)
      })
  }

  useEffect(fetchData, [page])

  useEffect(fetchFilteredData, [endpoint])

  return { jobs, filter, loadMore }
}
