let number1 = "";
let operator = "";
let number2 = "";

function add(num1, num2) {
  display.value = parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
  display.value = num1 - num2;
}

function multiply(num1, num2) {
  display.value = num1 * num2;
}

function divide(num1, num2) {
  if (num2 == 0) {
    display.value = "nice try";
  } else {
    display.value = num1 / num2;
  }
}

function operate(num1, op, num2) {
  if (op == "+") {
    add(num1, num2);
  }
  if (op == "-") {
    subtract(num1, num2);
  }
  if (op == "*") {
    multiply(num1, num2);
  }
  if (op == "/") {
    divide(num1, num2);
  }
}

const numButtons = document.querySelectorAll(".num-btn");
const display = document.querySelector(".display");
numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
    if (operator == "") {
      number1 += button.textContent;
    } else {
      number2 += button.textContent;
    }
  });
});

const clear = document.querySelector(".clear-btn");
clear.addEventListener("click", () => {
  display.value = "";
  number1 = "";
  operator = "";
  number2 = "";
});

const opButtons = document.querySelectorAll(".op-btn");
opButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (number1 !== "" && number2 !== "" && operator !== "") {
      operate(number1, operator, number2);
      number1 = display.value;
      number2 = "";
    }
    display.value += button.textContent;
    operator = button.textContent;
  });
});

const equals = document.querySelector(".eq-btn");
equals.addEventListener("click", () => {
  if (number1 !== "" && number2 !== "" && operator !== "") {
    operate(number1, operator, number2);
  }
});
