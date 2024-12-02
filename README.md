# Testing Project (Vitest, Jest, React)
## User Story 1: Reserve a date, time, and number of players
As a user, I want to select a date and time and specify the number of players so that I can reserve one or more lanes at the bowling alley.

Acceptance Criteria:
Booking Form:

The user should see a booking form displayed on the booking page.
The form must include the following fields:
Date and time.
Number of players.
Number of lanes.
The form should include a "Book" button.
Booking Process:

If the user fills out the form correctly and clicks "Book," the booking should be saved.
After the booking is completed, the user should receive a confirmation with the booking details.

## User Story 2: Specify shoe sizes for each player
As a user, I want to select a shoe size for each player to ensure that everyone gets shoes that fit properly.

Acceptance Criteria:
Shoe Size Selection:

The user must be able to choose a shoe size for each player through an input field.
Each input field should have a default option, such as "Select shoe size," pre-selected.

User Story 3: Remove a shoe size field
As a user, I want to remove a shoe size field if I’ve accidentally added one too many, so I can avoid unnecessary bookings.

Acceptance Criteria:
Removing a Shoe Size Field:

Each shoe size field should have a "Remove" button beside it.
When the user clicks "Remove," the corresponding field should be deleted, and the total number of players should update accurately.

## User Story 4: Submit reservation and receive booking number and total price
As a user, I want to submit my reservation and receive a booking number and total price so that I know how much I need to pay (120 SEK per person + 100 SEK per lane).

Acceptance Criteria:
Submitting the Reservation:

The user should be able to submit their reservation by clicking a "strIIIIKE" button.
After submission, the user should receive a confirmation containing:
A unique booking number.
The total price of the reservation.
Price Calculation:

The total price should be calculated as follows:
120 SEK per player.
100 SEK per lane.

## User Story 5: Navigate back to the booking page after confirmation
As a user, I want to return to the booking view after I’ve received my confirmation so that I can make additional bookings or adjustments if needed.

Acceptance Criteria:
Navigation:

Once the booking is confirmed, there should be a button allowing the user to return to the booking page.
Clicking this button should redirect the user back to the booking view.
