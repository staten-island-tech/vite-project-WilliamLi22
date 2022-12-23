import "../styles/style.css";
import { DOMSelectors } from "./dom";
import "../js/index.js";
import { menu } from "./menu";

console.log(menu);

function card(x) {
  x.forEach((food) => {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="inner">
          <h2>${food.name}</h2>
          <img class="foodimg" src="${food.img}" alt="">
          <h3>${food.price} Dollars</h3>
          </div>`
    );
  });
}

/* menu.forEach((food) => {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="inner">
        <h2>${food.name}</h2>
        <img class="foodimg" src="${food.img}" alt="">
        <h3>${food.price} Dollars</h3>
        </div>`
  );
}); */

card(menu);

//create an array of object (menu)
//create function to inject mennu item
//iterate (foreach) over array and insert HTML
//button event listen to filter

//OOP Object oriented programming to encapsulate data/functions and create abstractions (when you take a bunch of code and create a one word function for it, makes code reusable)

//
