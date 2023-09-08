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
    numOne: null, 
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

function updateEquationNumbers(eventNumber) {
    if(operateObj.numOne === null) {
        operateObj.numOne = eventNumber;
        screenValue = operateObj.numOne;
    } 
    else {
        if(operateObj.operator === null) {
            appendNumber(operateObj.numOne, eventNumber);
        }
        else {
            if(operateObj.numTwo === null) {
                operateObj.numTwo = eventNumber;
                screenValue = operateObj.numTwo;
            }
            else {
                appendNumber(operateObj.numTwo, eventNumber);
            }
        }
    }
}


function appendNumber(currentNum, addNum) {
    currentNum = Number(currentNum + toString(addNum));
    screenValue = currentNum;
}            

/*
Enter a number and three possible states
    If operateObj.numOne = null
        numOne = eventnumber
        screenvalue = numOne
    If operateObj.numOne != null
        If operateobj.operator = null
            appendNumber(operateObj.numOne, eventnumber)
            screenvalue = numOne
        If operateobj.operator != null
            If numTwo = null
                numTwo = eventnumber
            if numbTwo != null
                appendNumber(operateObj.numTwo, eventnumber)
                screenvalue = numtwo
    



appendNumber(currentNum, addNum) {
    currentNum = Number(currentNum + toString(addNum))
}            
assign event listeners to all numbers on click
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