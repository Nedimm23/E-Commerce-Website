window.addEventListener("load", () => {
  // console.log(products);
  localStorage.setItem("products", JSON.stringify(products));
});

window.addEventListener("load", () => {
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
});
