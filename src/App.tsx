import React from "react"
import "./App.css"

// TODO: fix Prettier extension

export default function App() {
  const [allJobs, setAllJobs] = React.useState<any[]>()
  const [viewedJobs, setViewedJobs] = React.useState<any[]>()
  const viewedJobsCountLimit = 12

  React.useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
      )
      console.log("fetching...")
      const response = await request.json()
      const data = response
      console.log("data -> ", data)
      if (!allJobs) {
        setAllJobs(data)
      }
    }
    fetchData()
  })

  React.useEffect(() => {
    if (allJobs) {
      const firstTwelveJobs: any[] = allJobs.slice(0, viewedJobsCountLimit)
      setViewedJobs(firstTwelveJobs)
    }
  }, [allJobs])

  return (
    <div className="App">
      <h1>GitHub Jobs</h1>
      <h2>Showing "{viewedJobs && viewedJobs.length}" jobs</h2>
      <h2>There are "{allJobs && allJobs.length}" jobs in total</h2>
      {allJobs && viewedJobs ? (
        viewedJobs.map(job => <p>{job.company}</p>)
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  )
}
