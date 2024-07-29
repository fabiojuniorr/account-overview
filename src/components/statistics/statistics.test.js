import {render, screen} from "@testing-library/react";
import Statistics from "./statistics";
import {mockSalesOverview} from "../../mock/dataset";

test(`should render component ${Statistics.name}`, () => {
  render(<Statistics salesOverview={mockSalesOverview} />);

  expect(screen.getByTestId('statistics')).toBeTruthy();
});

test(`should render data with statistics metrics file uploaded`, () => {
  render(<Statistics salesOverview={mockSalesOverview} />);

  expect(screen.getByTestId('Upload success')).toHaveTextContent('80.0%');
  expect(screen.getByTestId('Lines saved')).toHaveTextContent('80.0%');
});
