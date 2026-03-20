import { inject, track } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

const params = new URLSearchParams(window.location.search);
const ref = params.get("ref");

inject();
injectSpeedInsights();

if (ref) {
  // console.log("Tracking ref:", ref);
  // params.delete("ref");
  // window.location.pathname = "/cv" + window.location.pathname;
  track("ref_visit", { source: ref });
  const newPath = `/cv${window.location.pathname}`;
  window.history.replaceState({}, "", newPath);
}

import "./js/router.js";
