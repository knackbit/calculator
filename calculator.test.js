const calculator = require('./javascript');

const testObjOne = {
    numOne: 1,
    numTwo: 3,
    operator: "+"
}

const testObjTwo = {
    numOne: 1,
    numTwo: 0,
    operator: "+"
}

const testObjNoOperator = {
    numOne: 5,
    numTwo: 2,
    operator: ""
}


test('adds 1 + 3 to equal 4', () => {
    expect(calculator.operate(testObjOne)).toBe(4);
});

test('adds 1 + 0 to equal 1', () => {
    expect(calculator.operate(testObjTwo)).toBe(1);
});

test('no operator given, to equal No Operator', () => {
    expect(calculator.operate(testObjNoOperator)).toBe("No Operator");
});