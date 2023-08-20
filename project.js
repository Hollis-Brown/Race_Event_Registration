// This line of code declares a variable raceNumber and initializes and assigns Math.floor, Math.random multiplied by the value 1000. Math.random method produces a number between 0-1 and when multiplied by 1000 it simply increases the randomized numerical span, then the Math.floor method rounds down the resulting value.
let raceNumber = Math.floor(Math.random() * 1000);

// Gets references to the input fields
const runnerAgeInput = document.getElementById("runner-age");
const earlyRegistrationInput = document.getElementById("early-registration");

// Gets the reference to the output display field.
const raceDetailsDiv = document.getElementById("race-details");

// Listens for form submission
document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Gets input values
    let runnerAge = parseInt(runnerAgeInput.value);
    let earlyRegistration = earlyRegistrationInput.checked;

    // Updates race number if conditions are met
    if (runnerAge > 18 && earlyRegistration) {
      raceNumber += 1000;
    }

    // Uses a control flow to determine race details based on age and registration status.
    if (runnerAge > 18 && earlyRegistration) {
      // Displays race information for adults who registered early.
      raceDetailsDiv.textContent =
        "You will race at 9:30am with race number: " + raceNumber;
    } else if (runnerAge > 18 && !earlyRegistration) {
      // Displays race information for late-registered adults.
      raceDetailsDiv.textContent =
        "Late adults run at 11:00 am with race number: " + raceNumber;
    } else if (runnerAge <= 18) {
      // Displays race information for youth registrants.
      raceDetailsDiv.textContent =
        "Youth registrants run at 12:30 pm (regardless of registration)";
    }
  });

/*This code simulates a race event registration system. It generates a random race number, assigns a boolean value to earlyRegistration, and sets the runner's runnerAge. Then, it uses a series of conditional statements to determine the race details based on the runner's age and registration status. If the runner is an adult and registered early, 1000 is added to the race number. The control flow branches to display different race information messages based on the conditions met by the runner's age and registration status. The comments provide technical explanations for each step of the code.*/
