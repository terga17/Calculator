const add = (a, b) => a + b;

function subtract(a, b){
 return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let num = 0, operator = 0, otherNum = 0;

function operate(op, num, otherNum){
    switch (op) {
        case "+":
            add(num, otherNum);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;    
        case "/":
            divide(a, b);
            break;
        default:
            break;
    }
}