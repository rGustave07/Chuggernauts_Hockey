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
			usePolling: true,
		},
	},
});
