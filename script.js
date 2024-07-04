let number1;
let operator;
let number2;

function add(num1, num2) {
  console.log(num1 + num2);
}

function subtract(num1, num2) {
  console.log(num1 - num2);
}

function multiply(num1, num2) {
  console.log(num1 * num2);
}

function divide(num1, num2) {
  console.log(num1 / num2);
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
  });
});

const clear = document.querySelector(".clear-btn");
clear.addEventListener("click", () => {
  display.value = "";
});
