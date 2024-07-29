import {render, screen} from "@testing-library/react";
import SalesUploadDetails from "./sales-upload-details";
import {mockSalesOverview} from "../../mock/dataset";

test(`should render component ${SalesUploadDetails.name}`, () => {
  render(<SalesUploadDetails salesOverview={mockSalesOverview} />);

  expect(screen.getByTestId('sales-upload-details')).toBeTruthy();
});

test(`should render details about files uploaded`, () => {
  render(<SalesUploadDetails salesOverview={mockSalesOverview} />);

  expect(screen.getByText(`${mockSalesOverview.uploads} uploads`)).toBe("10 uploads");
});