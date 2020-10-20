import React, { useState, useEffect, useRef } from "react"
import "./App.css"
import { useGithubJobsApi } from "./useGithubJobsApi"

export default function App() {
  const jobs = useGithubJobsApi()
  const [viewedJobs, setViewedJobs] = useState<any[]>()
  const jobsRef = useRef<any[]>()
  const viewedJobsLoadLimit = 12

  const loadMore = () => {
    if (jobsRef.current) {
      const firstTwelveJobs = jobsRef.current.slice(0, viewedJobsLoadLimit)
      jobsRef.current = jobsRef.current.slice(
        viewedJobsLoadLimit,
        jobsRef.current.length
      )

      if (viewedJobs) {
        setViewedJobs(viewedJobs.concat(firstTwelveJobs))
      }
    }
  }

  useEffect(() => {
    jobsRef.current = jobs
  }, [jobs])

  useEffect(() => {
    if (jobsRef.current) {
      const firstTwelveJobs = jobsRef.current.slice(0, viewedJobsLoadLimit)
      jobsRef.current = jobsRef.current.slice(
        viewedJobsLoadLimit,
        jobsRef.current.length
      )
      setViewedJobs(firstTwelveJobs)
    }
  }, [jobs])

  return (
    <div className="App">
      <h1>GitHub Jobs</h1>
      <h2>Showing "{viewedJobs && viewedJobs.length}" jobs</h2>
      {viewedJobs ? (
        viewedJobs.map((job) => <p>{job.company}</p>)
      ) : (
        <h3>Loading...</h3>
      )}
      <button onClick={loadMore}>Load more</button>
    </div>
  )
}
