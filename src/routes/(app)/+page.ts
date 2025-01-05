import type { PageLoad } from './$types';
import type { Painting } from '$mytypes/Painting';
import type { EventBlog } from '$mytypes/EventBlog';
import { error } from '@sveltejs/kit';
import Paintings from '$assets/paintings.json';
import Events from '$assets/events.json';

export const ssr = false;
export const csr = true;

export const load: PageLoad = async ({ fetch }) => {
	if (!Events) {
		throw error(404, 'We could not find any event.');
	}
	const recentEvents: EventBlog[] = Events.slice(0, 4);
	if (!Paintings) {
		throw error(404, 'We could not find any painting.');
	}
	const carouselPaintings: Painting[] = Paintings.filter(
		(painting) => painting.category === 'main'
	);
	return {
		events: recentEvents,
		paintings: carouselPaintings
	};
};
