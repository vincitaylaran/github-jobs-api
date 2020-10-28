import React, { useContext } from "react"
import { Filters } from "../components/Filters"
import { LoadButton } from "../components/LoadButton"
import { Jobs } from "../components/Jobs"
import { Job, Props as IJob } from "../components/Job"
import { ThemeContext } from "../hooks/useDarkTheme"

interface Props {
  jobs: IJob[]
  isLoading: boolean
  loadMore: () => void
  findJobs: () => void
}

export const Home: React.FC<Props> = ({
  jobs,
  loadMore,
  findJobs,
  isLoading,
}) => {
  const theme = useContext(ThemeContext)
  console.log("theme", theme)

  return (
    <div className="App">
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
