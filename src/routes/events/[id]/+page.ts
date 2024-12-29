import type { PageLoad } from './$types';
import type { EventBlog } from '$mytypes/EventBlog';
import { error, json } from '@sveltejs/kit';
import { marked } from 'marked';
import Events from '$assets/events.json';

export const ssr = true;
export const csr = true;

export const load: PageLoad = async ({ fetch, params }) => {
	if (!Events) {
		throw error(404, 'We could not find all events.');
	}
	const event: EventBlog | undefined = Events.find(
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
