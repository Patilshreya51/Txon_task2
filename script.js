let screen = document.getElementById('result');
let exp = '';

function addToScreen(value) {
	exp += value;
	screen.value = exp;
}

function clearScreen() {
	exp = '';
	screen.value = '';
}

function calculate() {
	let result = eval(exp);
	screen.value = result;
	exp = '';
}