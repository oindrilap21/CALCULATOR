// Function to clear the display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Function to append a number to the display
function appendNumber(number) {
  document.getElementById("display").value += number;
}

// Function to append an operator to the display
function appendOperator(operator) {
  document.getElementById("display").value += operator;
}

// Function to perform the calculation
function calculate() {
  const displayValue = document.getElementById("display").value;

  try {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
