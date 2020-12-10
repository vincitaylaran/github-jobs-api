import React, { ReactNode } from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "reducers"

interface Props {
  children: ReactNode
}

const Root: React.FC<Props> = ({ children }) => {
  return <Provider store={createStore(reducers, {})}>{children}</Provider>
}

export default Root
