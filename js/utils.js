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
  element.nextElementSibling.textContent = message;
  element.nextElementSibling.classList.add("text-red-700");
  element.classList.add("!border-red-700");
  //add shack animation
  element.classList.add("animate-shake");
  element.focus();
}
function isNotError(element) {
  element.nextElementSibling.textContent = "";
  element.classList.remove("!border-red-700");
  //remove shake animation
  element.classList.remove("animate-shake");
}

function editCardNumber(value, arr, from, to, index) {
  let val = value.slice(from, to);
  val = val.padEnd(4, "X");
  arr[index].textContent = val;
}

// check input format
function checkInputFormat(condition, element, message) {
  condition ? isError(element, `wrong format,${message}`) : isNotError(element);
}

//create function that take argument as array loop through all form input  and check if they not empty
function checkForm(formInputs) {
  let isFormValid = true;
  for (const input of formInputs) {
    if (input.value === "") {
      isError(input, input.name + " can't be blank");
      isFormValid = false;
    } 
  }
  return isFormValid;
}

// crea function that check if all form input are valid then return true else return false
function checkFormValidity(formInputs) {
  let isFormValid = true;
  for (const input of formInputs) {
    if (input.nextElementSibling.textContent !== "") {
      isFormValid = false;
    }
  }
  return isFormValid;
}
