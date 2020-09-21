document.querySelector(".menu_icon").addEventListener("click", () => {
  let responsiveNavbar = document.querySelector(".navbar");

  if (responsiveNavbar.className === "navbar") {
    responsiveNavbar.className += " toggle-navbar";
  } else {
    responsiveNavbar.className = "navbar";
  }
});
