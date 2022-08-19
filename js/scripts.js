// Business Logic

function roboger(numInput) {
	const robogerInput = parseInt(numInput);
	const robogerError = "It is not a wonderful day in the neighborhood.";
	let robogerResult = "";
	if (isNaN(robogerInput) || typeof robogerInput != 'number' || robogerInput < 0) {
		console.log("Inside error conditional")
		robogerResult = robogerError;
		return robogerResult
	} else {
		const robogerOutput = []
		for (i = 0; i <= robogerInput; i++) {
			robogerOutput.push(i);
			console.log(i);
		}
		const robogerString = robogerOutput.map(function(num) {
			return num.toString();
		})
		for (i = 0; i < robogerString.length; i++){
			const robogerIndex = robogerString[i];
			console.log(robogerIndex)
			if (robogerIndex.includes(3)){
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
}