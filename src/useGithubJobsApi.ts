import { useState, useEffect } from "react"

export function useGithubJobsApi() {
  const [jobs, setJobs] = useState<any[]>()

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
      )
      // console.log("fetching...")
      const response = await request.json()
      const data = response
      // console.log("data fetched!")
      if (!jobs) {
        setJobs(data)
      }
    }
    fetchData()
  })

  return jobs
}
