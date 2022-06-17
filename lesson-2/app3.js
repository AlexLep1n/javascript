"use strict";

let a = parseInt(Math.random() * 100);
let b = parseInt(Math.random() * 100);

if (a >= 0 && b >= 0) {
    let result = a - b;
    alert(result);
} else if (a < 0 && b < 0) {
    let result = a * b;
    alert(result);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    let result = a + b;
    alert(result);
}