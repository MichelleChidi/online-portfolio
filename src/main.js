import { inject, track } from "@vercel/analytics";

const params = new URLSearchParams(window.location.search);
const ref = params.get("ref");

inject();

if (ref) {
  track("ref_visit", { source: ref });
}

import "./js/router.js";
