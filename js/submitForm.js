form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formInputs = [
    owner_name,
    cardNumber,
    expiryMonth,
    expiryYear,
    cvv,
  ].reverse();
  const isFormValid = checkFormValidity(formInputs);
  const isFormNotEmpty = checkForm(formInputs);
  if (isFormNotEmpty && isFormValid) {
    console.log(isFormNotEmpty, isFormValid);
    form.reset();
    // then hide form and show success message
    form.classList.add("hidden");
    successMessage.classList.remove("hidden");
  } else {
    return;
  }
});

// reset form when click successBtn button
successBtn.addEventListener("click", function () {
  resetCard();
  form.reset();
  successMessage.classList.add("hidden");
  form.classList.remove("hidden");
});
