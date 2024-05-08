let array1 = [];
let array2 = [];
let result;
let num1 = 0;
let num2 = 0;
let operator = null;

function clear() {
	array1 = [];
	array2 = [];
	num1 = 0;
	num2 = 0;
	result = null;
	operator = null;
	display("");
	console.log(
		"this is the array1: " + array1 + "this is the array2: " + array2
	);
}

// adds event listeners to nr buttons ans listens for input to push into the array
for (let buttonNr of document.querySelectorAll(".nr")) {
	buttonNr.addEventListener("click", function () {
		nr = this.innerHTML;

		console.log("num1: " + num1 + " " + operator + " num2: " + num2);
		if (operator === null) {
			array1.push(+nr);
			if (array1.join("").length < 9 && array1.join("").length > 0) {
				num1 = parseFloat(array1.join(""));
				display(num1);
			} else {
				display("Error");
			}
		} else {
			array2.push(+nr);
			if (array2.join("").length < 9 && array2.join("").length > 0) {
				num2 = parseFloat(array2.join(""));
				display(num2);
			} else {
				display("Error");
			}
		}
	});
}
function display(message) {
	document.querySelector("h1").innerHTML = message;
}
// Clears the array: CLEAR BUTTON

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clear);

// Multiply function: MULTIPLICATION BUTTON

let multButton = document.querySelector(".multiply");
multButton.addEventListener("click", () => {
	display("");
	operator = "mult";
});

// Add function: ADD BUTTON

let addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
	display("");
	operator = "add";
	let operationResult = operate(num1, num2, operator);
    let resultString = operationResult.toString();
    if (resultString.length < 8) {
        display(operationResult);
    } else {
        display(resultString.slice(0, 7));
    }
	num1 = operationResult; 
	array1 = [];
});

// Divide function: DIVISION BUTTON

let divButton = document.querySelector(".divide");
divButton.addEventListener("click", () => {
	display("");
	operator = "div";
	let operationResult = operate(num1, num2, operator);
    let resultString = operationResult.toString();
    if (resultString.length < 8) {
        display(operationResult);
    } else {
        display(resultString.slice(0, 7));
    }
	num1 = operationResult; 
	array1 = [];
});

// Subtract function: SUBTRACTION BUTTON

let subButton = document.querySelector(".subtract");
subButton.addEventListener("click", () => {
	display("");
	operator = "sub";
	let operationResult = operate(num1, num2, operator);
    let resultString = operationResult.toString();
    if (resultString.length < 8) {
        display(operationResult);
    } else {
        display(resultString.slice(0, 7));
    }
	num1 = operationResult; 
	array1 = [];
});

// Power function: SQR BUTTON

let powButton = document.querySelector(".sqr");
powButton.addEventListener("click", () => {
	display("");
	operator = "pow";
	let operationResult = operate(num1, null, operator);
	display(operationResult);
	let resultString = operationResult.toString();
    if (resultString.length < 8) {
        display(operationResult);
    } else {
        display(resultString.slice(0, 7));
    }
	num1 = operationResult;
	array1 = [];
});
// SQRT function: SQRT BUTTON

let radButton = document.querySelector(".sqrt");
radButton.addEventListener("click", () => {
	display("");
	operator = "rad";
	let operationResult = operate(num1, null, operator);
    let resultString = operationResult.toString();
    if (resultString.length < 8) {
        display(operationResult);
    } else {
        display(resultString.slice(0, 7));
    }
	num1 = operationResult; 
	array1 = [];
});

// Checks for the operator
function operate(num1, num2, operator) {
	switch (operator) {
		case "add": {
			result = num1 + num2
			operator = null;
			num1 = result;
			num2 = 0;
			array2 = [];
			return (result);
		}
		case "sub": {
			result = num1 - num2
			operator = null;
			num1 = result;
			num2 = 0;
			array2 = [];
			return (result);
		}
		case "mult": {

			result = num1 * num2
			operator = null;
			num1 = result;
			num2 = 0;
			array2 = [];
			return (result);
		}
		case "pow": {

			return result = Math.pow(num1, 2);
		}
		case "rad": {

			return result = Math.sqrt(num1);
		}
		case "div": {
			operator = null;

			if (num2 !== 0) {
				result = num1 / num2;
				operator = null;
				num1 = result;
				num2 = 0;
				array2 = [];
				// Check if the result is a whole number or has a fractional part
				if (result % 1 === 0) {
					return result;
				} else {
					// Limit the result to a maximum of 5 decimal places
					return Number(result.toFixed(5));
				}
			} else {
				// Display an error message if trying to divide by zero
				display("Can't divide by 0");
				return null; 
			}
		}
		default: {
			operator = null;
			console.log("---Error in switch statement---");
		}
	}
}

// Result function: EQUAL BUTTON

let equalButton = document.querySelector(".result");
equalButton.addEventListener("click", () => {
    let operationResult = operate(num1, num2, operator);
    let resultString = operationResult.toString();
	num1 = operationResult;
	array2 = [];
	operator = null;
    if (resultString.length < 8) {
        display(operationResult);
    } else {
        display(resultString.slice(0, 7));
    }
});
