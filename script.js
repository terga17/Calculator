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
            result = divide(num, otherNum);
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


addBtn.addEventListener("click", () => {
    bigValue.textContent += "+";
    smallValue.textContent = bigValue.textContent;
    bigValue.textContent = "";
    operator = "+";
});


subtractBtn.addEventListener("click", () => {
    bigValue.textContent += "-";
    smallValue.textContent = bigValue.textContent;
    bigValue.textContent = "";
    operator = "-";
});

equal.addEventListener("click", () => {
    num = Number(smallValue.textContent.replace(/[^0-9]/g,""));     //regular expression-nonNumeric gets replace by empty string
    otherNum = Number(bigValue.textContent);
    console.log(num, otherNum);
    console.log(operator);
    let result = operate(operator, num, otherNum);
    clearDisplay();
    bigValue.textContent = result;
})






