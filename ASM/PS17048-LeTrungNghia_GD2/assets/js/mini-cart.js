let miniCartTotal = document.querySelector(".mini-cart-total");
let noProduct = `<li class="mini-cart-item" style=" color: var(--primary-color); ">Không có sản phẩm nào trong giỏ</li>`;
function displayMiniCart() {
  let output = "";
  for (let i in cart) {
    output += `
    <li class="mini-cart-item">
      <i class="far fa-times-circle remove" onclick="removeItem(this)"></i>
      <a href="./san-pham.html?id=${cart[i].id}" class="product-thumbnail">
        <img src="./assets/img/product-${cart[i].id}-150x150.jpg" />
      </a>
      <div class="text">
        <a href="./san-pham.html?id=${cart[i].id}" class="product-name">
          ${cart[i].name}
        </a>
        <p>
          <strong class="product-quantity">${cart[i].count} ×</strong>
          <span class="price-mini-cart">
            <span class="unit-price">${formatCash(cart[i].price)}</span>
            <sup>đ</sup>
          </span>
        </p>
      </div>
  </li>
  `;
  }
  if (cart.length == 0) {
    output = noProduct;
    miniCartTotal.style.display = "none";
  } else {
    miniCartTotal.style.display = "block";
  }
  document.getElementById("mini-cart").innerHTML = output;
  subTotalMiniCart();
}
if (localStorage.getItem("shoppingCart") != null) {
  displayMiniCart();
}
function subTotalMiniCart() {
  let sum = cart.reduce((sum, item) => sum + item.count * item.price, 0);
  document.querySelector(".total").innerHTML = formatCash(sum);
}
function removeItem(e) {
  var name = e.closest("li").getElementsByClassName("product-name");
  for (var item in cart) {
    if (cart[item].name === name[0].innerText) {
      cart.splice(item, 1);
      break;
    }
  }
  e.closest("li").classList.add("remove");
  setTimeout(() => e.closest("li").remove(), 500);
  subTotalMiniCart();
  saveCart();
  getCount();
  if (cart.length == 0) {
    setTimeout(() => {
      document.getElementById("mini-cart").innerHTML = noProduct;
      miniCartTotal.style.display = "none";
    }, 500);
  }
}

let cartSide = document.querySelector(".cart-side");
document.querySelector(".mini-cart").addEventListener("click", function (e) {
  e.preventDefault();
  cartSide.classList.add("active");
});
function closeCartSide() {
  cartSide.classList.remove("active");
}
document
  .querySelector(".close-cart-side")
  .addEventListener("click", closeCartSide);
document
  .querySelector(".cart-side-overlay")
  .addEventListener("click", closeCartSide);
