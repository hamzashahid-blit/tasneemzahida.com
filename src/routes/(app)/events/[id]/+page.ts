import type { PageLoad } from './$types';
import type { Event } from '$mytypes/Event';
import { error, json } from '@sveltejs/kit';
import { marked } from 'marked';
import allEvents from '$assets/events.json';

export const ssr = false;
export const csr = true;

export const load: PageLoad = async ({ fetch, params }) => {
	if (!allEvents) {
		throw error(404, 'We could not find all events.');
	}
	const event: Event | undefined = allEvents.find(
        (event) => event.id === params.id
    );
	if (!event) {
		throw error(404, 'We could not find the event you were looking for.');
	}
	event.content = await marked.parse(event.content);
	return {
		event: event
	};
};
