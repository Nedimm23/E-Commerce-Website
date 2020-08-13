const productsDOM = document.querySelector(".products-center");
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");

const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");

const cartStorageKey = "cartStorage";

class Product {
  async getProducts() {
    try {
      const allProducts = PRODUCTS_LIST.map((product) => {
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
  displayProducts() {
    let result = "";

    PRODUCTS_LIST.forEach((product) => {
      result += `       
            <article class="product" onclick="redirect(${product.id})">
                    <div class="img-container">
                        <a >
                            <img src="${product.image}" alt="product" class="product-img" />
                        </a>

                        <p>${product.title}</p>
                        <span>€ ${product.price}</span>
                    </div>
              </article>
            `;
    });

    productsDOM.innerHTML = result;
  }
}

getProductById = (productId) => {
  let out;
  PRODUCTS_LIST.forEach((product) => {
    if (product.id === productId) {
      out = product;
      return;
    }
  });

  return out;
};

getCartProductFromStorage = () => {
  let products,
    productsString = localStorage.getItem(cartStorageKey);
  if (productsString === null) {
    products = [];
  } else {
    products = JSON.parse(productsString);
  }

  return products;
};

addToCartStorage = (productId) => {
  let products = getCartProductFromStorage();

  products.push(productId);

  localStorage.setItem(cartStorageKey, JSON.stringify(products));
  renderCartCount();
};

removeFromCartStorage = (index) => {
  let products = getCartProductFromStorage();

  products.splice(index, 1);

  localStorage.setItem(cartStorageKey, JSON.stringify(products));
  renderCartProducts();
  renderCartCount();
};

getProductsInCart = () => {
  let products = getCartProductFromStorage();

  let productsInCart = [];
  products.forEach((productId) => {
    productsInCart.push(getProductById(productId));
  });

  console.log("productsInCart", productsInCart, products);
  return productsInCart;
};

renderCartCount = () => {
  let products = getCartProductFromStorage();

  cartItems.innerHTML = products.length;
};

renderCartProducts = () => {
  let content = "",
    index = 0,
    products = getProductsInCart();

  products.forEach((product) => {
    content += `       
            <!-- cart item -->
            <div class="cart-item">
                <img src="${product.image}" alt="product" />
                <div>
                    <h4>${product.title}</h4>
                    <h5>€${product.price} x 1</h5>
                    <span class="remove-item" onclick="removeFromCartStorage(${index})">remove</span>
                </div>
            </div>
            <!-- end of cart item -->
            `;
    index++;
  });

  cartContent.innerHTML = content;
};

calculationPrice = () => {
  let subtotal = 0;
  let taxPercent = 17;

  cartProducts.forEach((cartProduct) => {
    subtotal += cartProduct.price * cartProduct.quantity;
  });

  let taxes = Math.round(subtotal * (taxPercent / 100));

  setSubtotal(subtotal);
  setTaxes(taxes);
  setTotal(subtotal + taxes);
};

setCartValues = () => {
  let tempTotal = 0;
  let itemsTotal = 0;
  cartProducts.map((cartProduct) => {
    tempTotal += cartProduct.price * cartProduct.amount;
    itemsTotal += cartProduct.amount;
  });
  cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
  cartItems.innerText = itemsTotal;
};

showCart = () => {
  renderCartProducts();
  cartOverlay.classList.add("transparentBcg");
  cartDOM.classList.add("showCart");
};

hideCart = () => {
  cartOverlay.classList.remove("transparentBcg");
  cartDOM.classList.remove("showCart");
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 0 && window.innerWidth > 575.98) {
    document.getElementsByClassName("cart")[0].classList.add("extend");
  } else {
    document.getElementsByClassName("cart")[0].classList.remove("extend");
  }
});

sideDrawer = () => {
  let header = document.getElementsByClassName("header")[0];
  let menus = document.getElementsByClassName("navigation-menu");

  for (let menu of menus) {
    if (menu.classList.contains("display-small-none")) {
      menu.classList.remove("display-small-none");
      header.classList.add("sideDrawer-header");
    } else {
      menu.classList.add("display-small-none");
      header.classList.remove("sideDrawer-header");
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const product = localStorage.getItem("products");
  // console.log(products);

  // setup app
  // ui.setupApp();

  ui.displayProducts();
});

$(document).ready(function () {
  renderCartCount();
  $("img").click(function (e) {
    var newclass = $(this).attr("id");
    var oldclass = $("#full-size").attr("class");
    $("#full-size").fadeOut(function () {
      $("#full-size").removeClass(oldclass).addClass(newclass).fadeIn("show");
    });
  });
});
