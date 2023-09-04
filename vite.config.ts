import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "react-logical-components",
      fileName: (format) => `react-logical-components.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true
    })
  ]
});
