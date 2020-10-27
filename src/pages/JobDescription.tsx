import React, { useState, useEffect } from "react"
import { Props as IJob } from "../components/Job"
import parse from "html-react-parser"

export const JobDescription: React.FC = () => {
  /**
     Since the API can't let me make a query based on job ID, I have make a call to the useGithubJobsApi hook
     from App and pass the jobs array down to this component. Not ideal, but it's the only solution I can think of 
     at the moment.
     */

  const [job, setJob] = useState<IJob>()

  useEffect(() => {
    const jobInLocalStorage = localStorage.getItem("job")
    if (jobInLocalStorage) {
      setJob(JSON.parse(jobInLocalStorage))
    }
  }, [])

  return (
    <div>
      <h1>{job ? job.company : "Loading..."}</h1>
      <div>{job ? parse(job.description) : "Loading..."}</div>
    </div>
  )
}
