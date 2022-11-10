import { json } from '@sveltejs/kit';

export const ssr = true;

import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch }) => {
	let response = await fetch(`/api/events?n=4`);
	let recentEvents: ParsedEvent[] = await response.json();
	return {
		events: recentEvents
	};
};
