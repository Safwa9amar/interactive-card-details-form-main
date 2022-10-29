//get document form by tag name
const form = document.getElementsByTagName("form")[0];
//get form elements by id
const cvv = document.getElementById("cvv");
const expiryMonth = document.getElementById("expiry-month");
const expiryYear = document.getElementById("expiry-year");
const cardNumber = document.getElementById("card-number");
const owner_name = document.getElementById("name");

//get credit card elements by id
const cardNumberElement = document.getElementById("card_number");
const expiryMonthElement = document.getElementById("card_exipre_m");
const expiryYearElement = document.getElementById("card_exipre_y");
const cvvElement = document.getElementById("card_cvv");
const ownerNameElement = document.getElementById("owner_name");

// get form button by id
const submitBtn = document.getElementById("submit-btn");
//get success message by id
const successMessage = document.getElementById("successMessage");
//get the button from success message element
const successBtn = document.getElementById("success-btn");