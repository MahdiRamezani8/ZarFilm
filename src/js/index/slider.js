// A function to create a slider of movies from an array of titles
export async function sliderMaker(el, arr, API, APIkey) {
  // An array to store the order of movies
  const orderOfMovies = [];

  // Loop through the array of titles
  for (const m of arr) {
    try {
      // Fetch the movie data from the API
      const response = await fetch(
        `${API}?t=${m.replaceAll(" ", "+")}&apikey=${APIkey}`
      );

      // Check if the response is ok
      if (!response.ok) throw new Error(response.ok);
      // Return the response as JSON
      const movie = await response.json();

      // Destructure the movie properties
      const { Genre, Poster, Title, Runtime, imdbRating, Year } = movie;

      function serialer(obj) {
        return Object.keys(obj)
          .map(function (key) {
            return (
              key +
              "=" +
              (typeof obj[key] === "string" ? obj[key] : serialer(obj[key]))
            );
          })
          .join("&");
        
      }

      // Create the HTML template for the movie card
      const html = `
        <div class="header-slider-slide slide splide__slide" data-info="${serialer(movie)}">
          <div class="slide-info">
            <div class="geners">
              ${Genre.split(",").map((g) => `<span>${g}</span>`)}
            </div>
          </div>
    
          <div class="slide-cover">
            <img src="${Poster} alt="${Title}">
            <div class="top">
              <button>
                <i class="fa-solid fa-microphone"></i>
              </button>
              <button>
                <i class="fa-solid fa-play"></i>
              </button>
              <button>
                <i class="fa-solid fa-closed-captioning"></i>
              </button>
            </div>
            <div class="bottom">
              <span>
                ${Runtime}
                <i class="fa-solid fa-clock"></i>
              </span>
              <span>
              IMDB ${imdbRating}
                <i class="fa-solid fa-star"></i>
              </span>
            </div>
          </div>
    
          <div class="slide-title">
            <span class="year">${Year}</span>
            <span class="title">${Title}</span>
          </div>
        </div>
        `;

      // Insert the HTML template into the element
      el.insertAdjacentHTML("beforeend", html);

      // Push the title to the order of movies array
      orderOfMovies.push({ Title, Poster, imdbRating });
    } catch (error) {
      // Log the error
      console.error(error);
    }
  }

  const slides = document.querySelectorAll(".header-slider-slide");
  slides.forEach((s) => s.addEventListener("click", goToDownloadPage));
  // Return the order of movies array
  return orderOfMovies;
}

function goToDownloadPage() {
  location.assign(`download.html?info=${this.dataset.info}`)
}
