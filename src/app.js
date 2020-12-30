import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.css"
import "./styles/custom.css";

// fontawesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


// component
import "./scripts/components/app-bar.js"
import "./scripts/components/meal-category.js"
import "./scripts/components/drink-category.js"
import "./scripts/components/search-bar.js"


// main js
import main from "./scripts/view/main.js";


document.addEventListener("DOMContentLoaded", main);