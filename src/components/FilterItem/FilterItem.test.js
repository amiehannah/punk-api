import React from "react";
import FilterItem from "./FilterItem";
import { shallow } from "enzyme";

describe("FilterItem Tests", () => {
  let component;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(
      <FilterItem
        setBeersWithHighABV={mockFn}
        setBeersBrewedBefore={mockFn}
        setAcidicBeers={mockFn}
      />
    );
    // console.log(component.debug())
  });
  it("Should render", () => {
    expect(component).toBeTruthy();
  });

  it("should call the parent function on the click event at the highABV filter checkbox", () => {
    component.find("#highABV").simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });

  it("should call the parent function on the click event at the classic filter checkbox", () => {
    component.find("#classicRange").simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });

  it("should call the parent function on the click event at the acidic filter checkbox", () => {
    component.find("#acidic").simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
