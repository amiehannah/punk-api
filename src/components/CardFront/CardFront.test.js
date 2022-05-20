import React from "react";
import CardFront from "./CardFront";
import { shallow } from "enzyme";
import beerData from "../../data/beers";

describe("CardFront Tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beerData[0];
    component = shallow(<CardFront beer={testBeer} />);
  });

  it("Should render an the correct image passed in as props", () => {
    const beerImg = testBeer.image_url;
    expect(component.find("img").prop("src")).toBe(beerImg);
  });

  it("Should render the correct name based on the beer passed in as props", () => {
    const beerName = testBeer.name;
    expect(component.text()).toContain(beerName);
  });

  it("Should display the correct abv value for each beer", () => {
    const beerABV = testBeer.abv;
    expect(component.text()).toContain(beerABV);
  });
});
