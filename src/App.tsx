import React from "react"
import "./App.css"
import { Home } from "./pages/Home"
import { JobDescription } from "./pages/JobDescription"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { useGithubJobsApi } from "./useGithubJobsApi"

// TODO: remove 'job' from local storage when user exits app.

export default function App() {
  const { jobs, loadMore, findJobs, isLoading } = useGithubJobsApi()

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            jobs={jobs}
            loadMore={loadMore}
            findJobs={findJobs}
            isLoading={isLoading}
          />
        </Route>
        <Route exact path="/job/:id">
          <JobDescription />
        </Route>
      </Switch>
    </Router>
  )
}
