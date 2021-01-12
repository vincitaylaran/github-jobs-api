import React from "react"
import FilterIcon from "components/FilterIcon"
import { FilterContainer } from "./FilterContainer"
import FilterInput from "./FilterInput"
import { CheckboxContainer } from "./CheckboxContainer"
import { useMediaQuery } from "@react-hook/media-query"
import "styles/Filters.scss"

export function Filters() {
  const matches = useMediaQuery("only screen and (min-width: 1400px)")

  const onSearch = (event: any) => {
    event.preventDefault()
    console.log("search clicked")
  }

  const filterByTitlePlaceholder = () => {
    return matches
      ? "Filter by title, companies, expertise..."
      : "Filter by title..."
  }

  return (
    <form className="filters">
      <FilterContainer className="filterContainer" id="jobTitle">
        <FilterInput
          className="filterByTitle"
          placeholder={filterByTitlePlaceholder()}
          iconName="search"
        />
      </FilterContainer>

      <FilterContainer className="filterContainer" id="jobLocation">
        <FilterInput
          className="filterByLocation"
          placeholder="Filter by location..."
          iconName="location"
        />
      </FilterContainer>

      <FilterContainer id="jobSearch" className="filterContainer">
        <CheckboxContainer />
        <FilterIcon />
        <button id="searchButton" className="button" onClick={onSearch}>
          <label className="fullTimeTxt">Search</label>
          <svg
            id="search"
            className="icon"
            width="22"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
              fill="#FFFFFF"
              fillRule="nonzero"
            />
          </svg>
        </button>
      </FilterContainer>
    </form>
  )
}
