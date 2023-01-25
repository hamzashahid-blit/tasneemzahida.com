import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const eventsResponse = await fetch('/api/events');
	const events = await eventsResponse.json();
	const firstResponse = await fetch('/api/events?n=1');
	const first = await firstResponse.json();
	if (!events || !first) {
		throw error(404, 'Could not fetch events');
	}
	return {
		events: events,
		first: first[0]
	};
};
