import { error, json } from '@sveltejs/kit';
import allPaintings from '$lib/assets/paintings.json';
import type { PageLoad } from './$types';

export const prerender = true;
export const ssr = true;
export const csr = true;

export const load: PageLoad = async ({ fetch }) => {
	let calligraphyPaintings = allPaintings.filter((painting) => painting.category === 'calligraphy');
	if (!calligraphyPaintings) {
		throw error(404, 'No calligraphy paintings found...');
	}
	const response = new json(calligraphyPaintings);
	const paintings = await response.json();
	return {
		paintings: paintings
	};
};
