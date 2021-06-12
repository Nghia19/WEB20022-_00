const PRODUCTLIST = [
  {
    id: 1,
    title: "Effects Of Time",
    price: 50000,
    label: "HOT",
  },
  {
    id: 2,
    title: "Attribute Variation",
    price: 100000,
    label: "",
  },
  {
    id: 3,
    title: "Fried Chicken",
    price: 80000,
    label: "NEW",
  },
  {
    id: 4,
    title: "Printed A-Line",
    price: 85000,
    label: "NEW",
  },
  {
    id: 5,
    title: "Fit and Flare",
    price: 110000,
    label: "",
  },
  {
    id: 6,
    title: "Flawless",
    price: 55000,
    label: "SALE",
  },
  {
    id: 7,
    title: "Floral Print",
    price: 450000,
    label: "SALE",
  },
  {
    id: 8,
    title: "Solid Straight",
    price: 115000,
    label: "HOT",
  },
  {
    id: 9,
    title: "Fettle Mesh",
    price: 65000,
    label: "",
  },
  {
    id: 10,
    title: "Effects Of Time",
    price: 50000,
    label: "HOT",
  },
  {
    id: 11,
    title: "Attribute Variation",
    price: 100000,
    label: "",
  },
  {
    id: 12,
    title: "Fried Chicken",
    price: 80000,
    label: "NEW",
  },
];
let showProduct = (products, n) => {
  let ccc = ``;
  for (let index = 0; index < n; index++) {
    let label = products[index].label
      ? `<div class="label-new ">${products[index].label}</div>`
      : "";
    ccc += `
<div class="col medium-6 small-12 large-4">
<div class="col-inner">
  <div class="product has-hover">
      <div class="box-image image-zoom">
        ${label}
          <a href="./san-pham.html?id=${products[index].id}">
              <img src="./assets/img/product-${products[index].id}-600x600.jpg" alt="${products[index].title}">
          </a>
      </div>
      <div class="box-text text-center">
          <p class="product-title"><a href="./san-pham.html?id=${products[index].id}">${products[index].title}</a></p>
          <div class="star-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
          </div>
          <div class="swatches">
              <div class="swatch">
                <div data-value="M" class="swatch-element plain m available">
                  <input id="swatch-${products[index].id}-m" type="radio" name="size-${products[index].id}" value="M" checked="">
                  <label for="swatch-${products[index].id}-m"> M </label>
                </div>
                <div data-value="L" class="swatch-element plain l available">
                  <input id="swatch-${products[index].id}-l" type="radio" name="size-${products[index].id}" value="L">
                  <label for="swatch-${products[index].id}-l"> L </label>
                </div>
                <div data-value="XL" class="swatch-element plain xl available">
                  <input id="swatch-${products[index].id}-xl" type="radio" name="size-${products[index].id}" value="XL">
                  <label for="swatch-${products[index].id}-xl"> XL </label>
                </div>
                <div data-value="XXL" class="swatch-element plain xxl available">
                  <input id="swatch-${products[index].id}-xxl" type="radio" name="size-${products[index].id}" value="XXL">
                  <label for="swatch-${products[index].id}-xxl"> XXL </label>
                </div>
              </div>

            </div>
          <span class="price" data-price="${products[index].price}">
              <span class="unit-price"></span>
              <sup>đ</sup>
          </span>
          <div class="add-the-cart">
              <a href="#" data-id="${products[index].id}">
              <i class="fas fa-shopping-cart"></i>
              <i class="fas fa-box"></i>
                  <span>Thêm vào giỏ</span>
              </a>
          </div>
      </div>
  </div>
</div>
</div>`;
  }
  return ccc;
};
let homeProducts = document.querySelector("#list-products .row");
if (homeProducts) {
  homeProducts.innerHTML = showProduct(PRODUCTLIST, 6);
}
let productsfull = document.querySelector("#list-products-full .row");
if (productsfull) {
  productsfull.innerHTML = showProduct(PRODUCTLIST, PRODUCTLIST.length);
}
if (id) {
  let filtered = PRODUCTLIST.filter((value) => value.id != id);
  document.querySelector("#related-products .row.a").innerHTML = showProduct(
    filtered,
    3
  );
}
