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
      let isString = false
      value.split("").forEach((el, i) => {
        checkInputFormat(!/^\d+$/.test(el), cardNumber, "only numbers");
      });
      if(isString) return
      // split card number into array of 4 and pass it to editCardNumber function
      if (value.length >= 17) return;
      if (value.length === 0) {
        resetCard();
      } else {
        editCardNumber(value, cardNumberElement.children, 0, 4, 0);
        editCardNumber(value, cardNumberElement.children, 4, 8, 1);
        editCardNumber(value, cardNumberElement.children, 8, 12, 2);
        editCardNumber(value, cardNumberElement.children, 12, 16, 3);
      }
      // fainly check if card number is less than 16 then add error message

      break;
    case "expiry-year":
      let yearCondition = !/^\d+$/.test(value) || value.length > 2;
      checkInputFormat(
        yearCondition,
        expiryYear,
        value.length > 2 ? "YY" : "only numbers"
      );

      if (value.length > 2) return;
      expiryYearElement.textContent = value.padStart(2, "0");
      break;
    case "expiry-month":
      let monthCondition = !/^\d+$/.test(value) || value.length > 2;
      checkInputFormat(
        monthCondition,
        expiryMonth,
        value.length > 2 ? "MM" : "only numbers"
      );

      expiryMonthElement.textContent = value.padStart(2, "0");
      break;
    case "cvv":
      let cvv_condition =
        !/^\d+$/.test(value) || value.length > 3 || value.length < 3;
      let message =
        value.length > 3 || value.length < 3 ? "XXX" : "only numbers";

      checkInputFormat(cvv_condition, cvv, message);

      cvvElement.textContent = value.padEnd(3, "x");
      break;
    default:
      break;
  }
}
