// index.js
import "./styles.css";
import { loadPage } from "./initial-load";
import { loadMenu } from "./load-menu";
import { loadAbout } from "./load-about";
let homeBtn = document.getElementById("home");
let menuBtn = document.getElementById("menu");
let aboutBtn = document.getElementById("about");
// import odinImage from "./images/odin.png";
   
// const image = document.createElement("img");
// image.src = odinImage;
   
// document.body.appendChild(image);
 loadPage();
// loadMenu();
// loadAbout();

homeBtn.addEventListener('click', () => loadPage())
menuBtn.addEventListener('click', () => loadMenu())
aboutBtn.addEventListener('click', () => loadAbout())
