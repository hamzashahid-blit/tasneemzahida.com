import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/paintings');
	const paintings = await response.json();
	console.log(paintings);
	return {
		paintings: paintings
	};
};
