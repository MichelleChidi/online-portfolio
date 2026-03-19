import "../../styles/css/pages/art-dabbles.css";
import template from "../../pages/art-dabbles.html?raw";
import { contactInit } from "../utils";

export function render() {
  return template;
}

export async function init() {
  contactInit();
}

export const description =
  "Michelle Chidi-Njemanze's digital art display. Prints created with Adobe illustrator";
