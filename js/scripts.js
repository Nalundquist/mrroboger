// Business Logic


function roboger(numInput) {
	const robogerInput = parseInt(numInput);
	const robogerError = "It is not a wonderful day in the neighborhood.  Please supply me with a positive number.";
	const robogerError2 = "That number...It is horrifying to me.  Please choose one smaller.  Under 5000, perhaps."
	let robogerResult = "";
	let robogerOutput = []
	if (typeof robogerInput !== 'number' || robogerInput < 0) {
		robogerResult = robogerError;
		return robogerResult;
	} else if (robogerInput >= 5000){
		robogerResult = robogerError2;
		return robogerResult;
	} else {
		for (i = 0; i <= robogerInput; i++) {
			robogerOutput.push(i.toString());
		}
		for (i = 0; i < robogerOutput.length; i++){
			if (robogerOutput[i] === "143"){
				robogerOutput[i] = ' "I love you."'
			} else if (robogerOutput[i].includes(3)){
				robogerOutput[i] = ' "Won\'t you be my neighbor?"';
			} else if (robogerOutput[i].includes(2)){
				robogerOutput[i] = ' "Boop!"';
			} else if (robogerOutput[i].includes(1)){
				robogerOutput[i] = ' "Beep!"';
			} else {
				const preSpace = " ";
				robogerOutput[i] = preSpace.concat(robogerOutput[i]);
			}
		}
	}
	if (robogerResult != robogerError && robogerResult != robogerError2){
		robogerResult = robogerOutput.toString("");
		return robogerResult;
	}
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
