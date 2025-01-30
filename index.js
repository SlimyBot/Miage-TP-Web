document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const cross = document.querySelector(".cross");
  const navbar = document.querySelector(".navbar");

  cross.style.display = "none";
  burger.style.display = "flex";

  cross.addEventListener("click", function () {
    navbar.style.transform = "translateX(250px)";

    burger.style.display = "flex";
    cross.style.display = "none";
  });

  burger.addEventListener("click", function () {
    navbar.style.transform = "translateX(-250px)";

    cross.style.display = "flex";
    burger.style.display = "none";
  });
});
