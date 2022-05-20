import React from "react";
import FeedbackPanel from "./FeedbackPanel";
import {shallow} from 'enzyme';

describe("Feedback Panel Tests", () => {
    let component;
  
    beforeEach(() => {
      component = shallow(<FeedbackPanel />);
    })
    it("Should render", () => {
      expect(component).toBeTruthy();
    })
  })