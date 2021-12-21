/*jshint esversion: 6 */

//-------FILTRATION----------\\
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("projects-header__link");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

let navLink = document.querySelectorAll('.nav-links');
let headerNavContainer = document.querySelector('.header-nav__container');

for(let i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click', ()=>{
        let active = document.querySelector('.active');
        active[0].className = active[0].className.replace('active', '');
        this.ClassName += " active";
    });
}