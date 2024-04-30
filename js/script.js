// class active
const navbarNa = document.querySelector(".navbar-nav");

// side-menu, ditekan
document.querySelector("#side-menu").onclick = () => {
  navbarNa.classList.toggle("active");
};

// menekan dimanapun agar sidebarnya hilang
const bar = document.querySelector("#side-menu");
document.addEventListener("click", function (e) {
  if (!bar.contains(e.target) && !navbarNa.contains(e.target)) {
    navbarNa.classList.remove("active");
  }
});
