"use strict"

/* 
1. (ассоацитивность слева на право) 10 складываем с 10, получаем 20 и складываем с операндом строчного типа ("10"), происходит конкатенация, получаем 2010
2. 10 складываем с операндом строчного типа, "1010" скалдываем с 10, получаем "101010".
3. 10 складываем с 10, получаем 20, 20 складываем с 10 (унарный плюс сделал из операнда строчного типа, числовой), получаем 30
4. 10 делим на -0(унарный минус сделал пустую строку отрицательным 0), получаем отрицательную бесконечность
5. 10 делим на NaN (т.к. 2 и 5 разделены ","), получаем NaN
*/

let a = 10 + 10 + "10";
let b = 10 + "10" + 10;
let c = 10 + 10 + +"10";
let d = 10 / -"";
let e = 10 / +"2,5";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


