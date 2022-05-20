import React from "react";
import Header from "./Header";
import { mount } from "enzyme";

describe("Feedback Panel Tests", () => {
  let component;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = mount(<Header setIsNavBar={mockFn} />);
  });
  it("Should render", () => {
    expect(component).toBeTruthy();
  });
  it("Should render an img logo", () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find("img").prop("src")).toEqual(
      "Brewdog-Logo-Background-PNG-Image-1.png"
    );
  });
  it("should call the parent function on clicking the button component", () => {
    component.find(".button").simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
