console.log("works");
let operand1 = 0;
let operand2 = 0;
let op = '';
let currentInput = '';

const currentOperation = document.querySelector('.currentOperation');
const lastOperation = document.querySelector('.lastOperation');

const equalButton = document.querySelector('.equals');
equalButton.addEventListener('click', () => {
    operand1 = parseFloat(lastOperation.textContent.trim().slice(0, -1));
    operand2 = parseFloat(currentOperation.textContent.trim());
    op = lastOperation.textContent.trim().slice(-1);

    result = operate(operand1, operand2, op);
    currentInput = result;
    currentOperation.textContent = currentInput;
    lastOperation.textContent += ` ${operand2} =`;
    console.log(`operand 1: ${operand1}, operator: ${op}, operand 2: ${operand2}`);
});

const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', () => {
    currentInput = currentOperation.textContent.slice(0, -1);
    currentOperation.textContent = currentInput;
})

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    currentInput = '';
    currentOperation.textContent = currentInput;
    lastOperation.textContent = currentInput;
});

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        currentOperation.textContent = currentInput;
    });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        let emptyFlag = currentInput === '';
        let operand = button.textContent;
        let text = lastOperation.textContent.trim();

        if (!emptyFlag) {
            lastOperation.textContent = `${currentInput} ${operand} `;
        } else {
            if (text.endsWith('+') || text.endsWith('-') || text.endsWith('x') || text.endsWith('÷')) {
                lastOperation.textContent = `${text.slice(0, -1)} ${operand}`;
            } else {
                lastOperation.textContent = `${text} ${operand}`;
            }
        }

        let operatorr = lastOperation.textContent.trim().slice(-1);
        console.log(`operator from the operator button: ${operatorr}`);
        if (operatorr === '+' || operatorr === '-' || operatorr === 'x' || operatorr === '÷') {
            currentInput = '';
        }
    });
});

function operate (n1, n2, op) {
    switch (op) {
        case "-": return n1 - n2;
        break;
        case "+": return n1 + n2;
        break;
        case "x": return n1 * n2;
        break;
        case "÷":
            if (n2 == 0) {
                return "lmao, dividing by 0?";
            } else {
                return n1 / n2;
            }
        break;
        default: alert('UGHHH SWITCH CASE ERROR');
    }
}

// function formatNumber(number, decimals = 2) {
//     return number.toFixed(decimals);
// }