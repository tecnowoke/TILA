import { defineConfig } from 'astro/config';
import react from '@astrojs/react';


export default defineConfig({
  site: "https://tecnowoke.github.io",
  base: "/",
  output: "static",
  integrations: [react()],
});
