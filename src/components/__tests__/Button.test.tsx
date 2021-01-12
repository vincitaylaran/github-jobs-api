import React from "react"
import Button from "components/Button"
import { mount, shallow, ShallowWrapper, ReactWrapper } from "enzyme"

describe("the button", () => {
  let component: ShallowWrapper

  beforeEach(() => {
    component = shallow(<Button onClick={jest.fn()} />)
  })

  it("has a button element", () => {
    expect(component.find("button").length).toEqual(1)
  })
})

describe("the Load Button", () => {
  let component: ReactWrapper

  beforeEach(() => {
    component = mount(<Button onClick={jest.fn()} />)
  })

  afterEach(() => {
    component.unmount()
  })

  it("should disable on click", () => {
    /**
     * find the button
     * simulate a click event
     * expect the "disabled" attribute to be true
     */
    // TODO: create a test that checks if the button is disabled on click
  })

  // TODO: write a test which uses a mock API call
})
