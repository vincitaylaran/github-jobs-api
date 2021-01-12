import React from "react"
import App from "components/App"
import ThemeButton from "components/ThemeButton"
import { shallow, ShallowWrapper } from "enzyme"

let component: ShallowWrapper

beforeEach(() => {
  component = shallow(<App />)
})

it("shows the theme button", () => {
  expect(component.find(ThemeButton).length).toEqual(1)
})
