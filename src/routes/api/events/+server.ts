import fs from 'fs';
import path from 'path';
import { error, json } from '@sveltejs/kit';
import Blogs from '$lib/assets/events.json';
import { marked } from 'marked';
import type { EventBlog } from 'src/types/EventBlog';
import type { ParsedEvent } from 'src/types/ParsedEvent';

export const ssr = true;
export const csr = false;

import type { RequestHandler } from './$types';
export const GET: RequestHandler = async ({ url }) => {
	// If there is the N parameter get the first N events otherwise get all events.
	let blogs: EventBlog[] = url.searchParams.has('n')
		? Blogs.slice(0, url.searchParams.get('n'))
		: Blogs;
	let texts: string[] = [];
	for (let blog of blogs) {
		// TODO: doesn't account for extension length other than 3 use greedy regexp dot instead or smth
		let mdFilename: string = blog.mdFilename.slice(0, blog.mdFilename.length - 3);
		// let file: string = await import(`../../../lib/assets/events/${mdFilename}.md`);
		let file: string = fs.readFileSync(
			path.resolve(`src/lib/assets/events/${mdFilename}.md`),
			'utf-8'
		);
		// let bleh: string = new URL(`../../../lib/assets/events/${mdFilename}.md`, import.meta.url).href
		console.log('MY URLRULRLRLRULLRURLURLRULRURLURLURL: ', file);
		texts.push(marked.parse(file.toString()));
	}
	console.log('FILEEEEEEEEEEEEEEEEEEE: ', texts);
	let data: ParsedEvent[] = blogs.map((blog, i) => {
		return {
			blog: blog,
			text: texts[i]
		};
	});
	if (data) {
		return new json(data);
	}
	throw error(404, 'Could not find all events');
};
