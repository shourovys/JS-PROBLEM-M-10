// swap 2 value by temp variable
let num1 = 40;
let num2 = 50;
console.log("Before swap ; num1 =", num1, "nun2 =", num2);
let a = num1;
num1 = num2;
num2 = a;
console.log("After swap ; num1 =", num1, "nun2 =", num2);

// swap 2 value by increment and decrement
let x = 4;
let y = 5;
console.log("Before swap ; x =", x, "y =", y);
x = x + y;
y = x - y;
x = x - y;
console.log("After swap ; x =", x, "y =", y);
let p = 87;
let q = 97;
console.log("Before swap ; p =", p, "q =", q);

// swap 2 value by list position
[p, q] = [q, p];
console.log("After swap ; p =", p, "q =", q);
