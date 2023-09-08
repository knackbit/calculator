const add = function(intOne, intTwo) {
    return intOne + intTwo;	
}
  
const subtract = function(intOne, intTwo) {
    return intOne - intTwo;	
}

const multiply = function(intOne, intTwo) {
    return intOne * intTwo;
}

const divide = function(intOne, intTwo) {
    return intOne / intTwo;
}

let operateObj = {
    numOne: 0, 
    numTwo: null,
    operator: null
}

let screenValue = 0;
document.getElementById("display").textContent = screenValue;

// function that takes in operateObj and calls the appropriate function to do the math based on operateObj.operator
const operate = function(equationObj) {
    const numA = equationObj.numOne;
    const numB = equationObj.numTwo;
    const operator = equationObj.operator;
    return operator === "+" ? add(numA, numB)
        : operator === "-" ? subtract(numA, numB)
        : operator === "/" ? divide(numA, numB)
        : operator === "*" ? multiply(numA, numB)
        : "No Operator";
}


/*
assign event listeners to all numbers on click
    If screenValue is a number
        If screenValue is equal to 0 (as in the display was cleared)
            set screenValue equal to eventValue
        else if not 0 (there's already a number entered)
            screenValue equal to Number(screenValue + string(eventValue)) (appends number to end of current value)
assign event listener to all operator buttons
    
*/
let btn = document.querySelectorAll('button');
btn.forEach(element => {
    element.addEventListener('click')
});


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operate
}