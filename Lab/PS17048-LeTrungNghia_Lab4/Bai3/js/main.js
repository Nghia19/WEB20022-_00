let gallery = document.querySelectorAll(".gallery .item img");
let mySlidesc = "";
for (let i = 0; i < gallery.length; i++) {
  mySlidesc += ` <div class="mySlides">
<img src="${gallery[i].src}">
</div>`;
}
document.querySelector(".modal-content").innerHTML = mySlidesc;
let modalSlder = document.querySelectorAll(".modal-content .mySlides");
let slides = document.querySelectorAll(".gallery .item");
for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener("click", function () {
    console.log("s");
    openModal();
    showSlides((slideIndex = i + 1));
    this.classList.add("active");
  });
}
function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.querySelector("body").style.overflow = "visible";
}
let slideIndex = 1;
function plusSlides(n) {
  showSlides((slideIndex += n));
}
document.querySelector(".next").addEventListener("click", () => plusSlides(+1));
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
showSlides(slideIndex);

function showSlides(n) {
  let i;
  if (n > gallery.length) slideIndex = 1;
  if (n < 1) slideIndex = gallery.length;
  for (i = 0; i < gallery.length; i++) {
    modalSlder[i].style.display = "none";
  }
  modalSlder[slideIndex - 1].style.display = "block";
}
