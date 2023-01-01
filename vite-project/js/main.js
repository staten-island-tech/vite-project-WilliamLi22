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

function createCards() {
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

createCards();

document.querySelector("#all").addEventListener("click", function () {
  box.innerHTML = "";
  createCards();
});

document.querySelector("#popular").addEventListener("click", function () {
  box.innerHTML = "";
  const popular = menu
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
});

document.querySelector("#vegetarian").addEventListener("click", function () {
  box.innerHTML = "";
  const vegetarian = menu
    .filter((food) => food.vegetarian == "yes")
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
});

document.querySelector("#budget").addEventListener("click", function () {
  box.innerHTML = "";
  const budget = menu
    .filter((food) => food.budget == "yes")
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
});

document.querySelector("#drink").addEventListener("click", function () {
  box.innerHTML = "";
  const drink = menu
    .filter((food) => food.drink == "yes")
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
});

//OOP Object oriented programming to encapsulate data/functions and create abstractions (when you take a bunch of code and create a one word function for it, makes code reusable)

//
