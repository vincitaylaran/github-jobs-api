import React, { useState } from "react"
import "./App.css"
import { useGithubJobsApi } from "./useGithubJobsApi"

export default function App() {
  const [pageNumber, setPageNumber] = useState(1)
  const [titleCompanyOrExpertise, setTitleCompanyOrExpertise] = useState<
    string
  >("")
  const [location, setLocation] = useState<string>("")
  const [isFullTimeOnly, setIsFullTimeOnly] = useState<boolean>(false)
  const jobs = useGithubJobsApi(pageNumber)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(`${titleCompanyOrExpertise}\n${location}\n${isFullTimeOnly}`)
  }

  return (
    <div className="App">
      <h1>GitHub Jobs</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Filter by title, companies, expertise..."
          style={{ width: 250 }}
          onChange={(e) => setTitleCompanyOrExpertise(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Filter by location..."
          style={{ width: 250 }}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        Full Time Only
        <input
          type="checkbox"
          checked={isFullTimeOnly}
          onClick={() => setIsFullTimeOnly(isFullTimeOnly ? false : true)}
        />
        <br />
        <button>Search</button>
      </form>
      <h2>Showing "{jobs && jobs.length}" jobs</h2>
      {jobs ? (
        jobs.map((job, index) => (
          <p>
            {index}: {job.company}
          </p>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
      <button onClick={() => setPageNumber(pageNumber + 1)}>Load more</button>
    </div>
  )
}
