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


let numOne = null; 
let numTwo = null;
let operator = null;


let screenValue = 0;
displayEle = document.getElementById("display")
displayEle.textContent = screenValue;

// function that takes in operateObj and calls the appropriate function to do the math based on operateObj.operator
const operate = function() {
    if(operator === "/" && numTwo === 0) {
        updateScreenValue("self-destructing");
        numOne = null;
        numTwo = null;
        operator = null;
    }
    else if(operator === "+") {
        numOne = add(numOne, numTwo);
        updateScreenValue(numOne);
    }
    else if(operator === "-") {
        numOne = subtract(numOne, numTwo);
        updateScreenValue(numOne);
    }
    else if(operator === "/") {
        numOne = divide(numOne, numTwo);
        updateScreenValue(numOne)
    }
    else if(operator === "*") {
        numOne = multiply(numOne, numTwo);
        updateScreenValue(numOne);
    }
}

// checks which number of the equation to append the number
function checkEquationNumbers(eventNumber) {
    if(operator === null) {
        numOne = appendNumber(numOne, eventNumber);
    }
    else{
        numTwo = appendNumber(numTwo, eventNumber);
    }
}


function appendNumber(currentNum, addNum) {
    if(currentNum === null) {
        currentNum = addNum;
        updateScreenValue(currentNum);
        return currentNum;
    }
    else{
        currentNum = Number(currentNum + addNum.toString());
        updateScreenValue(currentNum);
        return currentNum;
    }            
}

function updateScreenValue(updateValue) {
    screenValue = updateValue
    displayEle.textContent = screenValue
}


function updateOperator(eventOperator) {
    if(numTwo !== null) {
        operate();
        operator = eventOperator.toString();
        numTwo = null;
    }
    else if(numOne === null) {
        numOne = 0;
        operator = eventOperator.toString();
    }
    else {
        operator = eventOperator.toString();
    }
}

function clear() {
    numOne = null;
    numTwo = null;
    operator = null;
    updateScreenValue(0);
}
/*

IF numTwo !== null
    numOne = operate()
    updateScreenValue(numOne)
    operator = eventOperator.toString()
else {
    operator = eventOperator.toString()
}


IF operator === null (no curr)
*/


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

let btn = document.querySelectorAll('.number');
btn.forEach(element => {
    element.addEventListener('click', (e) => {
        checkEquationNumbers(Number(e.target.textContent));
    })
});

let opBtn = document.querySelectorAll('.operator');
opBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        updateOperator(e.target.textContent);
    })
})

document.querySelector('#equals').addEventListener('click', () => {
    if(numOne !== null && numTwo !== null && operator !== null) {
        operate();
    }
})

document.querySelector('#clear').addEventListener('click', () => {
    clear();
})

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operate
}