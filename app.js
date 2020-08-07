const productsDOM = document.querySelector(".products-center");

class Product {
  async getProducts() {
    try {
      const allProducts = products.map((product) => {
        const { title, price, id, images } = product;

        return { id, title, price, images };
      });

      return allProducts;
    } catch (error) {
      console.error(error);
    }
  }
}

function redirect(id) {
  // console.log(id);

  window.location.href = `./product-page.html#${id}`;
  // window.location.hash = id;
}

class UI {
  displayProducts(products) {
    let result = "";

    products.forEach((product) => {
      result += `       
            <article class="product" onclick="redirect(${product.id})">
                    <div class="img-container">
                        <a >
                            <img src="${product.images.preview}" alt="product" class="product-img" />
                        </a>

                        <h3>${product.title}</h3>
                        <h4>€ ${product.price}</h4>
                    </div>
              </article>
            `;
    });

    productsDOM.innerHTML = result;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const product = localStorage.getItem("products");
  console.log(products);

  // setup app
  // ui.setupApp();

  ui.displayProducts(products);
});

$(document).ready(function () {
  $("img").click(function (e) {
    var newclass = $(this).attr("id");
    var oldclass = $("#full-size").attr("class");
    $("#full-size").fadeOut(function () {
      $("#full-size").removeClass(oldclass).addClass(newclass).fadeIn("show");
    });
  });
});

showCart = () => {
  cartOverlay.classList.add("transparentBcg");
  cartDOM.classList.add("showCart");
};
