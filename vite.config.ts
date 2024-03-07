import { defineConfig } from "vitest/config";
import { checker } from "vite-plugin-checker";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [checker({ typescript: true }), vue()],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    test: {
        globals: true,
    }
});
