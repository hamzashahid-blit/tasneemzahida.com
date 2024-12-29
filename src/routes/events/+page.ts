import type { PageLoad } from './$types';
import type { EventBlog } from '$mytypes/EventBlog';
import { error, json } from '@sveltejs/kit';
import { marked } from 'marked';
import events from '$assets/events.json';

export const prerender = true;
export const ssr = false;
export const csr = true;

export const load: PageLoad = async ({ fetch }) => {
	if (!events) {
		throw error(404, 'We could not find all events.');
	}
	return {
		events: events
	};
};
