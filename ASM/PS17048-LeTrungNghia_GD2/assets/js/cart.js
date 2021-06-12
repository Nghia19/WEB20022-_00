function displayCart() {
  let output = "";
  for (let i in cart) {
    let sum = cart[i].price * cart[i].count;
    output += `<tr class="cart-item">
    <td class="product-thumbnail">
      <a href="./san-pham.html?id=${cart[i].id}">
        <img width="90" height="90" src="./assets/img/product-${
          cart[i].id
        }-150x150.jpg" />
      </a>
    </td>
    <td class="product-name">
      <a href="./san-pham.html?id=${cart[i].id}">${cart[i].name}</a>
    </td>
    <td class="product-price" data-title="Giá" data-price="${cart[i].price}">
      <span class="price">
        <span> ${formatCash(cart[i].price)}</span>
        <sup>đ</sup>
      </span>
    </td>
    <td class="product-quantity" data-title="Số lượng">
      <div class="quantity">
        <button class="minus-btn" type="button" name="button" onclick="buttonMinusPlus(this, -1)">
          -
        </button>
        <input type="text" name="quantity" value="${
          cart[i].count
        }" onchange="changeQuantity(this)" />
        <button class="plus-btn" type="button" name="button" onclick="buttonMinusPlus(this, +1)">
          +
        </button>
      </div>
    </td>
    <td class="product-subtotal" data-price="${cart[i].price}">
      <span class="price" style=" margin-left: auto; ">
        <span>${formatCash(sum)}</span>
        <sup>đ</sup>
      </span>
    </td>
    <td class="product-remove">
      <i class="far fa-times-circle remove" onclick="removeItemFromCartAll(this)"></i>
    </td>
  </tr>`;
  }
  document.getElementById("show-cart").innerHTML = output;
  if (cart.length == 0) {
    document.querySelector(".yproduct").style.display = "none";
    document.querySelector(".nproduct").style.display = "flex";
  }
  subTotal();
}
displayCart();

function removeItemFromCartAll(e) {
  var name = e.closest("tr").getElementsByClassName("product-name");
  for (var item in cart) {
    if (cart[item].name === name[0].innerText) {
      cart.splice(item, 1);
      break;
    }
  }
  e.closest("tr").classList.add("remove");
  setTimeout(() => e.closest("tr").remove(), 500);
  setTimeout(() => {
    if (cart.length == 0) {
      document.querySelector(".yproduct").style.display = "none";
      document.querySelector(".nproduct").style.display = "flex";
    }
  }, 500);
  subTotal();
  saveCart();
  getCount();
}
function subTotal() {
  let sum = cart.reduce((sum, item) => sum + item.count * item.price, 0);
  document.querySelector(".subtotal").innerHTML = formatCash(sum);
  document.querySelector(".total").innerHTML = formatCash(sum);
}
function setCountForItem(name, count) {
  for (let i in cart) {
    if (cart[i].name === name) {
      cart[i].count = count;
      break;
    }
  }
}
function changeQuantity(e) {
  var name = e.closest("tr").getElementsByClassName("product-name");
  var input = e.closest("tr").querySelector("input[name=quantity]");
  var value = parseInt(input.value);
  if (value < 1) {
    value = 1;
  } else if (value > 100) {
    value = 100;
  }
  var getPrice = e
    .closest("tr")
    .querySelector(".product-subtotal")
    .getAttribute("data-price");
  let setPrice = e.closest("tr").querySelector(".product-subtotal .price span");
  let sum = value * getPrice;
  setPrice.innerHTML = formatCash(String(sum));
  setCountForItem(name[0].innerText, value);
  subTotal();
  saveCart();
  getCount();
}

function buttonMinusPlus(e, number) {
  var name = e.closest("tr").getElementsByClassName("product-name");
  var input = e.closest("div").querySelector("input");
  var value = parseInt(input.value);

  if (value <= 1 && number == -1) {
    value = 1;
  } else if (value >= 100 && number == +1) {
    value = 100;
  } else {
    value += number;
  }
  input.value = value;
  var getPrice = e
    .closest("tr")
    .querySelector(".product-subtotal")
    .getAttribute("data-price");
  let setPrice = e.closest("tr").querySelector(".product-subtotal .price span");
  let sum = value * getPrice;
  setPrice.innerHTML = formatCash(String(sum));
  setCountForItem(name[0].innerText, value);
  subTotal();
  saveCart();
  getCount();
}
