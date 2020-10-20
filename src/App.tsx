import React from "react"
import "./App.css"
import { useGithubJobsApi } from "./useGithubJobsApi"

export default function App() {
  const jobs: any[] = useGithubJobsApi()

  return (
    <div className="App">
      <h1>GitHub Jobs</h1>
      <h2>Showing "{jobs && jobs.length}" jobs</h2>
      {jobs ? jobs.map((job) => <p>{job.company}</p>) : <h3>Loading...</h3>}
    </div>
  )
}
