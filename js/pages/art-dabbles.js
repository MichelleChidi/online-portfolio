import "../../styles/css/pages/art-dabbles.css";
import template from "../../src/pages/art-dabbles.html?raw";
import { contactInit, headerInit } from "../utils";

export function render() {
  return template;
}

export async function init() {
  contactInit();
}
