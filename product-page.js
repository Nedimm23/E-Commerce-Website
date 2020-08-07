class ProductPage {
  constructor() {
    const { hash } = window.location;
    console.log(hash, "hash");
    if (!hash) {
      window.location.href = "/";
    }
    const params = hash.split("#");
    const products = JSON.parse(localStorage.getItem("products"));
    this.product = products.filter((p) => p.id === parseInt(params[1], 10));
  }

  render() {
    console.log(this.product, "tes");
    const el = document.querySelector("#test");
    const myHTML = `
            <article>
                <h1>${this.product[0].title}</h1>
            </article>
        `;
    console.log(myHTML);
    el.innerHTML = myHTML;
  }

  //   addTOCart nedostaje
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("aaaa");
  const productPage = new ProductPage();
  productPage.render();
});
