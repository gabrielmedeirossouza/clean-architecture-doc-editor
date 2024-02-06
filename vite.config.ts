import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import { checker } from "vite-plugin-checker";


export default defineConfig({
	plugins: [react(), checker({ typescript: true })],
	resolve: {
		alias: {
			"@": "/src",
		},
	},
	test: {
		globals: true,
	}
});
