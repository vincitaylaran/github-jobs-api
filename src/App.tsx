import React from "react"
import "./App.css"
import { Home } from "./pages/Home"
import { JobDescription } from "./pages/JobDescription"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default function App() {
  return (
    <Router>
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
