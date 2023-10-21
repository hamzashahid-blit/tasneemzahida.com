import { error, json } from '@sveltejs/kit';
import allPaintings from '$lib/assets/paintings.json';
import type { PageLoad } from './$types';

export const prerender = true;
export const ssr = true;
export const csr = true;

export const load: PageLoad = async ({ fetch }) => {
	let visualPaintings = allPaintings.filter((painting) => painting.category === 'visual');
	if (!visualPaintings) {
		throw error(404, "No Visual Da'wah found.");
	}
	const response = new json(visualPaintings);
	const paintings = await response.json();
	return {
		paintings: paintings
	};
};

// import { error, json } from '@sveltejs/kit';
// import allPaintings from '$lib/assets/paintings.json';

// import type { RequestHandler } from './$types';
// export const GET: RequestHandler = async () => {
// 	let paintings = allPaintings.filter((painting) => painting.category === 'visual');
// 	if (paintings) {
// 		return new json(paintings);
// 	}
// 	// TODO: Make custom Error Page
// 	throw error(404, "No Visual Da'wah found...");
// };

// import type { PageLoad } from './$types';
// export const load: PageLoad = async ({ fetch }) => {
// 	const response = await fetch('/api/paintings/visual');
// 	const paintings = await response.json();
// 	return {
// 		paintings: paintings
// 	};
// };
