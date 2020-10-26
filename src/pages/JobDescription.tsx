import React from "react"
import { useParams } from "react-router-dom"
import { useGithubJobsApi } from "../useGithubJobsApi"

interface Params {
  id: string
}

export const JobDescription = () => {
  const params = useParams<Params>()
  const { jobs } = useGithubJobsApi()
  const [job] = jobs.filter((job) => job.id === params.id)
  console.log("JobDescription -> job", job)

  return (
    <div>
      <h1>{jobs && job ? job.company : "Loading..."}</h1>
    </div>
  )
}
