import { json, error } from '@sveltejs/kit';
import Paintings from '$lib/assets/paintings.json';

import type { RequestHandler } from './$types';
export const GET: RequestHandler = async () => {
	if (Paintings) {
		return new json(Paintings);
	}
	throw error(404, 'Could not find all paintings');
};
