import "../styles/style.css";
import { menu } from "./menu";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

document.querySelector("#app").innerHTML = `<h1>Hello</h1> 
<a href="https:vitejs.dev/guide/features.html" target="_blank">Documentation</a>`;

console.log(menu);

//create an array of object (menu)
//create function to inject mennu item
//iterate (foreach) over array and insert HTML
//button event listen to filter

//OOP Object oriented programming to encapsulate data/functions and create abstractions (when you take a bunch of code and create a one word function for it, makes code reusable)

//
