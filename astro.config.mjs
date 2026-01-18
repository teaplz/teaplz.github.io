// @ts-check
import { defineConfig } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://teaplz.github.io",

  integrations: [mdx()],

  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "src/content/blog/images/**/*",
            dest: "blog/images",
          },
        ],
        silent: true,
      }),
    ],
  },
});
