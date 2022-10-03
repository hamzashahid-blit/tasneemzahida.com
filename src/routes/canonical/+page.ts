import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/paintings/canonical');
	const paintings = await response.json();
	return {
		paintings: paintings
	};
};
