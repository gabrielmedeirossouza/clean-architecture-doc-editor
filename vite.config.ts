// eslint-disable-next-line import/no-internal-modules
import { defineConfig } from "vitest/config";
import { checker } from "vite-plugin-checker";

export default defineConfig({
	plugins: [checker({ typescript: true })],
	resolve: {
		alias: {
			"@": "/src",
		},
	},
	test: {
		globals: true,
	}
});
