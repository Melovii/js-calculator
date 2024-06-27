console.log("works");
let operand1 = 0;
let operand2 = 0;
let op = '';
let currentInput = '';

const display = document.querySelector('.display');

const allButtons = document.querySelectorAll('.btn');
allButtons.forEach(button => {
    button.addEventListener('click', () => {
        // button.blur(); idk what to do here TODO: IDK MAN
    });
});

const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', () => {
    let string = display.textContent;
    let newString = string.slice(0, -1);
    currentInput = newString;
    display.textContent = currentInput;
})

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    currentInput = '';
    display.textContent = currentInput;
});

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        display.textContent = currentInput;
    });
});

operate(operand1, operand2, op);

function operate (n1, n2, op) {

    switch (op) {
        case "-": n1 - n2;
        break;
        case "+": n1 + n2;
        break;
        case "x": n1 * n2;
        break;
        case "÷": n1 / n2;
        break;
        default: alert('UGHHH SWITCH CASE ERROR');
    }
}