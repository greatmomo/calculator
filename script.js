function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            return 'Invalid Operator';
            break;
    }
}

function printDiv(e) {
    console.log(e.target.textContent);
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(elem => elem.addEventListener('click', printDiv));

// some numbers ... an operator ... some numbers ... equals/another operator ... repeat
// after a calculation, store result in variable 1
// on reset, clear both variables (undefined? not 0?)