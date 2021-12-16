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
            if (b == 0) {
                return `¯\\_(ツ)_/¯`;
            }
            return divide(a, b);
            break;
        default:
            return 'Invalid Operator';
            break;
    }
}

function inputValues(e) {
    const keyClass = e.target.classList[1];

    switch (keyClass) {
        case 'number':
            if (valueLeft === `¯\\_(ツ)_/¯`) {
                valueLeft = '';
                operation = '';
            }
            if (operation === '') {
                valueLeft += e.target.textContent;
            } else {
                valueRight += e.target.textContent;
            }
            //console.log(`left: ${valueLeft}\tright: ${valueRight}`);
            break;

        case 'operation':
            if (valueLeft === `¯\\_(ツ)_/¯`) {
                valueLeft = '';
                operation = '';
            }
            if (valueLeft === '') {
                return;
            }
            if (operation !== '') {
                if (valueRight === '') {
                    return;
                }
                // equal code basically
                valueLeft = operate(operation, +valueLeft, +valueRight);
                if (typeof(valueLeft) === 'number') {
                    valueLeft = Math.round((valueLeft + Number.EPSILON) * 10000) / 10000;
                    valueLeft = valueLeft.toString();
                }
                valueRight = '';
                // then the operation code
            }
            operation = e.target.textContent;
            //console.log(`operation: ${operation}`);
            break;

        case 'equal':
            if (valueRight === '') {
                return;
            }
            valueLeft = operate(operation, +valueLeft, +valueRight); // save result in value left
            if (typeof(valueLeft) === 'number') {
                valueLeft = Math.round((valueLeft + Number.EPSILON) * 10000) / 10000;
                valueLeft = valueLeft.toString();
            }
            valueRight = '';
            operation = '';
            break;

        case 'delete':
            if (valueLeft === `¯\\_(ツ)_/¯` || valueLeft === '') {
                return;
            }
            // depending on which element is active, works differently
            if (operation === '') {
                if (valueLeft.length > 0) {
                    valueLeft = valueLeft.substring(0, valueLeft.length - 1);
                }
            } else {
                if (valueRight.length > 0) {
                    valueRight = valueRight.substring(0, valueRight.length - 1);
                } else {
                    operation = '';
                }
            }
            break;

        case 'clear':
            valueLeft = '';
            valueRight = '';
            operation = '';
            break;
        
        case 'negate':
            if (valueLeft === `¯\\_(ツ)_/¯`) {
                return;
            }
            if (operation === '') {
                if (valueLeft.charAt(0) === '-') {
                    valueLeft = valueLeft.substring(1);
                } else {
                    valueLeft = `-${valueLeft}`;
                }
            } else {
                if (valueRight.charAt(0) === '-') {
                    valueRight = valueRight.substring(1);
                } else {
                    valueRight = `-${valueRight}`;
                }
            }
            break;

        case 'decimal':
            if (valueLeft === `¯\\_(ツ)_/¯`) {
                return;
            }
            if (operation === '') {
                if (!valueLeft.includes('.')) {
                    if (valueLeft === '') {
                        valueLeft = '0.';
                    } else {
                        valueLeft += e.target.textContent;
                    }
                }
            } else {
                if (!valueRight.includes('.')) {
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
    //console.log(`text: ${e.target.textContent}  \t key Class: ${e.target.classList[1]}`);

    if (keyClass === 'clear' || (keyClass === 'delete' && valueLeft === '')) {
        displayEquation.textContent = `0`;
    } else {
        displayEquation.innerHTML = `${valueLeft}${operation}${valueRight}`;
    }
}

window.addEventListener("keydown", function(e) {
    e.preventDefault();
    switch(e.key){
        case('1'):
        case('2'):
        case('3'):
        case('4'):
        case('5'):
        case('6'):
        case('7'):
        case('8'):
        case('9'):
        case('0'):
        case('+'):
        case('-'):
            document.getElementById(e.key).click();
            break;
        case('/'):
            document.getElementById('÷').click();
            break;
        case('*'):
            document.getElementById('x').click();
            break;
        case('Enter'):
            document.getElementById('=').click();
            break;
        case('.'):
            document.getElementById('.').click();
            break;
        case('Backspace'):
            document.getElementById('del').click();
            break;
        default:
            break;
    }
})

const buttons = document.querySelectorAll('.button');
buttons.forEach(elem => elem.addEventListener('click', inputValues));

const displayEquation = document.querySelector('.display-equation');

// there is a bug with decimals and negatives with operands