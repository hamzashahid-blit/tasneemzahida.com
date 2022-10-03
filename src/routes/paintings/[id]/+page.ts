import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	let response = await fetch('/api/paintings');
	console.log('Response: ', response);
	let paintings = await response.json();
	console.log('Paintings: ', paintings);
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
