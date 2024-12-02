# Testing Project (Vitest, Jest, React)
## User Story 1: Book a date, time, and number of players
As a Player, I want to select a date and time and specify the number of players so that I can reserve one or more lanes at the bowling alley.

### Acceptance Criteria:

#### Booking Form:

The user should see a booking form displayed on the booking page.
The form must include the following fields:
Date and time.
Number of players.
Number of lanes.
The form should include a "Book" button.

#### Booking Process:

If the user fills out the form correctly and clicks "Book," the booking should be saved.
After the booking is completed, the user should receive a confirmation with the booking details.

## User Story 2: Remove a shoe size field
As a player, I want to remove a shoe size field if I’ve accidentally added one too many, so I can avoid unnecessary bookings.

### Acceptance Criteria:

#### Removing a Shoe Size Field:

Each shoe size field should have a "Remove" button beside it.
When the user clicks "Remove," the corresponding field should be deleted, and the total number of players should update accurately.

## User Story 3: State the shoe sizes for each player
As a participant, I want to select a shoe size for each player to ensure that everyone gets shoes that fit properly.

### Acceptance Criteria:

#### Shoe Size Selection:

The user must be able to choose a shoe size for each player through an input field.
Each input field should have a default option, such as "Select shoe size," pre-selected.


## User Story 4: Confirm the reservation and get a booking number along with the total charge
As a player, I want to finalize my reservation and receive a booking number along with the total cost so that I know the amount I need to pay (120 SEK per person + 100 SEK per lane).

### Acceptance Criteria:

#### Submitting the Reservation:

The user should be able to complete their reservation by clicking a "strIIIIKE" button.
Upon submission, the user should receive a confirmation that includes:
A unique booking number.
The total cost of the reservation.

#### Price Calculation:

The total cost should be calculated as follows:
120 SEK per player.
100 SEK per lane.

## User Story 5: Return to the booking page after receiving confirmation
As an end-user, I want to go back to the booking page after receiving my confirmation so that I can make additional reservations or modifications if necessary.

### Acceptance Criteria:

#### Navigation:

After the booking is confirmed, a button should be available for the user to navigate back to the booking page.
Clicking the button should redirect the user to the booking view.
