window.addEventListener("load", () => {
  console.log(products);
  localStorage.setItem("products", JSON.stringify(products));
});
