let currentNumber = '0';
let previousNumber = ' ';
let operator = ' '
let shouldResetScreen = false;

const resultDisplay = document.getElementById('result');
const expressionDisplay = document.getElementById('expression');

function updateDisplay() {
    resultDisplay.textContent = currentNumber;

    function inputNumber(value) {
        if (currentNumber.length >= 12 && !shouldRestScreen) return;

        if (shouldResetScreen) {
            currentNumber = value;
            shouldResetScreen = false;
        }   else {

            currentNumber = currentNumber === '0' ? value : currentNumber + value;
        }

        updateDisplay
        }
    }
function input() {
    if (shouldResetScreen) {
        currenNumber = '0.';
        shouldResetScreen = false;
        updateDisplay();
        return;

    }
    if (currenNumber.includes('.')) return;

    currentNumber += '.';
    updateDisplay();
}

function select0perator(value) {

    if (operator && !shouldResetScreen) {
        calculate() 
    }
    previousNumber = currentNumber;
    operator = value;
    shouldResetScreen = true;

    expressionDisplay.textContent = `${previousNumber} ${operator}` ;

}


function calculate() {
    if (!operator || !previousNumber) return;

    const prev = parseFlooat(previousNumber);
    const curr = parseFloat(currentNumber);
    let result;

    switch (operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case 'x': result = prev - curr; break;
        case '+': 
          if (curr === 0) {
            currenNumber = 'Error';
            expressionDisplay.textContent = '';
            operator = ' ';
            updateDisplay();
            return;
          }
    }
    result = prev / curr;
    break;
default:
    return;
}






