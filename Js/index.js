// import mobilesPage from "../Pages/mobiles.js";
import { mobiles } from "../Pages/mobiles.js";
import { gameConsoles } from "../Pages/gameConsoles.js";
import { laptops } from "../Pages/laptops.js";

function router() {
  const routes = [
    { path: "/mobiles", view: mobiles },
    { path: "/gameConsoles", view: gameConsoles },
    { path: "/laptops", view: laptops },
  ];
  const potentialRoute = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  });
  let match = potentialRoute.find((item) => item.isMatch);
  // Show
  let productsDOM = document.querySelector(".products-block");
  productsDOM = match.route.view();
}
function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
      router();
    }
  });
});
window.addEventListener("popstate", router);

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-button");
const menuTitle = document.querySelector(".menu-title");
const aTag = document.querySelectorAll("a");
const aTags = [...aTag];
const ul = document.querySelector(".menu ul")
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("showMenu");
  ul.classList.toggle("open")
  menuBtn.classList.toggle("menuBtnRotate");
  aTags.forEach((item) => {
    item.classList.toggle("showButtons");
  });
  menuTitle.classList.toggle("showMenuTitle");
});
