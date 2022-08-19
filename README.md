# Mr. Roboger's Neighborhood

### Created by Noah Lundquist in August of 2022

## Links

* [Repository](https://github.com/nalundquist/mrroboger)
* [Webpage](https://nalundquist.github.io/mrroboger)

## Description

A webpage created as a part of ongoing Epicodus course, talk to a computer!  Kind of.  Any given number input into this form will then give a result that counts to said number while replacing certain numbers/numbers containing said numbers with different words and phrases.  Fun fact: I did not know until doing a little research for this project that Mr. Rogers loved the number "143" as it alluded to the number of letters in each word of the phrase "I Love You", which I find heartwarming.  

## Features

* Inputted number is placed through a series of loops that replace given integers with words/phrases
* Talk with a (not) sentient machine who loves a certain television show of yore
* Results reset upon resubmission of input
* Automatically scrolls down to results

## Technologies Used

* Built in VS Code (v.1.70.1) using the following languages:
	* HTML
	* CSS
	* Javascript

* Includes the ["Play" font](https://fonts.google.com/specimen/Play) sourced through [Google Fonts](https://fonts.google.com) and created by Jonas Hecksher

* Tested in the following browsers:
	* Google Chrome (v.104.0)
	* Firefox (v.103.0.2)
	* Microsoft Edge (v.104.0)

## Installation

* Download [Git Bash](https://git-scm.com/downloads)
* Input the following into Git Bash to clone this repository onto your computer:

		>git clone https://github.com/nalundquist/mrroboger

* Enter the cloned project folder "mrroboger" and open "index.html" in browser.

## Known Bugs

* None at this point

## License

Licensed under [GNU GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)

## TDD Log

### describe: roboger();


#### test: function should take a number input and output that number

code: 

const number = 7;

roboger(number);

Expected output: 7

#### test: function should only take numbers

code:

const number = "string";

roboger(number);

Expected output: "It is not a wonderful day in the neighborhood"

#### test: function does not take negative numbers

code:

const number = "-99";

roboger(number);

Expected output: "It is not a wonderful day in the neighborhood"

#### test: function returns array that increments to inputted number from 0

code:

const number = "6";

roboger(number);

Expected output: [0, 1, 2, 3, 4, 5, 6]

#### test: converts numbers to strings

code: const number = "3";

roboger(number);

Expected output: ["0", "1", "2", "3"]

#### test: function replaces numbers in the returned array that are one or contain the digit 1 with "Beep!"

code:

const number = "12";

roboger(number);

Expected output: [0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!"]

#### test: function replaces numbers in the returned array that are one or contain the digit 2 with "Boop!"

code:

const number = "12";

roboger(number);

Expected output: [0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!"]

#### test: function replaces numbers in the returned array that are one or contain the digit 3 with "Won't you be my neighbor?"

code:

const number = "13";

roboger(number);

Expected output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Boop!", "Won't you be my neighbor?"]

#### test: function outputs final result/error as string

code: 

const number = "7";

roboger(number);

Expected output: "0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7"
