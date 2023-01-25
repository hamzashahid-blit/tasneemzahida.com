import { error, json } from '@sveltejs/kit';
import allPaintings from '$lib/assets/paintings.json';
import type { PageLoad } from './$types';

export const prerender = true;
export const ssr = true;
export const csr = true;

export const load: PageLoad = async ({ fetch }) => {
	let canonicalPaintings = allPaintings.filter((painting) => painting.category === 'canonical');
	if (!canonicalPaintings) {
		throw error(404, 'No canonical paintings found...');
	}
	const response = new json(canonicalPaintings);
	const paintings = await response.json();
	return {
		paintings: paintings
	};
};
