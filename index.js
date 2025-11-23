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
    display.value = eval(display.value);
    }
    // in case of any error, what will be displayed to the user
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



