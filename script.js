function isNumber(evt) {
	var iKeyCode = (evt.which) ? evt.which : evt.keyCode
	if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
		 return false;

	return true;
}


function calculate() {
	let inputOne = document.getElementById("inputOne").value;
	if (inputOne == "") {inputOne = "0";}

	let inputTwo = document.getElementById("inputTwo").value;
	if (inputTwo == "") {inputTwo = "0";}

	let operantSelector = document.getElementById("operantSelector").value;
	
	if (operantSelector == "+") {summ(inputOne, inputTwo);}
	else if (operantSelector == "−") {subtract(inputOne, inputTwo);}
	else if (operantSelector == "×") {multiply(inputOne, inputTwo);}
	else if (operantSelector == "÷") {divide(inputOne, inputTwo);}
}

function printToScreen(operator, inputOne, inputTwo, total) {
	inputOne = parseFloat(inputOne);
	inputTwo = parseFloat(inputTwo);
	let previous = document.getElementById("previous");
	let current = document.getElementById("current");

	previous.innerHTML = inputOne.toLocaleString("en") + " " + operator + " " + inputTwo.toLocaleString("en");
	
	if (total == null) {current.innerHTML = "HATA";}
	else {current.innerHTML = total.toLocaleString("en");}
}

function summ(inputOne, inputTwo) {
	let operator = "+";

	let total = parseFloat(inputOne) + parseFloat(inputTwo);
	
	printToScreen(operator, inputOne, inputTwo, total);
}

function subtract(inputOne, inputTwo) {
	let operator = "−";
	
	let total = parseFloat(inputOne) - parseFloat(inputTwo);
	
	printToScreen(operator, inputOne, inputTwo, total);
}

function multiply(inputOne, inputTwo) {
	let operator = "×";
	
	let total = parseFloat(inputOne) * parseFloat(inputTwo);
	
	printToScreen(operator, inputOne, inputTwo, total);
}

function divide(inputOne, inputTwo) {
	let operator = "÷";
	let total;
	
	if (parseFloat(inputTwo) == 0) {total = null;}
	else {total = parseFloat(inputOne) / parseFloat(inputTwo);}
	
	printToScreen(operator, inputOne, inputTwo, total);
}
