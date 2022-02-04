// pull these from testing library
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Checkbox } from "./Checkbox";

test("Selecting checkbox", () => {
  // select our checkbox
  const { getByLabelText } = render(<Checkbox />);
  // select because it says not checked when the app first renders
  const checkbox = screen.getByLabelText(/not checked/);

  // handle clicking on the checkbox to make sure the value changes
  fireEvent.click(checkbox);
  // expect value of checkbox.checked to be true after its been clicked
  expect(checkbox.checked).toEqual(true);
});
