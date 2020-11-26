import React, { useContext } from "react"
import { Filters } from "../components/Filters"
import { LoadButton } from "../components/LoadButton"
import { Jobs } from "../components/Jobs"
import { Job, Props as IJob } from "../components/Job"
import { ThemeContext } from "../App"
import { useGithubJobsApi } from "../hooks/useGithubJobsApi"

export const Home = () => {
  const theme = useContext(ThemeContext)
  const { findJobs, loadMore, isLoading, jobs } = useGithubJobsApi()
  console.log("theme", theme)

  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "dark" ? "#121721" : "#ffffff" }}
    >
      <h1>GitHub Jobs</h1>
      <Filters onSearch={findJobs} />
      <LoadButton onClick={loadMore} isLoading={isLoading}>
        Load more
      </LoadButton>
      <h2>Showing "{jobs && jobs.length}" jobs</h2>
      <Jobs>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          jobs.map((job: IJob) => <Job {...job} />)
        )}
      </Jobs>
      <LoadButton onClick={loadMore} isLoading={isLoading}>
        Load more
      </LoadButton>
    </div>
  )
}
