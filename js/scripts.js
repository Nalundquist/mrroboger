// Business Logic


function roboger(numInput) {
	const robogerInput = parseInt(numInput);
	const robogerError = "It is not a wonderful day in the neighborhood.  Please supply me with a positive number.";
	const robogerError2 = "That number...It is horrifying to me.  Please choose one smaller.  Under 5000, perhaps."
	let robogerResult = "";
	let robogerOutput = []
	if (isNaN(robogerInput) || typeof robogerInput != 'number' || robogerInput < 0) {
		robogerResult = robogerError;
		return robogerResult;
	} else if (robogerInput >= 5000){
		robogerResult = robogerError2;
		return robogerResult;
	} else {
		console.log("inside final else after error checks")
		for (i = 0; i <= robogerInput; i++) {
			console.log("inside tostring for statement")
			robogerOutput.push(i.toString());
			// const robogerString = robogerOutput.map(function(num) {
			// 	return num.toString();
			// })
			return robogerOutput
		}
			for (i = 0; i < robogerOutput.length; i++){
				const robogerIndex = robogerOutput[i];
				console.log("inside for loop (start)");
				if (robogerIndex === " 143"){
					console.log("inside if loop 143");
					robogerOutput[i] = ' "I love you."'
				} else if (robogerIndex.includes(3)){
					robogerOutput[i] = ' "Won\'t you be my neighbor?"';
				} else if (robogerIndex.includes(2)){
					robogerOutput[i] = ' "Boop!"';
				} else if (robogerIndex.includes(1)){
					robogerOutput[i] = ' "Beep!"';
				} else {
					for (i = 1; i < robogerOutput.length; i++) {
						const robogerIndex = robogerOutput[i];
						const preSpace = " ";
						robogerOutput[i] = preSpace.concat(robogerIndex);
				}
			}
		}
	}
	if (robogerResult != robogerError && robogerResult != robogerError2){
		robogerResult = robogerOutput.toString("");
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
