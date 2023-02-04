import { json } from '@sveltejs/kit';
import Events from '$lib/assets/events.json';

export const ssr = true;
export const csr = true;

import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch }) => {
	if (!Events) {
		throw error(404, 'We could not find all events.');
	}
	let recentEvents: EventBlog[] = Events.slice(0, 4);
	return {
		events: recentEvents
	};
};
