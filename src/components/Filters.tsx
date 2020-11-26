import React, { useState } from "react"
import { FilterButton } from "./FilterButton"

interface Props {
  onSearch: (
    description?: string,
    location?: string,
    isFullTimeOnly?: boolean
  ) => void
}

interface Query {
  description?: string
  location?: string
  isFullTimeOnly?: string | boolean
  pageNumber?: number
}

export const Filters: React.FC<Props> = ({ onSearch }) => {
  const [description, setDescription] = useState<string>()
  const [location, setLocation] = useState<string>()
  const [isFullTimeOnly, setIsFullTimeOnly] = useState<boolean>()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSearch(description, location, isFullTimeOnly)
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Filter by title, companies, expertise..."
        style={{ width: 250 }}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Filter by location..."
        style={{ width: 250 }}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <br />
      Full Time Only
      <input
        type="checkbox"
        checked={isFullTimeOnly}
        onClick={() => setIsFullTimeOnly(isFullTimeOnly ? false : true)}
      />
      <br />
      <FilterButton />
    </form>
  )
}
