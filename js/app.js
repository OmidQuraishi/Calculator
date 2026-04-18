"use strict";

const calculatorScreen = document.querySelector(".calculator-screen");
const calculatorButtons = document.querySelectorAll(".calculator-body span");

calculatorButtons.forEach((ele) => {
  ele.addEventListener("click", function () {
    if (ele.dataset.value == "equal") {
      calculatorScreen.textContent = eval(calculatorScreen.textContent);
    } else if (ele.dataset.value == "AC") {
      calculatorScreen.textContent = "";
    } else {
      calculatorScreen.textContent += ele.dataset.value;
    }
  });
});
