import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		commonjsOptions: {
			transformMixedEsModules: true,
			exclude: [
				'node_modules/lodash-es/**',
				'node_modules/@types/lodash-es/**',
			],
		},
	},
});
