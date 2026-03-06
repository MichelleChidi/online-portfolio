import "../../styles/css/pages/portfolio.css";
import template from "../../src/pages/portfolio.html?raw";
import { contactInit, headerInit } from "../utils";

export function render() {
  return template;
}

export async function init() {
  headerInit();
  contactInit();
}
