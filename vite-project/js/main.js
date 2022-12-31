import "../styles/style.css";
import { DOMSelectors } from "./dom";
/* import "../js/index.js"; */
import { menu } from "./menu";

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("sadfood")) {
    document.body.classList.add("fastfood");
    document.body.classList.remove("sadfood");
  } else {
    document.body.classList.add("sadfood");
    document.body.classList.remove("fastfood");
  }
});

function all() {
  menu.forEach((menu) => {
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

all();

function filterPopular() {
  menu
    .filter((menu) => menu.popular == "yes")
    .forEach((menu) => {
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

function filterVegetarian() {
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

function filterBudget() {
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

function filterDrinks() {
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

function deleteAll() {
  DOMSelectors.menu.innerHTML = "";
}

document.getElementById("all").addEventListener("click", function () {
  clear();
  all();
});

document.getElementById("vegetarian").addEventListener("click", function () {
  clear();
  filterVegetarian();
});

document.getElementById("budget").addEventListener("click", function () {
  clear();
  filterBudget();
});

document.getElementById("popular").addEventListener("click", function () {
  clear();
  filterPopular();
});

document.getElementById("drinks").addEventListener("click", function () {
  clear();
  filterDrinks();
});

//create an array of object (menu)
//create function to inject mennu item
//iterate (foreach) over array and insert HTML
//button event listen to filter

//OOP Object oriented programming to encapsulate data/functions and create abstractions (when you take a bunch of code and create a one word function for it, makes code reusable)

//
