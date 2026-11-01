import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        home: resolve(__dirname, "src/pages/home.html"),
        portfolio: resolve(__dirname, "src/pages/portfolio.html"),
        portfolioDev: resolve(__dirname, "src/pages/portfolio-dev.html"),
        designSystem: resolve(
          __dirname,
          "src/pages/case-studies/design-system.html",
        ),
        websiteRedesign: resolve(
          __dirname,
          "src/pages/case-studies/website-redesign.html",
        ),
        artDabbles: resolve(__dirname, "src/pages/art-dabbles.html"),
      },
    },
  },
});
