let valueLeft = 0;
let valueRight = 0;
let operation = '';

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

function inputValues(e) {
    // need to only take correct input
    // entering first number, then pressing an operator should save the number to a variable
    // then save the operator and allow entry of the second variable.
    // pressing enter or another operator should perform the operation and repeat the procedure
    // if variable 1 is zero, treat it as empty and overwrite the value
    // otherwise, append the new number

    const keyClass = e.target.classList[1];

    switch (keyClass) {
        case 'number':
            break;

        case 'operation':
            break;

        case 'equal':
            break;

        case 'delete':
            break;

        case 'clear':
            break;
        
        case 'negate':
            break;

        case 'decimal':
            break;

        default:
            console.log('Invalid key Class. Contact your service provider.');
            break;
    }

    // should be able to read out second class to check for number/operation and special cases
    console.log(`text: ${e.target.textContent}  \t key Class: ${e.target.classList[1]}`);

    displayEquation.innerHTML += e.target.textContent;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(elem => elem.addEventListener('click', inputValues));

const displayEquation = document.querySelector('.display-equation');

// some numbers ... an operator ... some numbers ... equals/another operator ... repeat
// after a calculation, store result in variable 1
// on reset, clear both variables (undefined? not 0?)