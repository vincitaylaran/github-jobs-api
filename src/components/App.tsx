import React, { useEffect } from "react"
import { Home } from "pages/Home"
import { JobDescription } from "pages/JobDescription"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { useDarkTheme } from "hooks/useDarkTheme"

import ThemeButton from "components/ThemeButton"
import "styles/App.scss"

export default function App() {
  // const { theme, toggleTheme } = useDarkTheme()

  useEffect(() => {
    localStorage.setItem("theme", "dark")
    return () => localStorage.removeItem("theme")
  })

  return (
    <Router>
      <ThemeButton />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/job/:id">
          <JobDescription />
        </Route>
      </Switch>
    </Router>
  )
}
