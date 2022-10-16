import fs from 'fs';
import { error, json } from '@sveltejs/kit';
import Blogs from '$lib/assets/events.json';
import { marked } from 'marked';
import type { EventBlog } from 'src/types/EventBlog';
import type { ParsedEvent } from 'src/types/ParsedEvent';

import type { RequestHandler } from './$types';
export const GET: RequestHandler = async ({ url }) => {
	// If there is the N parameter get the first N events otherwise get all events.
	let blogs: EventBlog[] = url.searchParams.has('n')
		? Blogs.slice(0, url.searchParams.get('n'))
		: Blogs;
	let texts: string[] = [];
	for (let blog of blogs) {
		let mdFilename: string = blog.mdFilename.slice(0, blog.mdFilename.length - 3);
		let file: string = await import(`../../../lib/assets/events/${blog.mdFilename}.md`);
		texts.push(marked.parse(file));
	}
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
