const SONGLIST = [
  {
    title: "Tình Bạn Diệu Kỳ",
    artists: "AMee, Ricky Star, Lăng LD",
    genre: "Nhạc Trẻ",
    duration: "03:08",
    file: "./mp3/TinhBanDieuKy.mp3",
    thumbnail: "./img/TinhBanDieuKy.jpg",
  },
  {
    title: "Răng Khôn",
    artists: "Phí Phương Anh (The Face), RIN9",
    genre: "Nhạc Trẻ",
    duration: "03:51",
    file: "./mp3/RangKhon.mp3",
    thumbnail: "./img/RangKhon.jpg",
  },
  {
    title: "Nàng Thơ",
    artists: "Hoàng Dũng",
    genre: "Nhạc Trẻ",
    duration: "04:14",
    file: "./mp3/NangTho.mp3",
    thumbnail: "./img/NangTho.jpg",
  },
  {
    title: "Sài Gòn Đau Lòng Quá",
    artists: "Hứa Kim Tuyền, Hoàng Duyên",
    genre: "Nhạc Trẻ",
    duration: "05:08",
    file: "./mp3/SaiGonDauLongQua.mp3",
    thumbnail: "./img/SaiGonDauLongQua.jpg",
  },
  {
    title: "Muộn Rồi Mà Sao Còn",
    artists: "Sơn Tùng M-TP",
    genre: "Pop",
    duration: "04:35",
    file: "./mp3/MuonRoiMaSaoCon.mp3",
    thumbnail: "./img/MuonRoiMaSaoCon.jpg",
  },
  {
    title: "Tháng 4 Là Lời Nói Dối Của Em",
    artists: "Hà Anh Tuấn",
    genre: "Nhạc Trẻ",
    duration: "05:15",
    file: "./mp3/Thang4LaLoiNoiDoiCuaEm.mp3",
    thumbnail: "./img/Thang4LaLoiNoiDoiCuaEm.jpg",
  },
];
let thumbnailSongPlaying = document.querySelector(".music-player img");
let singerSongPlaying = document.querySelector(".song-detail .singer");
let titleSongPlaying = document.querySelector(".song-detail .title");
let sliders = document.querySelectorAll(".slider");
let currentTime = document.querySelector(".current-time");
let progress = document.querySelector(".progress");
let totalTime = document.querySelector(".total-time");
let track = 0;
let audio = document.getElementById("audio");
(function () {
  let listItemHTMl = "";
  SONGLIST.forEach((element) => {
    listItemHTMl += `<div class="list-item">
<div class="song-title">${element.title}</div>
<div class="singer sm-hide">${element.artists}</div>
<div class="song-duration">${element.duration}</div>
<div class="music-genre sm-hide">${element.genre}</div>
</div>`;
    document.getElementsByClassName("song-list")[0].innerHTML = listItemHTMl;
  });
})();
let listItem = document.getElementsByClassName("list-item");
(function () {
  for (let index = 0; index < listItem.length; index++) {
    listItem[index].addEventListener("click", function () {
      let songTitle = this.getElementsByClassName("song-title")[0].innerText;
      SONGLIST.forEach((element, key) => {
        if (songTitle == element.title) track = key;
      });
      songPlaying(track);
      run();
    });
  }
})();
let checkTrack = (index) => {
  if (index < 0) return SONGLIST.length - 1;
  if (SONGLIST.length - 1 < index) return 0;
  return index;
};
document.getElementById("btnNext").addEventListener("click", () => {
  track = checkTrack(track + 1);
  songPlaying(track);
  run();
});
document.getElementById("btnPrev").addEventListener("click", () => {
  track = checkTrack(track + -1);
  songPlaying(track);
  run();
});
document.getElementById("btnPlay").addEventListener("click", function () {
  if (this.classList.contains("active")) {
    document.getElementById("btnPlay").classList.remove("active");
    thumbnailSongPlaying.style.animationPlayState = "running";
    audio.play();
  } else {
    this.classList.add("active");
    audio.pause();
    thumbnailSongPlaying.style.animationPlayState = "paused";
  }
});
document
  .getElementById("btnRestart")
  .addEventListener("click", () => (audio.currentTime = 0));
