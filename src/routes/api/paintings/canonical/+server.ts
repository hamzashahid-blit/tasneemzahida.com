import { error, json } from '@sveltejs/kit';
import allPaintings from '$lib/assets/paintings.json';

import type { RequestHandler } from './$types';
export const GET: RequestHandler = async () => {
	let paintings = allPaintings.filter((painting) => painting.category === 'canonical');
	if (paintings) {
		return new json(paintings);
	}
	throw error(404, 'No Canonical Paintings found...');
};
