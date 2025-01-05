import type { PageLoad } from './$types';
import type { Event } from '$mytypes/Event';
import { error, json } from '@sveltejs/kit';
import events from '$assets/events.json';

export const prerender = true;
export const ssr = false;
export const csr = true;

export const load: PageLoad = async () => {
	if (!events) {
		throw error(404, 'We could not find all events.');
	}
	return {
		events: events
	};
};
