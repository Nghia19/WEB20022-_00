function displayCheckout() {
  let output = "";
  for (let i in cart) {
    let sum = cart[i].price * cart[i].count;
    output += `
    <tr class="cart_item">
              <td class="product-name">
              ${cart[i].name}
                <strong class="product-quantity">× ${cart[i].count}</strong>
              </td>
              <td class="product-total">
              <span class="price">
                <span class="unit-price">${formatCash(sum)}</span>
                <sup>đ</sup>
              </span>
              </td>
            </tr>`;
  }
  document.getElementById("show-checkout").innerHTML = output;
  let sum = cart.reduce((sum, item) => sum + item.count * item.price, 0);
  document.querySelector(".subtotal").innerHTML = formatCash(sum);
  document.querySelector(".total").innerHTML = formatCash(sum + 30000);
  if (cart.length == 0) {
    document.querySelector(".yproduct").style.display = "none";
    document.querySelector(".nproduct").style.display = "flex";
  }
}
displayCheckout();
