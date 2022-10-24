import partytown from "@astrojs/partytown";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mrcai.dev",
  integrations: [
    preact(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
