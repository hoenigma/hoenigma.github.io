// ------------Navbar---------------

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.querySelector(".navbar-menu");

  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
});

// -----------Carousel------------

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const items = carousel.querySelectorAll(".carousel-item");
  const prevButton = carousel.querySelector(".carousel-prev");
  const nextButton = carousel.querySelector(".carousel-next");

  let currentSlide = 0;

  function showSlide(slideIndex) {
    items.forEach((item, index) => {
      if (index === slideIndex) {
        item.classList.add("is-active");
      } else {
        item.classList.remove("is-active");
      }
    });
  }

  function goToNextSlide() {
    currentSlide = (currentSlide + 1) % items.length;
    showSlide(currentSlide);
    console.log(currentSlide);
  }

  function goToPrevSlide() {
    currentSlide = (currentSlide - 1 + items.length) % items.length;
    showSlide(currentSlide);
    console.log(currentSlide);
  }

  prevButton.addEventListener("click", goToPrevSlide);
  nextButton.addEventListener("click", goToNextSlide);

  // Show initial slide
  showSlide(currentSlide);
});
