import {render, screen} from "@testing-library/react";
import Contact from "./contact";
import {mockSupportContact} from "../../mock/dataset";

test(`should be render conponent ${Contact.name}`, () => {
  render(<Contact contact={mockSupportContact} />);

  expect(screen.getByText('Your feefo support contact')).toBeInTheDocument();
});

test('should displays the first letter of the contact name', () => {
  render(<Contact contact={mockSupportContact} />);

  const firstLetter = mockSupportContact.name.charAt(0);
  expect(screen.getByText(firstLetter)).toBeInTheDocument();
});

test('should not render if contact is missing', () => {
  render(<Contact contact={{}} />);

  expect(screen.queryByText(mockSupportContact.name)).toBeNull();
  expect(screen.queryByText(mockSupportContact.email)).toBeNull();
  expect(screen.queryByText(mockSupportContact.phone)).toBeNull();

  expect(screen.getByText('Your feefo support contact')).toBeInTheDocument();
});