let checkrandom = false;
document.getElementById("btnRandom").addEventListener("click", function () {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    return (checkrandom = false);
  } else {
    this.classList.add("active");
    return (checkrandom = true);
  }
});

function run() {
  document.getElementById("btnPlay").classList.remove("active");
  thumbnailSongPlaying.style.animationPlayState = "running";
  audio.play();
}
function songPlaying(index) {
  for (let index = 0; index < listItem.length; index++) {
    listItem[index].style.backgroundColor = "";
  }
  audio.src = SONGLIST[index].file;
  listItem[index].style.backgroundColor = "red";
  thumbnailSongPlaying.src = SONGLIST[index].thumbnail;
  titleSongPlaying.innerText = SONGLIST[index].title;
  singerSongPlaying.innerText = SONGLIST[index].artists;
}
songPlaying(0);
audio.addEventListener("loadedmetadata", () => {
  totalTime.textContent = formatTime(audio.duration);
});
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", function (e) {
  track = checkrandom
    ? Math.floor(Math.random() * SONGLIST.length)
    : checkTrack(track + 1);
  songPlaying(track);
  run();
});

function updateProgress() {
  let current = audio.currentTime;
  let percent = (current / audio.duration) * 100;
  progress.style.width = percent + "%";
  currentTime.textContent = formatTime(current);
}
function formatTime(time) {
  var min = Math.floor(time / 60);
  var sec = Math.floor(time % 60);
  return min + ":" + (sec < 10 ? "0" + sec : sec);
}
sliders.forEach((slider) => {
  let pin = slider.querySelector(".pin");
  slider.addEventListener("click", window[pin.dataset.method]);
});
function isDraggable(el) {
  let canDrag = false;
  let classes = Array.from(el.classList);
  draggableClasses.forEach((draggable) => {
    if (classes.indexOf(draggable) !== -1) canDrag = true;
  });
  return canDrag;
}
var draggableClasses = ["pin"];
var currentlyDragged = null;

window.addEventListener("mousedown", function (event) {
  if (!isDraggable(event.target)) return false;
  currentlyDragged = event.target;
  let handleMethod = currentlyDragged.dataset.method;
  this.addEventListener("mousemove", window[handleMethod], false);
  window.addEventListener(
    "mouseup",
    () => {
      currentlyDragged = false;
      window.removeEventListener("mousemove", window[handleMethod], false);
    },
    false
  );
});
function getRangeBox(event) {
  let rangeBox = event.target;
  let el = currentlyDragged;
  if (event.type == "click" && isDraggable(event.target)) {
    rangeBox = event.target.parentElement.parentElement;
  }
  if (event.type == "mousemove") {
    rangeBox = el.parentElement.parentElement;
  }
  return rangeBox;
}
function inRange(event) {
  let rangeBox = getRangeBox(event);
  let rect = rangeBox.getBoundingClientRect();
  let direction = rangeBox.dataset.direction;
  if (direction == "horizontal") {
    var min = rangeBox.offsetLeft;
    var max = min + rangeBox.offsetWidth;
    if (event.clientX < min || event.clientX > max) return false;
  } else {
    var min = rect.top;
    var max = min + rangeBox.offsetHeight;
    if (event.clientY < min || event.clientY > max) return false;
  }
  return true;
}

function getCoefficient(event) {
  let slider = getRangeBox(event);
  let rect = slider.getBoundingClientRect();
  let K = 0;
  if (slider.dataset.direction == "horizontal") {
    let offsetX = event.clientX - slider.offsetLeft;
    let width = slider.clientWidth;
    K = offsetX / width;
  } else if (slider.dataset.direction == "vertical") {
    let height = slider.clientHeight;
    var offsetY = event.clientY - rect.top;
    K = 1 - offsetY / height;
  }
  return K;
}
function rewind(event) {
  if (inRange(event)) {
    audio.currentTime = audio.duration * getCoefficient(event);
  }
}
