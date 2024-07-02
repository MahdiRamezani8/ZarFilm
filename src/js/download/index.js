import { API, APIKey } from "../initial.js";
import { fetchInfo } from "./dom.js";

window.addEventListener("DOMContentLoaded", () => fetchInfo(API, APIKey));

// window.addEventListener("DOMContentLoaded", function () {
//   console.log(this.location.search);
//   // Get the query string from the URL
//   const queryString = window.location.search;

//   // Create a URLSearchParams object from the query string
//   const params = new URLSearchParams(queryString);

//   // Initialize an empty object to store the result
//   const result = {};

//   // Iterate through the parameters and add them to the object
//   for (const [key, value] of params.entries()) {
//     result[key] = value;
//   }

// });
