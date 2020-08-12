console.log("products", PRODUCTS_LIST);

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
            <div class="fading-image">
                    <div id="full-size" class="slope">
                        <img src="${this.product.images.preview}" alt="product"
                          class="product-img" />
                    </div>
                    <div id="products-center">
                        <article class="product">
                            <div class="img-container">
                                <img id="trees" src="${this.product.images.other[0]}" alt="product"
                                    class="product-img" />

                            </div>
                        </article>
                        <article class="product">
                            <div class="img-container">
                                <img id="drycanyon" src="${this.product.images.other[1]}" alt="product"
                                    class="product-img" />

                            </div>
                        </article>
                        <article class="product">
                            <div class="img-container">
                                <img id="range" src="${this.product.images.other[2]}" alt="product"
                                    class="product-img" />

                            </div>
                        </article>
                        <article class="product">
                            <div class="img-container">
                                <img id="cotton" src="${this.product.images.other[3]}" alt="product"
                                    class="product-img" />

                            </div>
                        </article>
                        <article class="product">
                            <div class="img-container">
                                <img id="material" src="${this.product.images.other[4]}" alt="product"
                                    class="product-img" />
                            </div>
                        </article>
                    </div>
              </div>


              <div class="section">
                    <article class="product">
                        <div class="content">
                            <h3>${this.product.title}</h3>
                            <h4>€${this.product.price}</h4>
                        </div>
                        <div class="description-1">                            
                            <p>
                                ${this.product.description}
                            </p>
                        </div>
                        <div class="button" onclick="addToCartStorage(${this.product.id})">
                            <button class="btn">Add to Cart</button>
                        </div>
                        <div class="description-2">                            
                            <p>${this.product.description}
                            </p>
                        </div>
                    </article>
              </div>    
        

        
        
        `;

    const restHTML = `
        <div class="section-title">
            <h2>You might also like</h2>
        </div>
        <article class="product-bottom">
          <div class="img-container">
            <a href="./product-page.html">
              <img src="${this.product.images.other[1]}" alt="product"
                class="product-img-bottom" /></a>

              <h3>${this.product.title}</h3>
              <h4>€ ${this.product.price}</h4>
          </div>
        </article>
        <article class="product-bottom">
          <div class="img-container">
            <a href="./product-page.html">
              <img src="${this.product.images.other[2]}" alt="product"
                class="product-img-bottom" /></a>

              <h3>${this.product.title}</h3>
              <h4>€ ${this.product.price}</h4>
          </div>
        </article>
        <article class="product-bottom">
          <div class="img-container">
            <a href="./product-page.html">
              <img src="${this.product.images.other[3]}" alt="product"
                class="product-img-bottom" /></a>

              <h3>${this.product.title}</h3>
              <h4>€ ${this.product.price}</h4>
          </div>
        </article>
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
