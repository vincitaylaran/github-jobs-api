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

describe("the load button", () => {
  let component: ReactWrapper

  beforeEach(() => {
    component = mount(<Button onClick={jest.fn()} />)
  })

  afterEach(() => {
    component.unmount()
  })

  // TODO: write a test which uses a mock API call
})
