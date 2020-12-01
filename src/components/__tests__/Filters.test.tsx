import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import { Filters } from "components/Filters"
import { FilterButton } from "components/FilterButton"

let component: ShallowWrapper

beforeEach(() => {
  component = shallow(<Filters onSearch={jest.fn()} />)
})

it("shows 3 input elements", () => {
  expect(component.find("input").length).toEqual(3)
})

it("shows the Filter Button component", () => {
  expect(component.find(FilterButton).length).toEqual(1)
})
