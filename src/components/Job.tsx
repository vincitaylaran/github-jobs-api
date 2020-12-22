import React from "react"
import { useHistory } from "react-router-dom"
import "styles/Job.scss"
import dayjs from "dayjs"

export interface Props {
  company: string
  company_logo: string | null
  company_url: string | null
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

  function getDifference(createdAt: string): string {
    const firstDate = dayjs(createdAt)
    const currentDate = dayjs()
    const differenceInMinutes = currentDate.diff(firstDate, "minute")
    const minutesInDay = 1440
    const minutesInWeek = 10080
    const minutesInMonth = 43800
    const minutesInYear = 525600

    if (differenceInMinutes < 60) {
      return `${differenceInMinutes}m`
    } else if (differenceInMinutes > 60 && differenceInMinutes < minutesInDay) {
      return `${currentDate.diff(firstDate, "hour")}h`
    } else if (
      differenceInMinutes > minutesInDay &&
      differenceInMinutes < minutesInWeek
    ) {
      return `${currentDate.diff(firstDate, "day")}d`
    } else if (
      differenceInMinutes > minutesInWeek &&
      differenceInMinutes < minutesInMonth
    ) {
      return `${currentDate.diff(firstDate, "week")}w`
    } else if (
      differenceInMinutes > minutesInMonth &&
      differenceInMinutes < minutesInYear
    ) {
      return `${currentDate.diff(firstDate, "month")}m`
    } else if (differenceInMinutes >= minutesInYear) {
      return `${currentDate.diff(firstDate, "year")}y`
    } else {
      return `${currentDate.diff(firstDate, "day")}d`
    }
  }

  return (
    <div
      key={id}
      className="job"
      onClick={() => {
        history.push(`/job/${id}`)
      }}
    >
      <span className="companyLogo ">{company[0]}</span>
      <div className="jobBody">
        <div className="jobDurationAndType">
          <span>{getDifference(created_at)} ago</span>
          <span style={{ margin: "0 10px" }}>•</span>
          <span>{type}</span>
        </div>
        <div className="jobTitle">{title}</div>
        <div className="jobCompany">{company}</div>
        {/* <div className="jobLocation padding-left-20">{location}</div> */}
        <div className="jobLocation">
          {location}
          {/* Columbus, OH */}
        </div>
      </div>
    </div>
  )
}
