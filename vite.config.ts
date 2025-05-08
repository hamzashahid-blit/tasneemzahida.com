import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import fs from 'fs'

const config: UserConfig = {
	plugins: [sveltekit()],
	assetsInclude: ['**/*.md'],
//	server: {
//		watch: {
//			followSymlinks: true,
//		},
//		https: {
//			key: fs.readFileSync('/etc/letsencrypt/live/tasneemzahida.com/privkey.pem', 'utf8'),
//			cert: fs.readFileSync('/etc/letsencrypt/live/tasneemzahida.com/cert.pem', 'utf8'),
//			ca: fs.readFileSync('/etc/letsencrypt/live/tasneemzahida.com/chain.pem', 'utf8'),
//		}
//	}
};

export default config;
