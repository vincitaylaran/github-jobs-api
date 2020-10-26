import React, { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGithubJobsApi } from "../useGithubJobsApi"
import { Props as IJob } from "../components/Job"

interface Params {
  id: string
  page: string
}

interface Props {
  jobs: IJob[]
}

export const JobDescription: React.FC<Props> = ({ jobs }) => {
  /**
     Since the API can't let me make a query based on job ID, I have make a call to the useGithubJobsApi hook
     from App and pass the jobs array down to this component. Not ideal, but it's the only solution I can think of 
     at the moment.
     */

  const params = useParams<Params>()
  const [job] = jobs.filter((job) => job.id === params.id)
  console.log("jobs", jobs)

  console.log("JobDescription -> params", params)

  return (
    <div>
      <h1>{jobs && job ? job.company : "Loading..."}</h1>
    </div>
  )
}
