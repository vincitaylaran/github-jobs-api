import React from "react"
import { shallow } from "enzyme"

import { Home } from "pages/Home"
import { Jobs } from "components/Jobs"
import { Filters } from "components/Filters"
import { LoadButton } from "components/LoadButton"

describe("<Home />", () => {
  it("shows Filters", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find(Filters).length).toEqual(1)
  })

  it("shows Jobs", () => {
    const wrapped = shallow(<Home />)
    expect(wrapped.find(Jobs).length).toEqual(1)
  })

  it("shows Load Button", () => {
    const wrapped = shallow(<Home />)
    expect(wrapped.find(LoadButton).length).toEqual(1)
  })
})
