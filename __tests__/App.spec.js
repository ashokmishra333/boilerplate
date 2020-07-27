import React from "react";
import renderer from "react-test-renderer";
import App from "../src/App";

describe("App comonent", () => {
  it("Snapshot Testing", () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
