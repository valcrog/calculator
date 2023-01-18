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
    display.innerText = displayValue;
    if (displayValue.length > 15) {
        display.innerText = displayValue.substring(0, 15);
    }
} 

updateDisplay();

document.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
})

function clickButton() {
    for (let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            classes = buttons[i].classList;
            if (classes.contains('digit')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if (classes.contains('all-clear')) {
                clearDisplay();
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

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
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

