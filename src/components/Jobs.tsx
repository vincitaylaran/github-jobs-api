import React from "react"

interface Props {
  children: React.ReactNode[]
}

export const Jobs: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}
