import { error, json } from '@sveltejs/kit';
import { marked } from 'marked';
import Events from '$lib/assets/events.json';
import type { EventBlog } from 'src/types/EventBlog';

export const ssr = true;
export const csr = true;

import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch }) => {
	if (!Events) {
		throw error(404, 'We could not find all events.');
	}
	return {
		events: Events
	};
};

// const eventsResponse = await fetch('/api/events');
// const events = await eventsResponse.json();
// const firstResponse = await fetch('/api/events?n=1');
// const first = await firstResponse.json();
// if (!events || !first) {
// 	throw error(404, 'Could not fetch events');
// }
// return {
// 	events: events,
// 	first: first[0]
// };
