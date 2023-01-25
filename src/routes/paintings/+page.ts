import { json, error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import Paintings from '$lib/assets/paintings.json';

export const load: PageLoad = async ({ fetch }) => {
	if (!Paintings) {
		// TODO: All error messages should be revised and have fullstops at the end.
		throw error(404, 'We could not find all paintings.');
	}
	const response = new json(Paintings);
	const paintings = await response.json();
	return {
		paintings: paintings
	};
};
