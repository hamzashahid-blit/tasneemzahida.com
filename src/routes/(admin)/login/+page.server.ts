import type { Actions } from './$types';
import { env } from '$env/dynamic/private';
import { redirect, fail } from '@sveltejs/kit';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export const actions: Actions = {
    login: async ({ cookies, request }) => {
        const data: FormData = await request.formData();
        const username: string = data.has('username') ? String(data.get('username')) : '';
        const password: string = data.has('password') ? String(data.get('password')) : '';
        
        const errors: Record<string, string> = {};
        if (!username || typeof username !== 'string') errors.username = 'Username is required!';
        if (!password || typeof password !== 'string') errors.password = 'Password is required!';
        if (!env.PASSPHRASE || !env.USERNAME) errors.login = 'No admin account exists!';
        if (areErrors(errors)) return createFail(data, errors);

        const usernameMatch = await bcrypt.compare(username, env.USERNAME!);
        const passwordMatch = await bcrypt.compare(password, env.PASSPHRASE!);
        if (!usernameMatch || !passwordMatch) {
            errors.username = errors.password = 'Either username or password is incorrect!';
            return createFail(data, errors);
        }

        /// User is now authenticated
        env.AUTHTOKEN = uuidv4();
        cookies.set('session', env.AUTHTOKEN, {
            path: '/', // send cookie for every page
            httpOnly: true, // server side cookie
            sameSite: 'strict', // only requests from same site can send cookies
            secure: false, // send over https
            maxAge: 60 * 60 * 24 * 30, // Expire cookie after a month
        })
        
        throw redirect(303, '/dashboard');
    }
}

const areErrors = (errors: Record<string, string>): boolean =>
    Object.keys(errors).length > 0;

const createFail = (data: FormData, errors: Record<string, string>): any => {
    const failData = {
        data: Object.fromEntries(data),
        errors,
    }
    return fail(400, failData);
}
