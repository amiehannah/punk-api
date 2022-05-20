import React from "react";
import Main from "./Main";
import {shallow} from 'enzyme';
import beerData from "../../data/beers";


describe("Main Tests", () => {
    let component;
    let testBeer;
  
    beforeEach(() => {
      testBeer = beerData[1]
      component = shallow(<Main beers={testBeer} />);
    })
    it("Should render", () => {
      expect(component).toBeTruthy();
    })
  })