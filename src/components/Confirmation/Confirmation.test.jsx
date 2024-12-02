import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Confirmation from "./Confirmation";

describe("Rendered Confirmation Section", () => {
  const mockSetConfirmation = vi.fn();
  const confirmationDetails = {
    active: true,
    when: "2024-10-28T08:30",
    people: 5,
    lanes: 3,
    id: "XXX000",
    price: 300,
  };
  beforeEach(() => {
    render(
      <Confirmation
        confirmationDetails={confirmationDetails}
        setConfirmation={mockSetConfirmation}
      />
    );
  });
it("Confirmation ", () => {
    const confirmationProps = {
      active: true,
      when: "2024-11-28T08:30",
      lanes: "2",
      people: "4",
      shoes: ["38", "40", "37", "45"],
      id: "XXX990",
      price: 5000,
    };
    render (
      <Confirmation
        confirmationDetails={confirmationProps}
        setConfirmation={() => {}}
      />
    );
    screen.debug();
    expect(screen.getByDisplayValue("2024-11-28 08:30")).toBeInTheDocument();
    expect(screen.getAllByDisplayValue("2")[0]).toBeInTheDocument();
    expect(screen.getByDisplayValue("XXX990")).toBeInTheDocument();
    expect(screen.getByText("5000 sek")).toBeInTheDocument();
  });
it(" Booking detail ", () => {
    expect(screen.getByLabelText(/when/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/who/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/lanes/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/booking number/i)).toBeInTheDocument();
    expect(screen.getByText(/total/i)).toBeInTheDocument();
  });
it(" Shows INGA BOOKING GJORD! When INGA Booning is active", () => {
    render(
        <Confirmation
        confirmationDetails={{...confirmationDetails, active: false }}
        setConfirmation={mockSetConfirmation}
        />
    )
    const element = screen.queryByText(/inga bokning gjord!/i);
    console.log(element);
    expect(element).toBeInTheDocument();
  });
it(" Render Confirmation and go back when SWEET, lETS GO! Button is pressed", () => {
    const backButton = screen.getByText(/sweet, let's go!/i);
    fireEvent.click(backButton);
    expect(mockSetConfirmation).toHaveBeenCalledWith({});
  });
});
