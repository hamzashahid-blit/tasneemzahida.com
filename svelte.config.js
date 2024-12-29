import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
	}),
	kit: {
		adapter: adapter(),
        alias: {
            $components: path.resolve('./src/lib/components'),
            $assets: path.resolve('./src/lib/assets'),
            $mytypes: path.resolve('./src/types'),
        },
	},

	vitePlugin: {
		experimental: {
			useVitePreprocess: true,
		},
	},
};

export default config;
