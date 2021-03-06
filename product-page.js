console.log("products", PRODUCTS_LIST);

function redirect(id) {
  // console.log(id);
  window.location.href = `./product-page.html#${id}`;
  // window.location.hash = id;
}

fadingImages = (event) => {
  let images = document.getElementsByClassName(
    "product-left-content-gallery-image"
  );

  for (let image of images) {
    image.classList.remove("product-left-content-active-image");
  }

  event.target.classList.add("product-left-content-active-image");

  document
    .getElementsByClassName("product-left-content-chosen-image")[0]
    .setAttribute("src", event.target.src);
};

class ProductPage {
  constructor() {
    const { hash } = window.location;
    // console.log(hash, "hash");
    if (!hash) {
      window.location.href = "/";
    }
    const params = hash.split("#");

    //const products = JSON.parse(localStorage.getItem("products"));

    this.product = PRODUCTS_LIST.filter(
      (p) => p.id === parseInt(params[1], 10)
    )[0];

    console.log("this.product", this.product);
  }

  render = () => {
    // console.log(this.product, "test");
    const el = document.querySelector("#test");
    const otherEl = document.querySelector("#test2");
    const myHTML = `
            <div class="product-left-content">
                <div>
                    <div class="product-left-name-and-price display-none display-medium"><span
                            class="product-left-content-name">${this.product.title}</span><span
                            class="product-left-content-price">€${this.product.price}</span></div><img
                         class="product-left-content-chosen-image"
                        src="${this.product.image}" alt="${this.product.title}">
                </div>
                <div class="product-left-content-gallery"><img onclick="fadingImages(event)"
                        class="product-left-content-gallery-image product-left-content-active-image" alt="model"
                        src="${this.product.image2}"><img onclick="fadingImages(event)"
                        class="product-left-content-gallery-image" alt="model"
                        src="${this.product.image3}"><img onclick="fadingImages(event)"
                        class="product-left-content-gallery-image" alt="model"
                        src="${this.product.image4}"><img onclick="fadingImages(event)"
                        class="product-left-content-gallery-image" alt="model"
                        src="${this.product.image5}"><img onclick="fadingImages(event)"
                        class="product-left-content-gallery-image" alt="model"
                        src="${this.product.image6}"></div>
            </div>
            <div class="product-right-content">
                <div class="product-right-content-information">
                    <div class="product-right-content-name-and-price display-medium-none"><span
                            class="product-right-content-name">${this.product.title}</span><span
                            class="product-right-content-price">€${this.product.price}</span>
                    </div>
                    <pre class="product-right-content-description">${this.product.description}</pre>

                    <button class="product-right-content-button" onclick="addToCartStorage(${this.product.id})">Add
                        to
                        Cart</button>
                    <pre class="product-right-content-second-description">${this.product.description2}</pre>
                </div>
            </div>        

                
        `;

    const restHTML = `
        <div class="product-bottom-title">
          <span>You might also like</span>
        </div>
            <section class="product"><a class="product-link" href="./category-page.html" ><img class="product-image"
                        src="${this.product.otherimg1}" alt="${this.product.title}">
                    <div class="product-image-caption"><span class="product-name">${this.product.title}</span><span
                            class="product-price">€ ${this.product.price}</span></div>
                </a>
            </section>
            <section class="product"><a class="product-link" href="./category-page.html"><img class="product-image"
                        src="${this.product.otherimg2}" alt="${this.product.title}">
                    <div class="product-image-caption"><span class="product-name">${this.product.title}</span><span
                            class="product-price">€ ${this.product.price}</span></div>
                </a></section>
            <section class="product"><a class="product-link" href="./category-page.html"><img class="product-image"
                        src="${this.product.otherimg3}" alt="${this.product.title}">
                    <div class="product-image-caption"><span class="product-name">${this.product.title}</span><span
                            class="product-price">€ ${this.product.price}</span></div>
                </a>
            </section>
        
    `;
    // console.log(myHTML);
    el.innerHTML = myHTML;
    otherEl.innerHTML = restHTML;
  };
}

var productPage = new ProductPage();

document.addEventListener("DOMContentLoaded", () => {
  // console.log("aaaa");
  productPage.render();
});
