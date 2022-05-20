import React from "react";
import FiltersList from "./FiltersList";
import { mount } from "enzyme";
import FilterItem from "../FilterItem";

describe("Feedback Panel Tests", () => {
  let component;

  beforeEach(() => {
    component = mount(<FiltersList />);
    // console.log(component.debug())
  });
  it("Should render", () => {
    expect(component).toBeTruthy();
  });
it("Should render the FilterItem component inside of the parent component", () => {
    expect(component.find(FilterItem)).toBeTruthy();
})
});
