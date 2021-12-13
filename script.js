let valueLeft = '';
let valueRight = '';
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
        case 'x':
            return multiply(a, b);
            break;
        case '÷':
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
            if (operation === '') {
                valueLeft += e.target.textContent;
            } else {
                valueRight += e.target.textContent;
            }
            console.log(`left: ${valueLeft}\tright: ${valueRight}`);
            break;

        case 'operation':
            if (operation !== '') {
                // equal code basically
                valueLeft = operate(operation, +valueLeft, +valueRight);
                valueRight = '';
                // then the operation code
            }
            operation = e.target.textContent;
            console.log(`operation: ${operation}`);
            break;

        case 'equal':
            valueLeft = operate(operation, +valueLeft, +valueRight); // save result in value left
            valueRight = '';
            operation = '';
            break;

        case 'delete':
            break;

        case 'clear':
            break;
        
        case 'negate':
            break;

        case 'decimal':
            console.log(`operation is ${operation}`);
            if (operation === '') {
                if (!valueLeft.includes('.')) {
                    if (valueLeft === '') {
                        valueLeft = '0.';
                    } else {
                        valueLeft += e.target.textContent;
                    }
                }
            } else {
                if (!valueLeft.includes('.')) {
                    if (valueRight === '') {
                        valueRight = '0.';
                    } else {
                        valueRight += e.target.textContent;
                    }
                }
            }
            break;

        default:
            console.log('Invalid key Class. Contact your service provider.');
            break;
    }

    // should be able to read out second class to check for number/operation and special cases
    console.log(`text: ${e.target.textContent}  \t key Class: ${e.target.classList[1]}`);

    displayEquation.innerHTML = `${valueLeft}${operation}${valueRight}`;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(elem => elem.addEventListener('click', inputValues));

const displayEquation = document.querySelector('.display-equation');

// some numbers ... an operator ... some numbers ... equals/another operator ... repeat
// after a calculation, store result in variable 1
// on reset, clear both variables (undefined? not 0?)