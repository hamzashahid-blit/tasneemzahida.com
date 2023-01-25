import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import type { ParsedEvent } from 'src/types/ParsedEvent';

import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`/api/events/${params.id}`);
	const event: ParsedEvent = await response.json();
	return {
		event: event
	};
};
