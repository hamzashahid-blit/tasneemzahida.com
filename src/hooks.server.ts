import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.isAdmin = false;
    if (event.url.pathname.startsWith('/dashboard')) {
        const session = event.cookies.get('session');
        if (!session) throw redirect(303, '/login');
        if (session === env.AUTHTOKEN) event.locals.isAdmin = true;
        if (!event.locals.isAdmin) throw redirect(303, '/login');
    }

    const response: Response = await resolve(event);
    return response;
}
