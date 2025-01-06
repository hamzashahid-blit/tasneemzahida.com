import type { PageLoad } from './$types';
import type { Painting } from '$mytypes/Painting';
import type { Event } from '$mytypes/Event';
import { error } from '@sveltejs/kit'
import paintings from '$assets/paintings.json';
import events from '$assets/events.json';

export const ssr = false;
export const csr = true;

export const load: PageLoad = async() => {
    if (!paintings) throw error(404, 'We could not find any painting.');
    if (!events) throw error(404, 'We could not find any event.');
    return {
        paintings: paintings as Painting[],
        events: events as Event[],
    }
}
