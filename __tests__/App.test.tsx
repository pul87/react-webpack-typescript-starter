import * as React from "react";
import * as ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "../src/components/App";

describe('App', () => {
    it('App has class .app', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.hasClass("app")).toBeTruthy();
    });
} );

