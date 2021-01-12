import React from "react"
import { Filters } from "components/Filters"
import LoadButton from "components/Button"
import { Jobs } from "components/Jobs"
import { Job, Props as IJob } from "components/Job"
import { useGithubJobsApi } from "hooks/useGithubJobsApi"
import { sampleData } from "sample-data"

interface Props {
  theme?: string
}

export const Home: React.FC<Props> = ({ theme }) => {
  const { findJobs, loadMore, isLoading } = useGithubJobsApi()
  const jobs = sampleData

  return (
    <div
      className="App day"
      // style={{ backgroundColor: theme === "dark" ? "#121721" : "#ffffff" }}
    >
      <h1>GitHub Jobs</h1>
      <Filters />
      <h2>Showing "{jobs && jobs.length}" jobs</h2>
      <Jobs>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          jobs.map((job: IJob) => <Job key={job.id} {...job} />)
        )}
      </Jobs>
      <LoadButton onClick={loadMore}>Load more</LoadButton>
    </div>
  )
}
