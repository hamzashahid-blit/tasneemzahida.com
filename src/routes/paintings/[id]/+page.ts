import { json, error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import Paintings from '$lib/assets/paintings.json';

export const load: PageLoad = async ({ fetch, params }) => {
	if (!Paintings) {
		throw error(404, 'We could not find all paintings.');
	}
	// TODO: Convert appropriate variables to const.
	const response = new json(Paintings);
	const paintings = await response.json();
	const painting = paintings.find((painting) => params.id === painting.id);
	if (!painting) {
		throw error(404, 'We could not find the painting you were looking for.');
	}
	return {
		painting: painting
	};
};
