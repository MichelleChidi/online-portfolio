import menuHtml from "../../partials/mobile-menu.html?raw";

document.getElementById("mobile-menu").innerHTML = menuHtml;

document.addEventListener("click", (e) => {
  const link = e.target.closest("button[data-nav-button]");
  if (!link) return;

  e.preventDefault();
  const mobileMenu = document.getElementById("mobile-nav-menu");

  if (mobileMenu.dataset.expanded === "true") {
    mobileMenu.dataset.expanded = "false";
    link.ariaLabel = "Expand menu";
  } else {
    mobileMenu.dataset.expanded = "true";
    link.ariaLabel = "Collapse menu";
  }
});
