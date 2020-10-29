import React from "react"
import { useHistory } from "react-router-dom"

export interface Props {
  company: string
  company_logo: string
  company_url: string
  created_at: string
  description: string
  how_to_apply: string
  id: string
  location: string
  title: string
  type: string
  url: string
}

export const Job: React.FC<Props> = ({ ...job }) => {
  const { id, company, type, location } = job
  const history = useHistory()

  return (
    <p
      key={id}
      style={{ border: "1px solid", cursor: "pointer" }}
      onClick={() => {
        history.push(`/job/${id}`)
      }}
    >
      {company} <br />
      type: {type} <br />
      location: {location}
    </p>
  )
}
