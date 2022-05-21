import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslint()],

	// this needs to be defined for docker-compose
	// Or you can use # CMD ["npm", "run", "dev", "--", "--host"]
	server: {
		host: '0.0.0.0',
	},
});
