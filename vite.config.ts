import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// SINGLE_FILE=1 npm run build  -> one self-contained dist/index.html (for previews)
const single = process.env.SINGLE_FILE === "1";

export default defineConfig({
  base: "/Soul-studio/",
  plugins: [react(), tailwindcss(), ...(single ? [viteSingleFile()] : [])],
});
