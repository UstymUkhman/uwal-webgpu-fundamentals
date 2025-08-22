import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";

export default ({ mode }) =>
    defineConfig({
        base: "./",
        build: { target: "esnext" },
        plugins: [glsl({ minify: mode !== "development" })]
    });
