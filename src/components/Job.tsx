import React from "react"
import { useHistory } from "react-router-dom"
import "styles/Job.scss"

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
  const { id, company, type, location, created_at, title } = job
  const history = useHistory()

  return (
    <div
      key={id}
      className="job"
      onClick={() => {
        history.push(`/job/${id}`)
      }}
    >
      <div>IMAGE HERE</div>
      <div style={{ backgroundColor: "violet" }}>
        <span>{created_at}</span>
        <span>{type}</span>
      </div>
      <div style={{ backgroundColor: "brown" }}>{title}</div>
      <div style={{ backgroundColor: "orange" }}>{company}</div>
      <div style={{ backgroundColor: "salmon" }}>{location}</div>
    </div>
  )
}
