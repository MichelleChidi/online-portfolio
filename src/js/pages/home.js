import "../../styles/css/pages/home.css";
import template from "../../pages/home.html?raw";
import { contactInit, headerInit } from "../utils";

export function render() {
  return template;
}

export async function init() {
  headerInit();
  contactInit();
}

export const description =
  "Michelle Chidi-Njemanze's online portfolio. She describes her role as UX engineer with particular interest in accessibility.";
