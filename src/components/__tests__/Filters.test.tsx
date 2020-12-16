import React from "react"
import { shallow, mount, ShallowWrapper, ReactWrapper } from "enzyme"
import { Filters } from "components/Filters"
import SearchButton from "components/Button"

describe("<Filter />", () => {
  let component: ShallowWrapper

  beforeEach(() => {
    component = shallow(<Filters onSearch={jest.fn()} />)
  })

  it("has a form", () => {
    expect(component.find("form").length).toEqual(1)
  })

  it("shows 3 input elements", () => {
    expect(component.find("input").length).toEqual(3)
  })

  it("shows the Filter Button component", () => {
    expect(component.find(SearchButton).length).toEqual(1)
  })
})

describe("the form", () => {
  let component: ReactWrapper

  beforeEach(() => {
    component = mount(<Filters onSearch={jest.fn()} />)
  })

  afterEach(() => {
    component.unmount()
  })

  it("has a text input where users can type the job title ", () => {
    const element = "input#job-title"
    expect(component.find(element).length).toEqual(1)

    component
      .find(element)
      .simulate("change", { target: { value: "A Job Title" } })

    component.update()

    expect(component.find(element).prop("value")).toEqual("A Job Title")
  })

  it("has a text input where users can type the job location", () => {
    const element = "input#job-location"
    expect(component.find(element).length).toEqual(1)

    component
      .find(element)
      .simulate("change", { target: { value: "A Job Location" } })

    component.update()

    expect(component.find(element).prop("value")).toEqual("A Job Location")
  })

  it("has a checkbox where users can click to find jobs that are full time only", () => {
    const element = 'input[type="checkbox"]'

    expect(component.find(element).length).toEqual(1)
  })
})
