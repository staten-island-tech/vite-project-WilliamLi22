import "../styles/style.css";
import { DOMSelectors } from "./dom";
import "../js/index.js";
import { menu } from "./menu";

console.log(menu);

function card() {
  menu.forEach((food) => {
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

function filterPopular() {
  menu
    .filter((food) => food.popular == "yes")
    .forEach((food) => {
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

function filterVegetarian(e) {
  e.filter((menu) => menu.vegetarian == "yes");
  e.forEach((menu) => {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="inner">
          <h2>${menu.name}</h2>
          <img class="foodimg" src="${menu.img}" alt="">
          <h3>${menu.price} Dollars</h3>
          </div>`
    );
  });
}

function filterBudget(e) {
  e.filter((menu) => menu.budget == "yes");
  e.forEach((menu) => {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="inner">
          <h2>${menu.name}</h2>
          <img class="foodimg" src="${menu.img}" alt="">
          <h3>${menu.price} Dollars</h3>
          </div>`
    );
  });
}

function filterDrinks(e) {
  e.filter((menu) => menu.drink == "yes");
  e.forEach((menu) => {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="inner">
          <h2>${menu.name}</h2>
          <img class="foodimg" src="${menu.img}" alt="">
          <h3>${menu.price} Dollars</h3>
          </div>`
    );
  });
}

card(menu);
filterPopular(menu);
filterVegetarian(menu);
filterBudget(menu);
filterDrinks(menu);

//create an array of object (menu)
//create function to inject mennu item
//iterate (foreach) over array and insert HTML
//button event listen to filter

//OOP Object oriented programming to encapsulate data/functions and create abstractions (when you take a bunch of code and create a one word function for it, makes code reusable)

//
