import React from "react"
import { shallow, ShallowWrapper } from "enzyme"

import { Home } from "pages/Home"
import { Jobs } from "components/Jobs"
import { Filters } from "components/Filters"
import { LoadButton } from "components/LoadButton"

let component: ShallowWrapper

beforeEach(() => {
  component = shallow(<Home />)
})

it("shows Filters", () => {
  expect(component.find(Filters).length).toEqual(1)
})

it("shows Jobs", () => {
  expect(component.find(Jobs).length).toEqual(1)
})

it("shows Load Button", () => {
  expect(component.find(LoadButton).length).toEqual(1)
})
