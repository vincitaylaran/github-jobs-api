import React from "react"
import "./App.css"
import { Home } from "./pages/Home"
import { JobDescription } from "./pages/JobDescription"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { useGithubJobsApi } from "./hooks/useGithubJobsApi"
import { ThemeContext, useDarkTheme } from "./hooks/useDarkTheme"

import { ThemeButton } from "./components/ThemeButton"

// TODO: remove 'job' from local storage when user exits app.

export default function App() {
  const { jobs, loadMore, findJobs, isLoading } = useGithubJobsApi()
  const { theme, switchTheme } = useDarkTheme()

  return (
    <Router>
      <ThemeButton onClick={switchTheme} />
      <Switch>
        <ThemeContext.Provider value={theme}>
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
        </ThemeContext.Provider>
      </Switch>
    </Router>
  )
}
