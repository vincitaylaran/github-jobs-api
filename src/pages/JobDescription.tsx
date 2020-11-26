import React, { useEffect, useContext, useCallback } from "react"
import parse from "html-react-parser"
import { ThemeContext } from "App"
import { useGithubJobsApi } from "hooks/useGithubJobsApi"
import { useParams } from "react-router-dom"

interface Params {
  id: string
}

export const JobDescription: React.FC = () => {
  const theme = useContext(ThemeContext)
  const params = useParams<Params>()
  const { findJob, job, isLoading } = useGithubJobsApi()
  console.log("JobDescription:React.FC -> theme", theme)

  const memoizedCallback = useCallback(() => {
    findJob(params.id)
  }, [findJob, params.id])

  useEffect(memoizedCallback, [])

  return (
    <div>
      {!isLoading && job ? (
        <>
          <h1>{job.company}</h1>{" "}
          <div
            style={{
              backgroundColor: theme === "dark" ? "#121721" : "#ffffff",
            }}
          >
            {parse(job.description)}
          </div>{" "}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}
