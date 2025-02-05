// Function to append clicked button value to display
function appendToDisplay(value) {
    document.querySelector('.display').value += value;
}

// Function to calculate result when "=" is clicked
function calculateResult() {
    try {
        document.querySelector('.display').value = eval(document.querySelector('.display').value);
    } catch (error) {
        document.querySelector('.display').value = "Error";
    }
}

// Function to clear display when "C" is clicked
function clearDisplay() {
    document.querySelector('.display').value = "";
}