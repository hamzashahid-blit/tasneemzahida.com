import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	let response = await fetch('/api/paintings');
	let paintings = await response.json();
	if (!paintings) {
		throw error(404, 'Could not find paintings');
	}
	let painting = paintings.find((painting) => params.id === painting.id);
	if (!painting) {
		throw error(404, 'Could not find a painting with the id of "' + params.id + '"');
	}
	return {
		painting: painting
	};
};
