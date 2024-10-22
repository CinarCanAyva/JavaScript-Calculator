// CALCULATOR JS

const display = document.getElementById("display");

// for apped numbers to display
function appendToDisplay(input) {
    display.value += input;
}

// for clear the display
function clearDisplay() {
    display.value = "";
}

// for delete last character
function deleteLastChar() {
    display.value = display.value.slice(0, -1)
}

// I use eval which is a built-in function to calculate
function calculate() {
    // and we add a try catch method for errors like if two operators appear next to each other, etc.
    // we try our code in here
    try{
        display.value = eval(display.value);
    }
    // and if we catch a error, this code will run
    catch(error) {
        display.value = "Error";
    }
}