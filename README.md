describe: roboger();

test: function should take a number input and output that number
code: 
const number = 7;
roboger(number);
Expected output: 7

test: function should only take numbers
code:
const number = "string";
roboger(number);
Expected output: "It is not a wonderful day in the neighborhood"