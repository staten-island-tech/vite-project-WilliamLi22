import "../styles/style.css";
import { DOMSelectors } from "./dom";
import "../js/index.js";
import { menu } from "./menu";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

console.log(menu);

menu.forEach((food) => {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="inner">
        <h2>Name: ${food.name}</h2>
        <img src="${food.img}" alt="">
        </div>`
  );
});

//create an array of object (menu)
//create function to inject mennu item
//iterate (foreach) over array and insert HTML
//button event listen to filter

//OOP Object oriented programming to encapsulate data/functions and create abstractions (when you take a bunch of code and create a one word function for it, makes code reusable)

//
