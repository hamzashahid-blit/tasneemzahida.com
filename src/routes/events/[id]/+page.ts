import { error, json } from '@sveltejs/kit';
import { marked } from 'marked';
import Events from '$lib/assets/events.json';
import type { EventBlog } from 'src/types/EventBlog';

export const ssr = true;
export const csr = true;

import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch, params }) => {
	if (!Events) {
		throw error(404, 'We could not find all events.');
	}
	let event = Events.find((event) => event.id === params.id);
	if (!event) {
		throw error(404, 'We could not find the event you were looking for.');
	}
	event.content = marked.parse(event.content);
	console.log(event);
	return {
		event: event
	};
};
