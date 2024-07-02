import { API, APIKey } from "../initial.js";
import { fetchInfo } from "./dom.js";

window.addEventListener("DOMContentLoaded", () => fetchInfo(API, APIKey));