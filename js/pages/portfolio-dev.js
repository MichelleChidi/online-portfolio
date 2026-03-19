import "../../styles/css/pages/portfolio-dev.css";
import template from "../../src/pages/portfolio-dev.html?raw";
import { contactInit, headerInit } from "../utils";

export function render() {
  return template;
}

export async function init() {
  headerInit();
  contactInit();
}

export const description =
  "Frontend work experience of Michelle Chidi-Njemanze. The companies highlighted are Attineos, Voordeeluijtes and Perplex.";
