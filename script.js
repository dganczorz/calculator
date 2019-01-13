window.onload = function () {

}

var value;
var input;
var operator;

function handleButton(selectedNumber) {
  input = document.getElementById('input').value;
  input += selectedNumber;
  appendCharacterToResultString(selectedNumber);
}

function appendCharacterToResultString(mark) {
  document.getElementById('input').value += mark;
}

function removeLastCharacter() {
  let resultString = document.getElementById('input').value;
  let currentString = resultString.substr(0, resultString.length - 1);
  document.getElementById('input').value = currentString;
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
  setValue(eval(num1 + op + num2));
  setInput(null);
}

function calculationOperation() {
  if (value == null && input == null) {
    return;
  } else {
    evaluateUnaccomplishedOperation(value, input, operator);
    setOperator(null);
  }
}