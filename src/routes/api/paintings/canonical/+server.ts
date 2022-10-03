import { fetchPaintings } from '$lib/paintings.ts';
import { error, json } from '@sveltejs/kit';

import type { RequestHandler } from './$types';
export const GET: RequestHandler = async () => {
	let response = await fetchPaintings();
	let allPaintings = await JSON.parse(response);
	let paintings = allPaintings.filter((painting) => painting.category === 'canonical');
	if (paintings) {
		return new json(paintings);
	}
	throw error(404, 'No Canonical Paintings found...');
};
