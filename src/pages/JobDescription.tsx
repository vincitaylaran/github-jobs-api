import React, { useEffect, useCallback } from "react"
import parse from "html-react-parser"
import { useGithubJobsApi } from "hooks/useGithubJobsApi"
import { useParams } from "react-router-dom"

interface Props {
  theme?: string
}

interface Params {
  id: string
}

export const JobDescription: React.FC<Props> = ({ theme }) => {
  const params = useParams<Params>()
  const { findJob, job, isLoading } = useGithubJobsApi()

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
