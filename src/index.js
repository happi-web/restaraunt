
import "./styles.css";
import backgroundImage from "./background.jpg";
import {homePage} from "./modules/home.js";
import {menuPage} from "./modules/menu.js";
import {aboutPage} from "./modules/about.js";

document.addEventListener("DOMContentLoaded", () => {
    
    const body = document.querySelector("body");
    const background = document.createElement("img");

    background.src = backgroundImage;
    background.setAttribute("style",
        "width:100%; opacity:20%; height:auto; object-fit:"
    )
    body.style.position = "relative";
    body.appendChild(background);

    homePage();
    setupTabSwitching();

})
function setupTabSwitching() {
    const homeTab = document.querySelector("#home");
    const menuTab = document.querySelector("#menu");
    const aboutTab = document.querySelector("#about");

    // Add event listeners for tab switching
    homeTab.addEventListener("click", () => homePage());
    menuTab.addEventListener("click", () => menuPage());
    aboutTab.addEventListener("click", () => aboutPage());
} 