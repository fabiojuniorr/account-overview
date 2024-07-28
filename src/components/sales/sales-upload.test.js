import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import SalesUpload from "./sales-upload";
import {mockSalesOverview} from "../../mock/dataset";

const mockOnSalesOverviewChange = jest.fn();

test(`should render component ${SalesUpload.name}`, () => {
  render(
      <SalesUpload
          salesOverview={mockSalesOverview}
          onSalesOverviewChange={mockOnSalesOverviewChange}
      />
  );

  expect(screen.getByTestId('upload-icon')).toBeInTheDocument();
  expect(screen.getByTestId('file-input')).toBeInTheDocument();
  expect(screen.getByText('Sales')).toBeInTheDocument();
});

test('should make upload file with success', async () => {
  render(
      <SalesUpload
          salesOverview={mockSalesOverview}
          onSalesOverviewChange={mockOnSalesOverviewChange}
      />
  );

  fireEvent.click(screen.getByTestId('upload-icon'));

  const file = new Blob(['Name,Value\nTest,123'], {type: 'text/csv'});
  fireEvent.change(screen.getByTestId('file-input'), {target: {files: [file]}});

  await waitFor(() => {
    expect(mockOnSalesOverviewChange).toHaveBeenCalled();
    expect(mockOnSalesOverviewChange).toHaveBeenCalledWith(
        expect.objectContaining({
          uploads: mockSalesOverview.uploads + 1,
          successfulUploads: mockSalesOverview.successfulUploads + 1,
          linesAttempted: mockSalesOverview.linesAttempted + 1,
          linesSaved: mockSalesOverview.linesSaved + 1,
          lastUploadDate: expect.any(Number),
        }));
  });
});