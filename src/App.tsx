import React from "react"
import "./App.css"
import { useGithubJobsApi } from "./useGithubJobsApi"
import { Filters } from "./components/Filters"
import { LoadButton } from "./components/LoadButton"
import { Jobs } from "./components/Jobs"
import { Job } from "./components/Job"

export default function App() {
  const { jobs, fetchData, loadMore, isLoading } = useGithubJobsApi()

  return (
    <div className="App">
      <h1>GitHub Jobs</h1>
      <Filters onSearch={fetchData} />
      <LoadButton onClick={loadMore}>Load more</LoadButton>
      <h2>Showing "{jobs && jobs.length}" jobs</h2>
      <Jobs>
        {jobs.map((job) => (
          <Job {...job} />
        ))}
      </Jobs>
      <LoadButton onClick={loadMore}>Load more</LoadButton>
    </div>
  )
}
