import { defineConfig } from 'vite';
import { resolve } from 'path';
// import { crx3 } from 'vite-plugin-vue-crx3';
// import { chromeExtension } from 'vite-plugin-chrome-extension';
import chromeExtension from './plugin/vite-plugin-chrome-extension.js';
import vue from '@vitejs/plugin-vue';
// import commonjs from '@rollup/plugin-commonjs';
// import _ from 'lodash';

export default defineConfig(() => {
	console.log('start');
	return {
		plugins: [
			vue(),
			chromeExtension({
				manifestPath: resolve(__dirname, 'src/manifest.json'),
			}),
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
			},
		},
		// publicDir: resolve(__dirname, 'public'),
		build: {
			cssCodeSplit: true,
			rollupOptions: {
				input: 'src/manifest.json',
				output: {
					assetFileNames: 'assets/[name].[ext]',
				},
			},
		},
	};
});
