// Business Logic

function roboger(numInput) {
	const robogerInput = parseInt(numInput);
	const robogerError = "It is not a wonderful day in the neighborhood."
	if (isNaN(robogerInput) || typeof robogerInput != 'number' || robogerInput < 0) {
		return robogerError
	} else {
		const robogerOutput = []
		for (i = 0; i <= robogerInput; i++) {
			robogerOutput.push(i);
			console.log(i);
		}
		const robogerString = robogerOutput.map(function(num) {
			return num.toString();
		})
		// for (i = 0; i <= robogerOutput.length; i++){
		// 	const robogerIndex = robogerOutput[i].toString();
		// 	if (robogerIndex.includes(1)){
		// 		robogerOutput[i] = "Beep!"
		// 	}
		// }
		return robogerString;
	}
}