import fs from 'fs';
import path from 'path';
import { fetchPaintings } from '$lib/paintings.ts';
import { error } from '@sveltejs/kit';

import type { RequestHandler } from './$types';
export const GET: RequestHandler = async () => {
	let paintings = await fetchPaintings();
	if (paintings) {
		return new Response(paintings);
	}
	throw error(404, 'Could not find all paintings');
	// let filenames = getCategoryFilenames('src/lib/assets');
	// if (filenames) {
	// 	return new json(filenames);
	// }
};
