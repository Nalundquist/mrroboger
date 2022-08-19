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
		for (i = 0; i < robogerString.length; i++){
			const robogerIndex = robogerString[i];
			console.log(robogerIndex)
			// if (robogerIndex.includes(1)){
			// 	robogerString[i] = "Beep!"
			// }
		}
		return robogerString;
	}
}