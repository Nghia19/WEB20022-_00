function Item(id, name, price, count) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.count = count;
}

let addCart = document.querySelectorAll(".add-the-cart a");
for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", function (e) {
    setTimeout(
      () => document.querySelector(".cart-side").classList.add("active"),
      1200
    );
    e.preventDefault();
    let idProduct = this.getAttribute("data-id")
      ? this.getAttribute("data-id")
      : id;
    let index = PRODUCTLIST.findIndex((element) => element.id == idProduct);
    let quantity = document.getElementsByName("quantity")[i];
    quantity = quantity ? quantity.value : 1;
    let name = PRODUCTLIST[index].title;
    let price = PRODUCTLIST[index].price;
    let sizes = swatches[i].querySelectorAll("input[name *='size']");
    let size = () => {
      for (let i = 0; i < sizes.length; i++) {
        if (sizes[i].checked) return [sizes[i].value, i];
      }
    };
    addItemToCart(
      idProduct,
      name + " - " + size()[0],
      price + size()[1] * 20000,
      Number(quantity)
    );
    getCount();
    displayMiniCart();
  });
}

function addItemToCart(id, name, price, count) {
  for (let item in cart) {
    if (cart[item].name === name) {
      cart[item].count += count;
      saveCart();
      return;
    }
  }
  let item = new Item(id, name, price, count);
  cart.push(item);
  saveCart();
}

if (id) {
  let index = PRODUCTLIST.findIndex((element) => element.id == id);
  let cccc = `
<h1 class="entry-title product-title">${PRODUCTLIST[index].title}</h1>
<div class="product-rating">
  <div class="star-rating">
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
  </div>
  <a href="#reviews" class="review-link" rel="nofollow">
    (<span class="count">5</span> Đánh giá)
  </a>
</div>
<span class="price product-price" data-price="${PRODUCTLIST[index].price}">
  <span class="unit-price"></span>
  <sup>đ</sup>
</span>
<div class="product-short-description">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, vel
    veritatis facere natus sed consectetur ducimus ea, nulla libero a
    inventore accusamus similique eum cum! Nesciunt accusantium
    inventore earum neque?
  </p>
</div>

<div class="swatches">
  <div class="swatch">
    <div class="header">KÍCH THƯỚC</div>
    <div data-value="M" class="swatch-element plain m available">
      <input
        id="swatch-${id}-m"
        type="radio"
        name="size-${id}"
        value="M"
        checked
      />
      <label for="swatch-${id}-m"> M </label>
    </div>
    <div data-value="L" class="swatch-element plain l available">
      <input id="swatch-${id}-l" type="radio" name="size-${id}" value="L" />
      <label for="swatch-${id}-l"> L </label>
    </div>
    <div data-value="XL" class="swatch-element plain xl available">
      <input id="swatch-${id}-xl" type="radio" name="size-${id}" value="XL" />
      <label for="swatch-${id}-xl"> XL </label>
    </div>
    <div data-value="XXL" class="swatch-element plain xxl available">
      <input id="swatch-${id}-xxl" type="radio" name="size-${id}" value="XXL" />
      <label for="swatch-${id}-xxl"> XXL </label>
    </div>
  </div>
</div>`;
  document.getElementById("cc").innerHTML = cccc;
}

let prices = document.getElementsByClassName("price");
let swatches = document.querySelectorAll(".swatches");
function setSize() {
  for (let index = 0; index < prices.length; index++) {
    let getSize = swatches[index].querySelectorAll("input[name *='size']");
    let getPrice = prices[index].getAttribute("data-price");
    for (let i = 0; i < getSize.length; i++) {
      getSize[i].addEventListener("click", function () {
        document.querySelectorAll(".unit-price")[index].innerText = formatCash(
          Number(getPrice) + i * 20000
        );
      });
    }
  }
}
setSize();
function setUnitPrice() {
  for (let i = 0; i < prices.length; i++) {
    prices[i].querySelector(".unit-price").innerText = formatCash(
      prices[i].getAttribute("data-price")
    );
  }
}
setUnitPrice();

let minus = document.querySelector(".minus-btn");
let plus = document.querySelector(".plus-btn");
if (minus) {
  minus.addEventListener("click", function (e) {
    e.preventDefault();
    var input = this.closest("div").querySelector("input");
    var value = parseInt(input.value);
    if (value > 1) {
      value = value - 1;
    } else {
      value = 1;
    }
    input.value = value;
  });
}
if (plus) {
  plus.addEventListener("click", function (e) {
    e.preventDefault();
    var input = this.closest("div").querySelector("input");
    var value = parseInt(input.value);
    if (value < 100) {
      value = value + 1;
    } else {
      value = 100;
    }
    input.value = value;
  });
}
const cartButtons = document.querySelectorAll(".add-the-cart a");
cartButtons.forEach((button) => {
  button.addEventListener("click", cartClick);
});
function cartClick() {
  let button = this;
  button.classList.add("clicked");
  setTimeout(() => button.classList.remove("clicked"), 1500);
}
