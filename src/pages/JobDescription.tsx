import React, { useState, useEffect, useContext, useCallback } from "react"
import { Props as IJob } from "../components/Job"
import parse from "html-react-parser"
import { ThemeContext } from "../hooks/useDarkTheme"
import {useGithubJobsApi} from '../hooks/useGithubJobsApi'
import {useParams} from 'react-router-dom'

interface Params {
  id:string
}

export const JobDescription: React.FC = () => {

  const theme = useContext(ThemeContext)
  const params = useParams<Params>()
  const {findJob, job} = useGithubJobsApi()
  console.log("JobDescription:React.FC -> theme", theme)

  const memoizedCallback = useCallback(() => {
    findJob(params.id)
  }, [findJob, params.id])

  useEffect(memoizedCallback, [])

  return (
    <div>
      <h1>{job ? job.company : "Loading..."}</h1>
      <div>{job ? parse(job.description) : "Loading..."}</div>
    </div>
  )
}
