const productsDOM = document.querySelector(".products-center");
const cartBtn = document.querySelector(".cart-btn");

const cartModal = document.querySelector(".cart");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-main-content");

const cartSum = document.querySelector(".cart-footer");

const cartStorageKey = "cartStorage";

class Product {
  async getProducts() {
    try {
      const allProducts = PRODUCTS_LIST.map((product) => {
        const { title, price, id, image } = product;

        return { id, title, price, image };
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

function checkoutRedirect() {
  window.location.href = "/pages/checkout-page.html";
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
  renderCartProducts();
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
  const el = document.querySelector("#footer");
  let content = "",
    index = 0,
    products = getProductsInCart();
  let subtotal = 0;
  let taxPercent = 17;
  let taxes = 0;
  let total = 0;

  products.forEach((product) => {
    subtotal += product.price;
    content += `                               
                                                 
                  <section class="cart-product">
                        <div class="product-link">                        
                          <img class="product-image" src="${product.image}" alt="Product">
                            <div class="product-image-caption"><span class="cart-product-name">${product.title}</span><span
                                class="cart-product-price">€${product.price}</span><span class="product-quantity"> x 1</span>
                                <span class="remove-item" onclick="removeFromCartStorage(${index})">remove</span>
                            </div>                      
                        </div>                        
                  </section>

                
                     
            `;
    index++;
  });

  taxes = Math.round(subtotal * (taxPercent / 100));
  total = subtotal + taxes;

  const myHTML = `     
        
           <div class="cart-subtotal"><span>Subtotal</span><span class="cart-value">€${subtotal}</span></div>
           <div class="cart-taxes"><span>Taxes</span><span class="cart-value">€${taxes}</span></div>
           <div class="cart-total"><span>Total</span><span style="color: #000000;" class="cart-value">€${total}</span></div>
           <div class="cart-checkout"><a class="block-button" onclick="checkoutRedirect()">Checkout</a></div>    
                       
      `;

  cartContent.innerHTML = content;
  el.innerHTML = myHTML;
};

openAndCloseCartModal = () => {
  renderCartProducts();

  let cart = document.getElementsByClassName("cart")[0];

  if (cart.classList.contains("display-none")) {
    cart.classList.remove("display-none");
    cart.classList.add("display-block");
  } else {
    cart.classList.remove("display-block");
    cart.classList.add("display-none");
  }
};

choosePaymentOption = (method, event) => {
  var method = document.getElementById("method").value;
  let paymentMethods = document.getElementsByClassName(
    "checkout-payment-method"
  );

  for (let paymentMethod of paymentMethods) {
    if (paymentMethod.classList.contains("checkout-chosen-method"))
      paymentMethod.classList.remove("checkout-chosen-method");
  }

  event.target.classList.add("checkout-chosen-method");

  localStorage.setItem("txtpaymentMethod", method);
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 0 && window.innerWidth > 575.98) {
    document
      .getElementsByClassName("cart-header")[0]
      .classList.add("cart-header-expand");
    document
      .getElementsByClassName("cart-main-content")[0]
      .classList.add("cart-main-content-expand");
  } else {
    document
      .getElementsByClassName("cart-header")[0]
      .classList.remove("cart-header-expand");
    document
      .getElementsByClassName("cart-main-content")[0]
      .classList.remove("cart-main-content-expand");
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

  ui.displayProducts(product);
});

$(document).ready(function () {
  renderCartCount();
  renderCartProducts();
});
