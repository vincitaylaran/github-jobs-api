import React from "react"
import "./App.css"
import { Home } from "./pages/Home"
import { JobDescription } from "./pages/JobDescription"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { useGithubJobsApi } from "./useGithubJobsApi"

export default function App() {
  const { jobs, loadMore, findJobs } = useGithubJobsApi()

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home jobs={jobs} loadMore={loadMore} findJobs={findJobs} />
        </Route>
        <Route exact path="/job/:id">
          <JobDescription jobs={jobs} />
        </Route>
      </Switch>
    </Router>
  )
}
