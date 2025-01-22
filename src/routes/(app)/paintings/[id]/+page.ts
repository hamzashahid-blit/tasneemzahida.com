import type { PageLoad } from './$types';
import type { Painting } from '$mytypes/Painting';
import { error } from '@sveltejs/kit';
import paintings from '$assets/paintings.json';

export const csr = true;
export const ssr = false;

export const load: PageLoad = async ({ params }) => {
	if (!paintings) {
		throw error(404, 'We could not find any painting.');
	}
	const painting: Painting | undefined = paintings.find(
        (painting) => params.id === painting.id
    );
	if (!painting) {
		throw error(404, 'We could not find the painting you were looking for.');
	}
	return {
		painting: painting
	};
};
