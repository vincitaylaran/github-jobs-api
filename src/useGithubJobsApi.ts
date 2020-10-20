import { useState, useEffect } from "react"

export function useGithubJobsApi(): any[] {
  const [allJobs, setAllJobs] = useState<any[]>()
  const [viewedJobs, setViewedJobs] = useState<any[]>([])
  const viewedJobsCountLimit = 12

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
      )
      console.log("fetching...")
      const response = await request.json()
      const data = response
      console.log("data fetched!")
      if (!allJobs) {
        setAllJobs(data)
      }
    }
    fetchData()
  })

  useEffect(() => {
    if (allJobs) {
      const firstTwelveJobs: any[] = allJobs.slice(0, viewedJobsCountLimit)
      setViewedJobs(firstTwelveJobs)
    }
  }, [allJobs])

  return viewedJobs
}
