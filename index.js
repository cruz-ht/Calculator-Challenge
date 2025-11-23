// this is to access the display input field
const display = document.getElementById("display");



// passing the character/symbol
function appendToDisplay(input){
    display.value += input;
}

// clearing the display, the "C" button
function clearDisplay(){
display.value = "";
}
// what calculates the result after "=" is pressed and a catch method for any potential errors
function calculate(){
    try{
        const result = eval(display.value);

        // catch for dividing by zero, displaying a message instead of "Infinity"
        if (result === Infinity || result === -Infinity) {
            display.value = "Cannot Divide !";
            return;
        }

        display.value = result;
    }
    catch(error){
        display.value = "ERROR";
    }
}


// making accessible through keyboard
document.addEventListener("keydown", function(keyboard){
    const key = keyboard.key;
    // selecting the symbol/button that matches the pressed key
    const button = document.querySelector(`button[data-key='${key}']`);
    // if there is a match, it'll let the them know what button/symbol to press/assign
    if(button) {
        button.click();
    }
});



