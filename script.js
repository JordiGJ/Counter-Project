// get elements
const buttons = document.querySelectorAll("button");
const result = document.querySelector("p");
// variables
let total = 0;
const possibilities = {
  subtract: "subtract",
  reset: "reset",
  add: "add",
};
// functions
function handleClick(e) {
  const target = e.target.id;
  if (target === possibilities.subtract) {
    subtract();
  }
  if (target === possibilities.reset) {
    reset();
    result.classList.remove("red");
    result.classList.remove("green");
  }
  if (target === possibilities.add) {
    add();
  }
  if (total < 0) {
    result.classList.add("red");
  }
  if (total === 0) {
    result.classList.remove("red");
    result.classList.remove("green");
  }
  if (total > 0) {
    result.classList.add("green");
  }
}
function add() {
  total++;
  result.textContent = total;
}
function reset() {
  total = 0;
  result.textContent = total;
}
function subtract() {
  total--;
  result.textContent = total;
}
// eventListeners

buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
