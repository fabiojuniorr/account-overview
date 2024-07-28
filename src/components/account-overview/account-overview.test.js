import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';
import {mockData} from "../../mock/dataset";

const mockOnSalesOverviewChange = jest.fn();

test(`should render component ${AccountOverview.name}`, () => {
  render(<AccountOverview data={mockData} onSalesOverviewChange={mockOnSalesOverviewChange} />);

  expect(screen.getByText('Account Overview')).toBeInTheDocument();
  expect(screen.getByText(mockData.supportContact.name)).toBeInTheDocument();
  expect(screen.getByText(mockData.supportContact.email)).toBeInTheDocument();
  expect(screen.getByText(mockData.supportContact.phone)).toBeInTheDocument();
});

