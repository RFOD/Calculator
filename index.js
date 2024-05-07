let input = [];
let result;
let num1;
let num2;
let operator;

function clear(){
    input = [];
    result = null;
    console.log("this is the array: " + input);
}

// adds event listeners to nr buttons ans listens for input to push into the array
for (let buttonNr of document.querySelectorAll(".nr"))
{
    buttonNr.addEventListener("click", 
    function()
    { 
        nr = this.innerHTML;
        input.push(+nr);
        nr1 = 
    } )
}

// Clears the array: CLEAR BUTTON
    let clearButton = document.querySelector(".clear");
    clearButton.addEventListener("click", clear)

// Multiply function: MULTIPLICATION BUTTON

let multButton = document.querySelector(".multiply")
multButton.addEventListener("click", () =>
{
    operator = "mult";
});

// Add function: ADD BUTTON

let addButton = document.querySelector(".add")
addButton.addEventListener("click", () =>
{
    operator = "add";
});

// Divide function: DIVISION BUTTON

let divButton = document.querySelector(".divide")
divButton.addEventListener("click", () =>
{
    operator = "div";
});

// Subtract function: SUBTRACTION BUTTON

let subButton = document.querySelector(".subtract")
subButton.addEventListener("click", () =>
{
    operator = "sub";
});

switch(operator)
{
    case("add"):
    {
        result = num1 + num2;
    }
    case("sub"):
    {
        result = num1 + num2;  
    }
    case("mult"):
    {
        result = num1 + num2;
    }
    case("div"):
    {
        result = num1 + num2;
    }
    default:
    {
        console.log("---Error in switch statement---")
    }

}



// Result function: EQUAL BUTTON

let equalButton = document.querySelector(".equal")

