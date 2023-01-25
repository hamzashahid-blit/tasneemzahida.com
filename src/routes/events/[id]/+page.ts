import { error, json } from '@sveltejs/kit';
import { marked } from 'marked';
import Blogs from '$lib/assets/events.json';
import type { EventBlog } from 'src/types/EventBlog';
import type { ParsedEvent } from 'src/types/ParsedEvent';

export const ssr = false;
export const csr = true;

import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch, params }) => {
	// const response = await fetch(`/api/events/${params.id}`);
	// const event: ParsedEvent = await response.json();
	// return {
	// 	event: event
	// };
	const eventUrl = new URL(`/src/lib/assets/events/heheevent.md`, import.meta.url).href;
	const response = await fetch(eventUrl);
	const result = await response.text();
	console.log('Markdown: ', result);
	return {
		goofyAhhh: result
	};
};
