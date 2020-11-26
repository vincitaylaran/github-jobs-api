import React from "react"
import { shallow } from "enzyme"
import { Filters } from "components/Filters"
import { FilterButton } from "components/FilterButton"

describe("<Filters />", () => {
  it("shows 3 input elements", () => {
    const wrapper = shallow(
      <Filters onSearch={() => console.log("Filter Button clicked")} />
    )
    expect(wrapper.find("input").length).toEqual(3)
  })

  it("shows the Filter Button component", () => {
    const wrapper = shallow(
      <Filters onSearch={() => console.log("Filter Button clicked")} />
    )
    expect(wrapper.find(FilterButton).length).toEqual(1)
  })
})
