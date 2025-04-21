// link 

const display = document.getElementById('display');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

const ac = document.getElementById('ac');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const equal = document.getElementById('equal');

let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let num1Complete = false;

displayText = "0";
display.textContent = displayText;

// functions

function addFunction (num1, num2) {
    return Number(num1) + Number(num2);
};
  
function subtractFunction (num1, num2) {
return num1 - num2;
};

function multiplyFunction (num1, num2) {
    return num1 * num2;
};

function divideFunction (num1, num2) {
    return num1 / num2;
};

function digitClick (digit) {
    if (num1Complete === false && operator === "equal"){
        num1 = digit;
        displayText = num1;
        display.textContent = displayText;
        console.log(num1);
    }
    else if (num1Complete === true){
        num2 += digit;
        displayText = num2;
        display.textContent = displayText;
        console.log(num2);
    }
    else if (num1Complete === false) {
        num1 += digit;
        displayText = num1;
        display.textContent = displayText;
        console.log(num1);
    }
    else console.log("SOMETHING IS OFF HERE 1")
};

function operatorClick (operatorPassed) {
    if (num1Complete === false) {
        num1Complete = true;
        operator = operatorPassed;
        console.log(operator);
    }
    else if (num1Complete === true){
        if (operator === "plus") {
            result = addFunction (num1, num2);
            operator = operatorPassed;
            displayText = result;
            display.textContent = displayText;}
        else if (operator === "minus") {
            result = subtractFunction (num1, num2);
            operator = operatorPassed;
            displayText = result;
            display.textContent = displayText;}
        else if (operator === "multiply") {
            result = multiplyFunction (num1, num2);
            operator = operatorPassed;
            displayText = result;
            display.textContent = displayText;}
        else if (operator === "divide") {
            result = divideFunction (num1, num2);
            operator = operatorPassed;
            displayText = result;
            display.textContent = displayText;}
        else console.log("SOMETHING IS OFF HERE 3");
        num1 = result;
        num1Complete = true;
        num2 = "";
        console.log(operator)
        console.log(result)
    }
    else console.log("SOMETHING IS OFF HERE 2")
}

function equalClick () { 
    if (num1Complete === true) {
        if (operator === "plus") {
            result = addFunction (num1, num2);
            console.log(result);
            displayText = result;
            display.textContent = displayText;
        }
        if (operator === "minus") {
            result = subtractFunction (num1, num2);
            console.log(result);
            displayText = result;
            display.textContent = displayText;
        }
        if (operator === "multiply") {
            result = multiplyFunction (num1, num2);
            console.log(result);
            displayText = result;
            display.textContent = displayText;
        }
        if (operator === "divide") {
            result = divideFunction (num1, num2);
            console.log(result);
            displayText = result;
            display.textContent = displayText;
        }
        num1Complete = false;
        num1 = result;
        num2 = "";
        operator = "equal";
    }
    else console.log("SOMETHING IS OFF HERE 3")
}





one.addEventListener("click", () => {
    digitClick(1);
})
two.addEventListener("click", () => {
    digitClick(2);
})
three.addEventListener("click", () => {
    digitClick(3);
})
four.addEventListener("click", () => {
    digitClick(4);
})
five.addEventListener("click", () => {
    digitClick(5);
})
six.addEventListener("click", () => {
    digitClick(6);
})
seven.addEventListener("click", () => {
    digitClick(7);
})
eight.addEventListener("click", () => {
    digitClick(8);
})
nine.addEventListener("click", () => {
    digitClick(9);
})
zero.addEventListener("click", () => {
    digitClick(0);
})


ac.addEventListener("click", () => {
    console.log("ac");
})
divide.addEventListener("click", () => {
    operatorClick("divide");
})
multiply.addEventListener("click", () => {
    operatorClick("multiply");
})
minus.addEventListener("click", () => {
    operatorClick("minus");
})
plus.addEventListener("click", () => {
    operatorClick("plus");
})
equal.addEventListener("click", () => {
    equalClick();
})
