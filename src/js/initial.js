const navigationHTML = `
    <nav class="navigation">
      <img src="src/images/logo.png" alt="logo" />
      <ul class="menu">
        <li><a href="">دسته بندی</a></li>
        <li><a href="">هنرمندان</a></li>
        <li><a href="">پخش آنلاین</a></li>
        <li><a href="">خرید اشتراک</a></li>
      </ul>

      <div class="search-box">
        <input
          type="text"
          class="search-input"
          placeholder="نام را وارد کنید..."
        />
        <button class="open-search-box">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <button class="btn">ورود/عضویت</button>
    </nav>
`;

const footerHTML = `
    <footer class="footer">
        <header class="head">
        <button class="goUp"><i class="fa-solid fa-angle-up"></i></button>
        <ul class="list">
            <li class="item"><a href="#">خرید اشتراک</a></li>
            <li class="item"><a href="#">پخش آنلاین</a></li>
            <li class="item"><a href="#">سوالات متداول</a></li>
            <li class="item"><a href="#">قوانین</a></li>
            <li class="item"><a href="#">تماس با ما</a></li>
        </ul>
        <div class="icons">
            <a href="">
            <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="">
            <i class="fa-brands fa-telegram"></i>
            </a>
        </div>
        <a class="download-btn" href=""
            >دانلود اپلیکیشن <i class="fa-brands fa-android"></i
        ></a>
        </header>
        <p>
        This is a clone page of zarfilm for a training website. developed by
        Mahdi Ramezani
        </p>
    </footer>
`;

const CDNs = `
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
  />
`;

const { body, head } = document;
body.insertAdjacentHTML("afterbegin", navigationHTML);
body.insertAdjacentHTML("beforeend", footerHTML);
head.insertAdjacentHTML("beforeend", CDNs);

const navigationEl = document.querySelector(".navigation");
const headerEl = document.querySelector(".header");
const navigationElHeight = navigationEl.getBoundingClientRect().height;
const headerElHeight = headerEl.getBoundingClientRect().height;

const headerElObserver = new IntersectionObserver(handleBlurNavigation, {
  root: null,
  threshold: 0,
  rootMargin: `${navigationElHeight - headerElHeight}px`,
});

headerElObserver.observe(headerEl);
function handleBlurNavigation([{ isIntersecting }]) {
  !isIntersecting
    ? navigationEl.classList.add("blur")
    : navigationEl.classList.remove("blur");
}

const openSearchBoxBtn = document.querySelector(".open-search-box");
openSearchBoxBtn.addEventListener("click", handleOpenSearchBox);

function handleOpenSearchBox() {
  const searchBoxEl = this.closest(".search-box");
  searchBoxEl.classList.toggle("active");
}

const goToTopEl = document.querySelector(".goUp");
goToTopEl.addEventListener("click", handleGoToTop);

function handleGoToTop() {
  console.log("a");
  headerEl.scrollIntoView({ behavior: "smooth" });
}
