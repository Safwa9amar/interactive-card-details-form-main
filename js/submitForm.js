form.addEventListener("submit", (e) => {
  e.preventDefault();
  //check input values if are not empty
  cvv.value.trim() === "" ? isError(cvv, "CVV is required") : isNotError(cvv);

  expiryMonth.value.trim() === ""
    ? isError(expiryMonth, "Expiry Year is required")
    : isNotError(expiryMonth);
  expiryYear.value.trim() === ""
    ? isError(expiryYear, "Expiry Month is required")
    : isNotError(expiryYear);
  cardNumber.value.trim() === ""
    ? isError(cardNumber, "Card Number is required")
    : isNotError(cardNumber);
  owner_name.value.trim() === ""
    ? isError(owner_name, "Name is required")
    : isNotError(owner_name);
});
