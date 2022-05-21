// eslint-disable-next-line spaced-comment
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],

	// this needs to be defined for docker-compose
	// Or you can use # CMD ["npm", "run", "dev", "--", "--host"]
	server: {
		host: "0.0.0.0",
	},

	test: {
		globals: true,
		environment: "happy-dom",
		setupFiles: ["./.vitest/setup-env.ts"],
	},
});
