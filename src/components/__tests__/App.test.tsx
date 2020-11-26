import React from "react"
import { Home } from "../../pages/Home"
import { Jobs } from "../../components/Jobs"
import { shallow } from "enzyme"

it("shows jobs", () => {
  const wrapped = shallow(<Home />)

  expect(wrapped.find(Jobs).length).toEqual(1)
})
