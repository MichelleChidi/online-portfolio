import "../../../styles/css/pages/case-studies/design-system.css";
import template from "../../../src/pages/case-studies/website-redesign.html?raw";

export function render() {
  return template;
}

export async function init() {
  const sections = document.querySelectorAll(".case__chapter");
  const menuLinks = document.querySelectorAll(".case__chapter-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const menuItem = document.querySelector(
          `.case__chapter-link[href="#${id}"]`,
        );

        if (entry.isIntersecting) {
          menuLinks.forEach((link) => link.classList.remove("active"));

          menuItem.classList.add("active");
        }
      });
    },
    {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    },
  );

  sections.forEach((section) => observer.observe(section));
}

export const description =
  "A website redesign case study of Michelle Chidi-Njemanze. Project created for the company Voordeeluitjes";
