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
    numTwo: 0,
    operator: ""
}
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

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operate
}