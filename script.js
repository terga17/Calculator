let num = 0, operator = 0, otherNum = 0;

function add(a, b){
    return a + b;
}

function subtract(a, b){
 return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(op, num, otherNum){        //forgot to return a value
    let result;
    switch (op) {
        case "+":
            result = add(num, otherNum);
            break;
        case "-":
            result = subtract(num, otherNum);
            break;
        case "*":
            result = multiply(num, otherNum);
            break;    
        case "/":
            if(otherNum === 0){
                result = "ARE U STUPID?";
            } else{
                result = divide(num, otherNum);
            }
            break;
        default:
            break;
    }
    return result;
}

let displayValue = 0;

const buttons = document.querySelectorAll(".btn");
let bigValue = document.querySelector(".big-screen");
let smallValue = document.querySelector(".small-screen");
let equal = document.querySelector(".eql");


buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(Number(btn.textContent))        //delete after
        bigValue.textContent += btn.textContent;
    });
    displayValue = Number(bigValue.textContent);
});

function clearDisplay(){
    smallValue.textContent = " ";
    bigValue.textContent = " ";
}

const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".sub");
const multBtn = document.querySelector(".mult");
const divideBtn = document.querySelector(".divide");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const dotBtn = document.querySelector("#dot");





addBtn.addEventListener("click", () => {
    bigValue.textContent += " + ";
    smallValue.textContent = bigValue.textContent;
    bigValue.textContent = "";
    operator = "+";
});


subtractBtn.addEventListener("click", () => {
    bigValue.textContent += " - ";
    smallValue.textContent = bigValue.textContent;
    bigValue.textContent = "";
    operator = "-";
});

multBtn.addEventListener("click", () => {
    bigValue.textContent += " * ";
    smallValue.textContent = bigValue.textContent;
    bigValue.textContent = "";
    operator = "*";
});

divideBtn.addEventListener("click", () => {
    bigValue.textContent += " ÷ ";
    smallValue.textContent = bigValue.textContent;
    bigValue.textContent = "";
    operator = "/";
});

equal.addEventListener("click", () => {
    num = Number(smallValue.textContent.replace(/[^0-9]/g,""));     //regular expression-nonNumeric gets replace by empty string
    otherNum = Number(bigValue.textContent);
    console.log(num, otherNum);
    console.log(operator);
    let result = operate(operator, num, otherNum);
    clearDisplay();
    bigValue.textContent = result;
});

clearBtn.addEventListener("click", clearDisplay);


deleteBtn.addEventListener("click", () => {
    let size = bigValue.textContent.length - 1;
    let slice = bigValue.textContent.slice(0, size);
    bigValue.textContent = slice;
});

// dotBtn.addEventListener("click", () => {     //equal eventListener doesnt count the , as part of number
//    bigValue.textContent += ".";
//    isDot = true;
//    let isDot = false;
// });






