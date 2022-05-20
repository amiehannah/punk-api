import React from "react";
import NavBar from "./NavBar";
import SearchBar from "../SearchBar/SearchBar";
import FiltersList from "../FiltersList";
import { mount } from "enzyme";

describe("NavBar Tests", () => {
  let component;
  let searchText;
  let setSearchText;
  let beersWithHighABV;
  let setBeersWithHighABV;
  let beersBrewedBefore;
  let setBeersBrewedBefore;
  let acidicBeers;
  let setAcidicBeers;

  beforeEach(() => {
    component = mount(<NavBar />);
  });
  it("Should render", () => {
    expect(component).toBeTruthy();
  });

  it("Should be hidden by default", () => {
    const element = component.find(".nav");
    expect(element.hasClass("navHidden")).toBe(true);
  });

  it("Should render it's SearchBar child component", () => {
    expect(
      component.containsMatchingElement(
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      )
    ).toBeTruthy();
  });

  it("Should render it's FiltersList child component", () => {
    expect(
      component.containsMatchingElement(
        <FiltersList
          beersWithHighABV={beersWithHighABV}
          setBeersWithHighABV={setBeersWithHighABV}
          beersBrewedBefore={beersBrewedBefore}
          setBeersBrewedBefore={setBeersBrewedBefore}
          acidicBeers={acidicBeers}
          setAcidicBeers={setAcidicBeers}
        />
      )
    ).toBeTruthy();
  });

});
