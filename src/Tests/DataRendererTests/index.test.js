import React from "react";
import ReactDOM from "react-dom";
import DataRenderer from "../../components/DataRenderer";
import renderer from "react-test-renderer";

it("filter component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DataRenderer />, div);
});

it("matches snapshot", () => {
  const filterTree = renderer.create(<DataRenderer />).toJSON();
  expect(filterTree).toMatchSnapshot();
});
