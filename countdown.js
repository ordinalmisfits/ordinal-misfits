const thousandEl = document.querySelector("#thousandth");
const hundredEl = document.querySelector("#hundredth");
const tensEl = document.querySelector("#tenth");
const onesEl = document.querySelector("#ones");

MAX_COUNTER_LENGTH = 5000;
COUNTER_INCREMENT_INTERVAL = 1000;

const getPrevNum = (number) => {
  if (parseInt(number) <= 0) return 0;
  return parseInt(number) - 1;
};

async function fetchCountdownInfo() {
  // Make an API request to fetch the current date and time
  const response = await fetch("http://localhost:3000/countdown");
  const data = await response.json();

  // Start the countdown timer
  startCountdown(data.counter);
}

// Function to start the countdown timer
function startCountdown(startNumber) {
  let currentNumber = startNumber;
  // Display the initial countdown immediately
  updateCountdownDisplay(currentNumber);

  // Update the countdown every second
  const countdown = setInterval(function () {
    currentNumber++;
    if (currentNumber > MAX_COUNTER_LENGTH) {
      clearInterval(countdown);
      return;
    }

    updateCountdownDisplay(currentNumber);
  }, COUNTER_INCREMENT_INTERVAL);
}

// Function to update the countdown display
function updateCountdownDisplay(currentNumber) {
  const numberString = currentNumber.toString().padStart(4, "0");

  onesEl.innerHTML =
    '<p class="number move-number-out">' +
    getPrevNum(numberString.charAt(3)) +
    "</p>" +
    '<p class="number">' +
    numberString.charAt(3) +
    "</p>";

  if (currentNumber % 10 === 0) {
    tensEl.innerHTML =
      '<p class="number move-number-out">' +
      getPrevNum(numberString.charAt(2)) +
      "</p>" +
      '<p class="number">' +
      numberString.charAt(2) +
      "</p>";
  } else {
    tensEl.innerHTML = '<p class="number">' + numberString.charAt(2) + "</p>";
  }

  if (currentNumber % 100 === 0) {
    hundredEl.innerHTML =
      '<p class="number move-number-out">' +
      getPrevNum(numberString.charAt(1)) +
      "</p>" +
      '<p class="number">' +
      numberString.charAt(1) +
      "</p>";
  } else {
    hundredEl.innerHTML =
      '<p class="number">' + numberString.charAt(1) + "</p>";
  }

  if (currentNumber % 1000 === 0) {
    thousandEl.innerHTML =
      '<p class="number move-number-out">' +
      getPrevNum(numberString.charAt(0)) +
      "</p>" +
      '<p class="number">' +
      numberString.charAt(0) +
      "</p>";
  } else {
    thousandEl.innerHTML =
      '<p class="number">' + numberString.charAt(0) + "</p>";
  }
}

// Fetch the current date and time from the API when the page loads
fetchCountdownInfo();
