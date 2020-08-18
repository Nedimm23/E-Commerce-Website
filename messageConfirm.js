const messageConfirm = () => {
  let message;
  let option = confirm("Are you sure?");
  if (option === true) {
    message =
      "Thank you for your order, your order will be processed within the next 48 hours!";
    window.location.href = "/";
  }

  document.getElementById("mess").innerHTML = message;
};

document.getElementById("data-email").innerHTML = localStorage.getItem(
  "txtemail"
);
document.getElementById("data-firstname").innerHTML = localStorage.getItem(
  "txtfirstname"
);
document.getElementById("data-lastname").innerHTML = localStorage.getItem(
  "txtlastname"
);
document.getElementById("data-company").innerHTML = localStorage.getItem(
  "txtcompany"
);
document.getElementById("data-address").innerHTML = localStorage.getItem(
  "txtaddress"
);
// document.getElementById("data-apartment").innerHTML = localStorage.getItem(
//   "txtapartment"
// );
document.getElementById("data-postalCode").innerHTML = localStorage.getItem(
  "txtpostalCode"
);
document.getElementById("data-city").innerHTML = localStorage.getItem(
  "txtcity"
);
document.getElementById("data-country").innerHTML = localStorage.getItem(
  "country"
);
document.getElementById("data-phone").innerHTML = localStorage.getItem(
  "txtphone"
);
document.getElementById("data-paymentMethod").innerHTML = localStorage.getItem(
  "txtpaymentMethod"
);
