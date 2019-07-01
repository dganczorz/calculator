var value;
var input;
var operator;

function handleButton(selectedNumber) {
  input = document.getElementById('input').value;
  if (input == "" && selectedNumber == ".") {
    input = "0.";
    appendCharacterToInputString("0" + selectedNumber);
  }
  else if (input.includes(".") && selectedNumber == ".") {
    alert("You cannot use two commas in number!");
  }
  else {
    input += selectedNumber;
    appendCharacterToInputString(selectedNumber);
  }
}

function appendCharacterToInputString(mark) {
  document.getElementById('input').value += mark;
}

function removeLastCharacter() {
  let resultString = document.getElementById('input').value;
  let currentString = resultString.substr(0, resultString.length - 1);
  document.getElementById('input').value = currentString;
}

function removeAllCharacters() {
  document.getElementById('input').value = "";
  document.getElementById('value').innerHTML = null;
  document.getElementById('operator').innerHTML = null;
  setValue(null);
  setInput(null);
  setOperator(null);
}

function setValue(num) {
  value = num;
  document.getElementById('value').innerHTML = value;
}

function setOperator(op) {
  operator = op;
  document.getElementById('operator').innerHTML = op;
}

function setInput(num) {
  input = num;
  document.getElementById('input').value = input;
}

function storeInputInValue() {
  setValue(input);
  setInput(null);
}

function handleOperator(op) {
  if (value == null) {
    storeInputInValue();
  } else if (value != null && input == null) {
    setValue(value);
  } else {
    evaluateUnaccomplishedOperation(value, input, operator);
  }
  setOperator(op);
}

function evaluateUnaccomplishedOperation(num1, num2, op) {
  if (op != null) {
    setValue(eval(num1 + op + num2));
    setInput(null);
  }
  else if (op == null) {
    setValue(input);
    setInput(null);
  }
}

function calculationOperation() {
  if (value == null && input == null) {
    return;
  } else if (value != null && input == null) {
    return value;
  } else {
    if (operator === "/" && input == "0") {
      handleZeroDivision();
      removeLastCharacter();
      input = null;
    } else {
      evaluateUnaccomplishedOperation(value, input, operator);
      setOperator(null);
    }
  }
}

function handleZeroDivision() {
  alert("Error: Do not divide by zero!");
}