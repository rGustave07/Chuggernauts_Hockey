// eslint-disable-next-line spaced-comment
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslint(), tsconfigPaths()],

	// this needs to be defined for docker-compose
	// Or you can use # CMD ["npm", "run", "dev", "--", "--host"]
	server: {
		host: "0.0.0.0",
		watch: {
			// Vite chokes on large directories in the project.
			// This lets Vite skip the `.direnv` directory.
			ignored: ["**/.direnv"],
		},
	},
	test: {
		globals: true,
		environment: "happy-dom",
		setupFiles: ["./.vitest/setup-env.ts"],
		// Vitest also crawls the project briefly, this lets
		// it skip `.direnv` (as well as the default excludes).
		exclude: [".direnv", "node_modules", "dist", ".idea", ".git", ".cache"],
	},
});
