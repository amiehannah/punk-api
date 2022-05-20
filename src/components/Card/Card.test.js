import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";
import beerData from "../../data/beers";

describe("Card Tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beerData[0];
    // console.log(testBeer);
    component = shallow(<Card beer={testBeer} />);
  });

  it("Should render", () => {
    expect(component).toBeTruthy();
  });

  it("Should not have faceDown class by default", () => {
    const element = component.find(".mainCard");
    expect(element.hasClass("faceDown")).toBe(false);
  });
  
  it("Should toggle faceDown class when Card component is clicked", () => {
    expect(component.find(".mainCard").hasClass("faceDown")).toBe(false);
    component.find(".mainCard").simulate("click");
    expect(component.find(".mainCard").hasClass("faceDown")).toBe(true);
    component.find(".mainCard").simulate("click");
    expect(component.find(".mainCard").hasClass("faceDown")).toBe(false);
  });
});
