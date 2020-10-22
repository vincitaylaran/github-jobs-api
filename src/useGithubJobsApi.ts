import { useState, useEffect, useCallback } from "react"

interface Criteria {
  description?: string
  location?: string
  isFullTimeOnly?: boolean
}

export function useGithubJobsApi(page: number) {
  const [jobs, setJobs] = useState<any[]>([])
  const endpoint = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}`

  const filter = async (criteria: Criteria) => {
    const { description, location, isFullTimeOnly } = criteria

    let updatedEndpoint = `${endpoint}`
    if (description) updatedEndpoint += `&description=${description}`
    if (location) updatedEndpoint += `&location=${location}`
    if (isFullTimeOnly) updatedEndpoint += `&full_time=${isFullTimeOnly}`

    const request = await fetch(updatedEndpoint)
    const response = await request.json()
    const data = response
    console.log(data)

    // if (description)

    // const filteredJobs = jobs.filter((job) => {
    //   return keywords.every(
    //     (word) =>
    //       job.type === word || job.location.toLowerCase() === word.toLowerCase()
    //   )
    // })
  }

  const fetchData = useCallback(async () => {
    const request = await fetch(endpoint)
    const response = await request.json()
    const data = response

    if (data.length > 0) {
      setJobs(jobs.concat(data))
      console.log(data)
    }
  }, [page])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { jobs, filter }
}
