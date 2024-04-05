let display = document.getElementById('display');

// Appends the clicked value to the display
function appendToDisplay(value) {
    display.value += value;
    adjustFontSize(); // Adjust the font size of the display
}

// Clears the display
function clearDisplay() {
    display.value = '';
    adjustFontSize(); // Reset the font size of the display
}

// Calculates the expression and updates the display
function calculate() {
    try {
        display.value = eval(display.value); // Evaluates the expression
        adjustFontSize(); // Adjust the font size of the display
    } catch (error) {
        display.value = 'Error'; // Displays error if the expression is invalid
    }
}

// Adjusts the font size of the display based on the input length
function adjustFontSize() {
    if (display.value.length > 10) {
        display.style.fontSize = '3rem'; // Reduce font size for long inputs
    } else {
        display.style.fontSize = '5rem'; // Reset to original font size
    }
}
