$(document).ready(function () {
  $(".menu-mobi").click(function () {
    $(this).toggleClass("active");
    $("#header-bottom > *").toggleClass("nav-active");
    if ($("#header-bottom > *").hasClass("nav-active")) {
      $("body").addClass("no-scroll");
    } else {
      $("body").removeClass("no-scroll");
    }
  });
  $(".slider").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    items: 1,
  });

  $(".list-posts").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".related-posts").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  $(".our-team").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".our-awards").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 8000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
  $(".testi").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
  var btn = $("#back-to-top");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});

var url = new URL(window.location.href);
var id = url.searchParams.get("id");
// let cart = [];
function saveCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}
function loadCart() {
  cart = JSON.parse(localStorage.getItem("shoppingCart"));
}
if (localStorage.getItem("shoppingCart") != null) {
  loadCart();
}
function getCount() {
  let count = document.querySelector(".top-bar-nav .fa-shopping-cart");
  count.setAttribute(
    "data-count",
    cart.reduce((counts, count) => counts + count.count, 0)
  );
  if (cart.length != 0) {
    count.classList.add("count");
  } else {
    count.classList.remove("count");
  }
}
setTimeout(getCount);
function formatCash(str) {
  str = String(str);
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}
