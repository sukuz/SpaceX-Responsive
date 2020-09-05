import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("renders SpaceX title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/SpaceX Launch Programs/i);
  expect(linkElement).toBeInTheDocument();
});
