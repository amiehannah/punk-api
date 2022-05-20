import React from "react";
import App from "./App";
import { shallow } from "enzyme";


describe("App Tests", () => {
  let component;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<App />);
  });

  it("Should render", () => {
    expect(component).toBeTruthy();
  });
});
