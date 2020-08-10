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
