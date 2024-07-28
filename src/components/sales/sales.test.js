import {render, screen} from "@testing-library/react";
import Sales from "./sales";
import {mockSalesOverview} from "../../mock/dataset";

const mockOnSalesOverviewChange = jest.fn();

test(`should render component ${Sales.name}`, () => {
  render(
      <Sales
          salesOverview={mockSalesOverview}
          onSalesOverviewChange={mockOnSalesOverviewChange}
      />
  );

  expect(screen.getByTestId('sales-upload')).toBeInTheDocument();
  expect(screen.getByTestId('sales-upload-details')).toBeInTheDocument();
});