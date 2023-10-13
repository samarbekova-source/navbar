// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const btnNavToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

btnNavToggle.addEventListener("click", function () {
  //   console.log(links.classList);
  //   console.log(links.classList.contains("rasa")); // false
  //   console.log(links.classList.contains("links")); // true
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }
  links.classList.toggle("show-links");
});
