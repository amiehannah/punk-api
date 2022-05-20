import React from "react";
import CardList from "./CardList";
import { shallow } from "enzyme";
import beerData from "../../data/beers";

describe("CardList Tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beerData[2];
    component = shallow(<CardList beer={testBeer} />);
    // console.log(component.debug())
  });
  it("Should render", () => {
    expect(component).toBeTruthy();
  });
});
