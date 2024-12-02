import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, beforeEach, vi } from "vitest";
import BookingInfo from "./BookingInfo";
describe("Booking Details", () => {
let mockUpdateBookingDetails;
beforeEach(() => {
mockUpdateBookingDetails = vi.fn();
render(<BookingInfo updateBookingDetails={mockUpdateBookingDetails} />);
});
it('Render updateBookingDetails when date changes', () => {
const dateInput = screen.getByLabelText(/date/i);
fireEvent.change(dateInput, { target: { value: '2024-11-28' } });
});
});

