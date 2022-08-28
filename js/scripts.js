// Business Logic


function roboger(numInput) {
	const robogerInput = parseInt(numInput);
	const robogerError = "It is not a wonderful day in the neighborhood.  Please supply me with a positive number.";
	const robogerError2 = "That number...It is horrifying to me.  Please choose one smaller.  Under 5000, perhaps."
	let robogerResult = "";
	const robogerOutput = []
	if (isNaN(robogerInput) || typeof robogerInput != 'number' || robogerInput < 0) {
		robogerResult = robogerError;
		return robogerResult;
	} else if (robogerInput >= 5000){
		robogerResult = robogerError2;
		return robogerResult;
	} else {
		for (i = 0; i <= robogerInput; i++) {
			robogerOutput.push(i);
			const robogerString = robogerOutput.map(function(num) {
				return num.toString();
			})
		}
	}
	for (i = 0; i < robogerString.length; i++){
		const robogerIndex = robogerString[i];
		if (robogerIndex === " 143"){
			robogerString[i] = ' "I love you."'
		} else if (robogerIndex.includes(3)){
			robogerString[i] = ' "Won\'t you be my neighbor?"';
		} else if (robogerIndex.includes(2)){
			robogerString[i] = ' "Boop!"';
		} else if (robogerIndex.includes(1)){
			robogerString[i] = ' "Beep!"';
		} else {

		}
	}
	for (i = 1; i < robogerString.length; i++) {
		const robogerIndex = robogerString[i];
		const preSpace = " ";
		robogerString[i] = preSpace.concat(robogerIndex);
	}
	if (robogerResult != robogerError && robogerResult != robogerError2){
		robogerResult = robogerString.toString("");
	}
	return robogerResult;
}

// UI Logic

function robogerSubmit(event){
	event.preventDefault();

	const robogerInput = document.getElementById("numberInput").value;
	const robogerResult = roboger(robogerInput);
	const resultDisplay = document.querySelector("div#result");

	resultDisplay.classList.add("hidden");

	const p = document.createElement("p");
	p.innerText = null
	p.append(robogerResult);
	resultDisplay.innerText = null;
	resultDisplay.append(p);
	resultDisplay.setAttribute("class", "robogerDisplay");
	window.scrollTo({
		top: 750,	 
		left: 20,
		behavior: "smooth"
	});
}

window.addEventListener("load", function(){
	let form = document.getElementById("robogerForm");
	form.addEventListener("submit", robogerSubmit);
})
