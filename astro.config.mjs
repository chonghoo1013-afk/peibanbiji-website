import { defineConfig } from "astro/config";

// TODO: update once the real domain is chosen (Vercel default or custom).
// Used for canonical URLs — SEO needs this to be correct.
const SITE_URL = "https://peibanbiji.vercel.app";

export default defineConfig({
  site: SITE_URL,
});
