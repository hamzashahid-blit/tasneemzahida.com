import type { PageLoad } from './$types';
import type { Painting } from '$mytypes/Painting';
import { json, error } from '@sveltejs/kit';
import Paintings from '$assets/paintings.json';

export const load: PageLoad = async () => {
	if (!Paintings) {
		throw error(404, 'We could not find all paintings.');
	}
	const response: Response = json(Paintings);
	const paintings: Painting[] = await response.json();
	return {
		paintings: paintings
	};
};
