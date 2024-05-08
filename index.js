let array1 = [];
let array2 = [];
let result;
let num1 = 0;
let num2 = 0;
let operator = null;

function display(message) {
	document.querySelector(".output > h1").innerHTML = message;
}
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
				display(num1.toExponential(3));
			}
		} else {
			array2.push(+nr);
			if (array2.join("").length < 9 && array2.join("").length > 0) {
				num2 = parseFloat(array2.join(""));
				display(num2);
			} else {
				display(num1.toExponential(3));
			}
		}
	});
}

// Clears the array: CLEAR BUTTON

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clear);

// Power function: SQR BUTTON
let powButton = document.querySelector(".sqr");
powButton.addEventListener("click", () => {

	let operationResult = Math.pow(num1, 2);
	let resultString = operationResult.toString();
    num1 = Math.pow(num1, 2);
	display(num1);
    array2 = [];
	if (resultString.length < 8) {
		display(operationResult);
	} else {
		display(operationResult.toExponential(3));
	}
});

// SQRT function: SQRT BUTTON
let radButton = document.querySelector(".sqrt");
radButton.addEventListener("click", () => {
    let operationResult = Math.sqrt(num1);
	let resultString = operationResult.toString();
    num1 = operationResult;
    array2 = []; 
	if (resultString.length < 8) {
		display(operationResult);
	} else {
		display(operationResult.toExponential(3));
	}
});
// Adds Event Listeners to operations
let operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
	button.addEventListener("click", () => {
		if (operator && array2.length > 0) {
			// Perform the previous operation
			num1 = operate(num1, num2, operator);
			array2 = []; // Clear array2 for the next number
			display(num1);
		}
		operator = button.getAttribute('data-operator'); // Set the new operator
		 // Clear the display for the new number
	});
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
		case "div": {
			if (num2 !== 0) {
				result = num1 / num2;
				// Check if the result is a whole number or has a fractional part
				if (result % 1 === 0) {
					return result;
				} else {
					// Limit the result to a maximum of 5 decimal places
					return Number(result.toFixed(5));
				}
			} else {
				// Display an error message if trying to divide by zero
				display("Mr.Fish");
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
	clear();
	num1 = operationResult;
	if (resultString.length < 8) {
		display(operationResult);
	} else {
		display(operationResult.toExponential(3));
	}
});
