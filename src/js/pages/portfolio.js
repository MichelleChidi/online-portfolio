import "../../styles/css/pages/portfolio.css";
import template from "../../pages/portfolio.html?raw";
import { contactInit, headerInit } from "../utils";

export function render() {
  return template;
}

export async function init() {
  headerInit();
  contactInit();
}

export const description =
  "UX/UI portfolio of Michelle Chidi-Njemanze. Two case  studies on design systems and website optimization are presented here";
