import React, { ReactNode } from "react"

interface Props {
  className: string
  id: string
  children: ReactNode
}

export function FilterContainer({ className, id, children }: Props) {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  )
}
