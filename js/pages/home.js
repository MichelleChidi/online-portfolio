import "../../styles/css/pages/home.css";
import template from "../../src/pages/home.html?raw";
import { contactInit, headerInit } from "../utils";

export function render() {
  return template;
}

export async function init() {
  headerInit();
  contactInit();
}
