// script.js
let currentInput = '';
let currentOperation = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput === '') return;
    if (currentOperation !== null) calculateResult();
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    currentOperation = null;
    previousInput = '';
    updateDisplay(true);
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}

function updateDisplay(isResult = false) {
    const display = document.getElementById('display');
    if (isResult) {
        display.innerText = currentInput;
    } else {
        display.innerText = previousInput + (currentOperation || '') + currentInput;
    }
}
