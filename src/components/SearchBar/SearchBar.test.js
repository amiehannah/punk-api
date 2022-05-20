import React from "react";
import SearchBar from "./SearchBar";
import { shallow } from "enzyme";

describe("SearchBar Tests", () => {
  let component;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<SearchBar setSearchText={mockFn} />);
  });

  it("Should render", () => {
    expect(component).toBeTruthy();
  });

  it("should call the parent function on change in the input box", () => {
    component
      .find(".inputBar")
      .simulate("change", { target: { value: "User input" } });
    expect(mockFn).toHaveBeenCalled();
  });

  it("should call the parent function with user input", () => {
    component
      .find(".inputBar")
      .simulate("change", { target: { value: "Test Input Value" } });
    expect(mockFn).toHaveBeenCalledWith("Test Input Value");
  });
});
