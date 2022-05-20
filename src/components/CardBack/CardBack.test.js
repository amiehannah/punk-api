import React from "react";
import CardBack from "./CardBack";
import { shallow } from "enzyme";
import beerData from "../../data/beers";

describe("CardBack Panel Tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beerData[0];
    // console.log(testBeer);
    component = shallow(<CardBack beer={testBeer} />);
  });
  it("Should render the correct description based on the beer passed in as props", () => {
    const beerDescription = testBeer.description;
    expect(component.text()).toContain(beerDescription);
  });
  it("Should render the correct array of food pairings for each beer passed in as props", () => {
    const beerFoodPairings = testBeer.food_pairing;
    const element = component.find(".food");
    // console.log(beerFoodPairings[1]);
    expect(element.text()).toContain(beerFoodPairings[1]);
  });
});
