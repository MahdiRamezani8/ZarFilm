const headerWallpaper = document.querySelector(".wallpaper>img");
const ratingEl = document.querySelector(".score");
const titleEl = document.querySelector(".title");
const splideSliderEl = document.querySelector(".header-slider");

function mountSplide(order) {
  const splide = new Splide(".splide", {
    gap: 20,
    type: "loop",
    autoplay: true,
    interval: 5000,
    perPage: 3,
    perMove: 1,
    pagination: false,
    arrows: false,
  });
  splide.mount();
  changeSlide(order[splide.index]);
  splideSliderEl.classList.add("fade");
  splide.on("move", () => changeSlide(order[splide.index]));
}

function changeSlide(info) {
  headerWallpaper.classList.remove("fade");
  ratingEl.parentElement.classList.remove("fade");
  titleEl.classList.remove("fade");

  headerWallpaper.src = info.Poster;
  ratingEl.innerHTML = info.imdbRating;
  titleEl.innerHTML = info.Title;
  setTimeout(() => {
    ratingEl.parentElement.classList.add("fade");
    titleEl.classList.add("fade");
    headerWallpaper.classList.add("fade");
  }, 50);
}


export { mountSplide };
