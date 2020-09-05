import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import FilterComponent from "../../components/filterComponent";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("filter component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FilterComponent></FilterComponent>, div);
});

it("renders all headers correctly", () => {
  const { getByText } = render(<FilterComponent />);
  const FilterText = getByText(/Filter/);
  const launchHeader = getByText(/Successful Launch/);
  const landHeader = getByText(/Successful Land/);
  expect(FilterText).toBeInTheDocument();
  expect(launchHeader).toBeInTheDocument();
  expect(landHeader).toBeInTheDocument();
});

it("matches snapshot", () => {
  const filterTree = renderer.create(<FilterComponent />).toJSON();
  expect(filterTree).toMatchSnapshot();
});
