// Business Logic

function roboger(numInput) {
	const robogerInput = parseInt(numInput);
	const robogerError = "It is not a wonderful day in the neighborhood."
	if (isNaN(robogerInput) || typeof robogerInput != 'number') {
		return robogerError
	} else {
		return robogerInput
	}
}