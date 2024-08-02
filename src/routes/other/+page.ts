import { error, json } from '@sveltejs/kit';
import allPaintings from '$lib/assets/paintings.json';
import type { PageLoad } from './$types';

export const prerender = true;
export const ssr = true;
export const csr = true;

export const load: PageLoad = async ({ fetch }) => {
	let otherPaintings = allPaintings.filter((painting) => painting.category === 'other');
	if (!otherPaintings) {
		throw error(404, 'No other art found.');
	}
	const response = new json(otherPaintings);
	const paintings = await response.json();
	return {
		paintings: paintings
	};
};
