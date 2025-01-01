import type { PageLoad } from './$types';
import type { Painting } from '$mytypes/Painting';
import { error, json } from '@sveltejs/kit';
import allPaintings from '$assets/paintings.json';

export const prerender = true;
export const ssr = false;
export const csr = true;

export const load: PageLoad = async ({ params }) => {
    const category: string = params['category'];
	const paintings: Painting[] = allPaintings.filter(
        (painting) => painting.category === category
    );
	if (!paintings) throw error(404, `No '${category}' paintings found.`);
    const categoryNames: { [c: string]: string } = {
        main: 'Main Gallery',
        calligraphy: 'Calligraphy',
        other: 'Other Art',
    }
	return {
		paintings: paintings,
        categoryName: categoryNames[category],
	};
};
