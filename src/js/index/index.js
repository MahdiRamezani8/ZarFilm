import {
  firstMoviesList,
  secondMoviesList,
  popularSeriesAndMovies,
  popularAnimes,
} from "./data.js";
import { API, APIKey } from "../initial.js";
import { sliderMaker } from "./slider.js";
import { categoryMaker } from "./category.js";
import { mountSplide } from "./dom.js";

const headerSliderEl = document.querySelector(".splide__list");
const animeGalleryEl = document.querySelector(".gallery");
const firstMovieSliderEl = document.querySelector(".movie-slider1");
const secondMovieSliderEl = document.querySelector(".movie-slider2");

categoryMaker(animeGalleryEl, popularAnimes, API, APIKey);
sliderMaker(headerSliderEl, popularSeriesAndMovies, API, APIKey).then((order) =>
  mountSplide(order)
);
sliderMaker(firstMovieSliderEl, firstMoviesList, API, APIKey);
sliderMaker(secondMovieSliderEl, secondMoviesList, API, APIKey);
