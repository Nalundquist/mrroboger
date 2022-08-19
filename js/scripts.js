// Business Logic


function roboger(numInput) {
	const robogerInput = parseInt(numInput);
	const robogerError = "It is not a wonderful day in the neighborhood.";
	let robogerResult = "";
	const robogerOutput = []
	if (isNaN(robogerInput) || typeof robogerInput != 'number' || robogerInput < 0) {
		console.log("Inside error conditional")
		robogerResult = robogerError;
		return robogerResult
	} else {
		for (i = 0; i <= robogerInput; i++) {
			robogerOutput.push(i);
			console.log(i);
		}
	}
	const robogerString = robogerOutput.map(function(num) {
		return num.toString();
	})
	for (i = 0; i < robogerString.length; i++){
		const robogerIndex = robogerString[i];
		console.log(robogerIndex)
		if (robogerIndex === "143"){
			robogerString[i] = '"I love you."'
		} else if (robogerIndex.includes(3)){
			robogerString[i] = '"Won\'t you be my neighbor?"';
		} else if (robogerIndex.includes(2)){
			robogerString[i] = '"Boop!"';
		} else if (robogerIndex.includes(1)){
			robogerString[i] = '"Beep!"';
		} else {

		}
	}
	for (i = 1; i < robogerString.length; i++) {
		const robogerIndex = robogerString[i];
		console.log("Inside concat conditional");
		const preSpace = " ";
		robogerString[i] = preSpace.concat(robogerIndex);
	}
	if (robogerResult != robogerError){
		console.log("Inside valid result conditional")
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

	const p = document.createAttribute("p");
	p.append(resultDisplay);
	robogerResult.append(p);
	resultDisplay.setAttribute("class", "robogerDisplay");
	console.log(robogerResult)
}

window.addEventListener("load", function(){
	let form = document.getElementById("robogerForm");
	form.addEventListener("submit", robogerSubmit)
})
