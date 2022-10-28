function resetCardElement(element, text) {
  element.textContent = text;
}

function resetCard() {
  for (const el of cardNumberElement.children) {
    resetCardElement(el, "XXXX");
  }
  resetCardElement(expiryMonthElement, "MM");
  resetCardElement(expiryYearElement, "YY");
  resetCardElement(cvvElement, "XXX");
  resetCardElement(ownerNameElement, "Name");
}

function isError(element, message) {
  element.nextElementSibling.classList.add("text-red-700");
  element.classList.add("!border-red-700");
  element.nextElementSibling.textContent = message;
  element.focus();
}
function isNotError(element) {
  element.nextElementSibling.textContent = "";
  element.classList.remove("!border-red-700");
}

function editCardNumber(value, arr, from, to, index) {
  let val = value.slice(from, to);
  val = val.padEnd(4, "X");
  arr[index].textContent = val;
}
