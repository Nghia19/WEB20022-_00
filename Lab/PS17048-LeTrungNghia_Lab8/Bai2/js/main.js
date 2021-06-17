document.querySelector("a.menu-toggle").addEventListener("click", function () {
  document.querySelector(".menu nav").classList.add("active");
  document.querySelector(".side-overlay ").classList.add("active");
});
document.querySelector(".side-overlay ").addEventListener("click", function () {
  this.classList.remove("active");
  document.querySelector(".menu nav").classList.remove("active");
});
