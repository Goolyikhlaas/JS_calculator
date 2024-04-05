let display = document.getElementById('display');

// Appends the clicked value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clears the display
function clearDisplay() {
    display.value = '';
}

// Calculates the expression and updates the display
function calculate() {
    try {
        display.value = eval(display.value); // Evaluates the expression
    } catch (error) {
        display.value = 'Error'; // Displays error if the expression is invalid
    }
}
