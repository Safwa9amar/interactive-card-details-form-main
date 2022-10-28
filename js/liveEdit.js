document.addEventListener("DOMContentLoaded", resetCard());

document.addEventListener("input", (e) => {
  inputHandler(e);
});

//create handling all input changes for form
function inputHandler(e) {
  const { value } = e.target;
  const elementId = e.target.id;
  switch (elementId) {
    case "name":
      if (value.length >= 35) {
        isError(owner_name, "Name is too long");
      } else {
        isNotError(owner_name);
      }
      if (value.length >= 35) return;
      if (value.length === 0) {
        ownerNameElement.textContent = "Owner Name";
      } else {
        ownerNameElement.textContent = value;
      }
      break;
    case "card-number":
      let len = value.length;
      let childrens = cardNumberElement.children;
      if (len <= 4) editCardNumber(value, childrens, 0, 4, 0);
      if (len >= 4 && len <= 8) editCardNumber(value, childrens, 4, 8, 1);
      if (len >= 8 && len <= 12) editCardNumber(value, childrens, 8, 12, 2);
      if (len >= 12 && len <= 16) editCardNumber(value, childrens, 12, 16, 3);
      break;
    case "expiry-year":
      expiryYearElement.textContent = value;
      break;
    case "expiry-month":
      expiryMonthElement.textContent = value;
      break;
    case "cvv":
      cvvElement.textContent = value;
      break;
    default:
      break;
  }
}


