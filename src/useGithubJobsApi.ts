import { useState, useEffect, useCallback } from "react"

export function useGithubJobsApi(pageNumber: number) {
  const [jobs, setJobs] = useState<any[]>([])

  const fetchData = useCallback(async () => {
    const request = await fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${pageNumber}`
    )
    const response = await request.json()
    const data = response

    if (data.length > 0) {
      setJobs(jobs.concat(data))
      console.log(data)
    }
  }, [pageNumber])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return jobs
}
