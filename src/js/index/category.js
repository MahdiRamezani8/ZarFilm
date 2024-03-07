export function categoryMaker(el, arr, API, APIkey) {
  arr.forEach(async (a) => {
    try {
      const response = await fetch(
        `${API}?t=${a.replaceAll(" ", "+")}&apikey=${APIkey}`
      );
      if (!response.ok) throw new Error(response.ok);
      const anime = await response.json();
      const html = `
    <article class="gallery-slide">
    <img class="cover" src="${anime.Poster}" alt="${anime.Title}" />
    <header class="top">
      <button class="icon">
        <i class="fa-solid fa-closed-captioning"></i>
      </button>
      <button class="icon">
        <i class="fa-solid fa-play"></i>
      </button>
    </header>
    <footer class="bottom">
      <div class="info">
        <p>${anime.Year}</p>
        <p>${anime.Country}</p>
      </div>
      <h1>${anime.Title}</h1>
    </footer>
    </article>
  `;
      el.insertAdjacentHTML("beforeend", html);
    } catch (err) {
      console.error(err);
    }
  });
}
