let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttons = document.querySelectorAll('button');

function add(a, b) {
    return a+b;
}
function substract(a, b) {
    return a-b;
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    return a/b;
}

function updateDisplay() {
    const display = document.getElementById('display');
    console.log(display);
    display.innerText = displayValue;
    if (displayValue.length > 15) {
        display.innerText = displayValue.substring(0, 15);
    }
} 

updateDisplay();

function clickButton() {
    for (let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            classes = buttons[i].classList;
            if (classes.contains('digit')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            }
        })
    }
}

clickButton();

function inputOperand(value) {
    if (!firstOperator) {
        if (displayValue === '0' || displayValue === firstOperand) {
            displayValue = value
        } else {
            displayValue += value
        }
    } else {
        if (displayValue === firstOperand) {
            displayValue = value
        } else {
            displayValue += value
        }
    }
}

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a, b)
    } else if (operator == "-") {
        return substract(a, b)
    } else if (operator == "*") {
        return multiply(a, b)
    } else if (operator == "/") {
        return divide(a, b)
    }
}

