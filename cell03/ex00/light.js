function getColour() {
	const r = Math.floor(Math.random() * 244) + 12;
	const g = Math.floor(Math.random() * 244) + 12;
	const b = Math.floor(Math.random() * 244) + 12;

	document.body.style.background = `rgb(${r}, ${g}, ${b})`;
	console.log("Color displayed: ", r, g, b);
}

function colorBack() {
	document.body.style.background = "black";
}
