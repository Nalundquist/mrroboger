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

test: function does not take negative numbers
code:
const number = "-99";
roboger(number);
Expected output: "It is not a wonderful day in the neighborhood"

test: function returns array that increments to inputted number from 0
code:
const number = "6";
roboger(number);
Expected output: [0, 1, 2, 3, 4, 5, 6]

test: converts numbers to strings
code: const number = "3";
roboger(number);
Expected output: ["0", "1", "2", "3"]

test: function replaces numbers in the returned array that are one or contain the digit 1 with "Beep!"
code:
const number = "12";
roboger(number);
Expected output: [0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!"]

test: function replaces numbers in the returned array that are one or contain the digit 2 with "Boop!"
code:
const number = "12";
roboger(number);
Expected output: [0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!"]