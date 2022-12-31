document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("sadfood")) {
    document.body.classList.add("fastfood");
    document.body.classList.remove("sadfood");
  } else {
    document.body.classList.add("sadfood");
    document.body.classList.remove("fastfood");
  }
});
