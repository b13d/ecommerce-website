let burgerMenu = document.querySelector(".burger-menu");

let styleBurgerMenu = getComputedStyle(burgerMenu).display;

let closeModal = document.querySelector('.close-modal');


closeModal.onclick = function() {
        burgerMenu.style.display = "block";
    
        document.querySelector(".modal-burger").style.display = "none";
}

burgerMenu.onclick = function () {
  if (window.screen.width < 500) {
    if (styleBurgerMenu !== "none") {
      burgerMenu.style.display = "none";

      document.querySelector(".modal-burger").style.display = "block";
    } else {
      burgerMenu.style.display = "block";

      document.querySelector(".modal-burger").style.display = "none";
    }
  }
};

window.addEventListener("resize", function () {
  if (window.screen.width < 500) console.log(window.screen.width);
  else {
    burgerMenu.style.display = "block";

    document.querySelector(".modal-burger").style.display = "none";
  }
});
