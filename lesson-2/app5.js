"use strict";

function sum(num1, num2) {
    return console.log(num1 + num2);
}

function subtr(num1, num2) {
    return console.log(num1 - num2);
}

function mult(num1, num2) {
    return console.log(num1 * num2);
}

function segm(num1, num2) {
    return console.log(num1 / num2);
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return subtr(arg1, arg2);
        case "*":
            return mult(arg1, arg2);
        case "/":
            return segm(arg1, arg2);
    }
}

mathOperation(3, 9, "+");
mathOperation(11, 8, "-");
mathOperation(4, 3, "*");
mathOperation(12, 2, "/");
