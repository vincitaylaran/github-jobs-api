import React from "react"
import { Filters } from "../components/Filters"
import { LoadButton } from "../components/LoadButton"
import { Jobs } from "../components/Jobs"
import { Job, Props as IJob } from "../components/Job"
import { useGithubJobsApi } from "../useGithubJobsApi"

interface Props {}

export const Home = (props: Props) => {
  const { jobs, fetchData, loadMore, isLoading } = useGithubJobsApi()

  return (
    <div className="App">
      <h1>GitHub Jobs</h1>
      <Filters onSearch={fetchData} />
      <LoadButton onClick={loadMore}>Load more</LoadButton>
      <h2>Showing "{jobs && jobs.length}" jobs</h2>
      <Jobs>
        {jobs.map((job: IJob) => (
          <Job {...job} />
        ))}
      </Jobs>
      <LoadButton onClick={loadMore}>Load more</LoadButton>
    </div>
  )
}
