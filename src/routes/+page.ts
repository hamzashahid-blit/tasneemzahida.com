import Paintings from '$lib/assets/paintings.json';
import Events from '$lib/assets/events.json';
import type { Painting } from 'src/types/Painting';
import type { EventBlog } from 'src/types/EventBlog';

export const ssr = true;
export const csr = true;

import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch }) => {
	if (!Events) {
		throw error(404, 'We could not find all events.');
	}
	let recentEvents: EventBlog[] = Events.slice(0, 4);
	if (!Paintings) {
		throw error(404, 'We could not find all paintings.');
	}
	let carouselPaintings: Painting[] = Paintings.filter(
		(painting) => painting.category === 'main'
	);
	return {
		events: recentEvents,
		paintings: carouselPaintings
	};
};
