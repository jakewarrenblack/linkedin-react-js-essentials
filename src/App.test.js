import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders a h1", () => {
  // this is called a query
  // react testing library looks at an element
  // and returns some info about it,
  // in this case the App
  const { getByText } = render(<App />);
  const h1 = getByText(/Hello react testing library/);
  expect(h1).toHaveTextContent("Hello react testing library");
});
