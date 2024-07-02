async function fetchInfo(API, APIKey) {
  const title = new URLSearchParams(location.search).get("Title");

  try {
    // Fetch the movie data from the API
    const response = await fetch(
      `${API}?t=${title.replaceAll(" ", "+")}&apikey=${APIKey}`
    );

    // Check if the response is ok
    if (!response.ok) throw new Error(response.ok);
    // Return the response as JSON
    const movie = await response.json();

    // Destructure the movie properties
    const { Genre, Poster, Title, Plot, Actors, imdbRating } = movie;

    document.querySelector("title").innerHTML = `zarfilm - ${Title}`;
    document.querySelector(".wallpaper .cover").src = Poster;
    document.querySelector(".cover>img").src = Poster;
    document.querySelector(".info .name").innerHTML = Title;
    document.querySelector(".info .description").innerHTML = Plot;
    document.querySelector(
      ".rating .imdbRating"
    ).innerHTML = `${imdbRating} / 10`;
    const GenresListEl = document.querySelector(".info .genres");
    const ActorsListEl = document.querySelector(".info .actors");
    Genre.split(",").forEach((g) => {
      GenresListEl.insertAdjacentHTML("beforeend", `<li> ${g} </li>`);
    });
    Actors.split(",").forEach((a) => {
      ActorsListEl.insertAdjacentHTML("beforeend", `<li> ${a} </li>`);
    });
  } catch (error) {
    console.error(error);
  }
}

const tabsListBtn = document.querySelectorAll(".tabs-list>button");
const tabsContainerEl = document.querySelectorAll(".tab");

tabsListBtn.forEach((btn) => btn.addEventListener("click", handleTabChange));

function handleTabChange(e) {
  const { category } = e.target.dataset;

  tabsListBtn.forEach((btn) => {
    e.target === btn
      ? btn.classList.add("active")
      : btn.classList.remove("active");
  });

  tabsContainerEl.forEach((el) => {
    el.dataset.category === category
      ? el.classList.add("active")
      : el.classList.remove("active");
  });
}

const openDropDownBtn = document.querySelectorAll(".open_drop-down");
openDropDownBtn.forEach((btn) => btn.addEventListener("click", handleDropDown));

function handleDropDown(e) {
  e.target
    .closest(".open_drop-down")
    .children[0].classList.toggle("fa-angle-down");
  e.target
    .closest(".open_drop-down")
    .children[0].classList.toggle("fa-angle-up");
  const dropDownEl = e.target.closest("header").nextElementSibling;
  dropDownEl.classList.toggle("active");
}

export { fetchInfo };
