messageConfirm = () => {
  let option = confirm("Are you sure?");
  if (option === true) {
    window.location.href = "confirm.html";
  } else {
    return false;
  }
};

getCheckoutData = () => {
  //gettting the values
  var email = document.getElementById("email").value;
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var company = document.getElementById("company").value;
  var address = document.getElementById("address").value;
  var apartment = document.getElementById("apartment").value;
  var postalCode = document.getElementById("postalCode").value;
  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;
  var phone = document.getElementById("phone").value;
  // var method = document.getElementById("method").value;

  //saving the values in local storage
  localStorage.setItem("txtemail", email);
  localStorage.setItem("txtfirstname", firstname);
  localStorage.setItem("txtlastname", lastname);
  localStorage.setItem("txtcompany", company);
  localStorage.setItem("txtaddress", address);
  localStorage.setItem("txtapartment", apartment);
  localStorage.setItem("txtpostalCode", postalCode);
  localStorage.setItem("txtcity", city);
  localStorage.setItem("txtcountry", country);
  localStorage.setItem("txtphone", phone);
  // localStorage.setItem("txtpaymentMethod", method);

  return false;
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
// document.getElementById("data-city").innerHTML = localStorage.getItem(
//   "txtcity"
// );
document.getElementById("data-country").innerHTML = localStorage.getItem(
  "country"
);
document.getElementById("data-phone").innerHTML = localStorage.getItem(
  "txtphone"
);
// document.getElementById("data-paymentMethod").innerHTML = localStorage.getItem(
//   "txtpaymentMethod"
// );
