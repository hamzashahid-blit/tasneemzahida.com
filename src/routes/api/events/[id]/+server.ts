import fs from 'fs';
import Blogs from '$lib/assets/events.json';
import { error, json } from '@sveltejs/kit';
import { marked } from 'marked';
import type { ParsedEvent } from 'src/types/ParsedEvent';
import type { EventBlog } from 'src/types/EventBlog';

import type { RequestHandler } from './$types';
export const GET: RequestHandler = async ({ params }) => {
	let blogs: EventBlog[] = Blogs;
	let texts: string[] = [];
	for (let blog of blogs) {
		let file: string = fs.readFileSync(
			new URL(`src/lib/assets/events/${blog.mdFilename}`, import.meta.url).href,
			'utf-8'
		);
		texts.push(marked.parse(file));
	}
	let data: ParsedEvent[] = blogs.map((blog, i) => {
		return {
			blog: blog,
			text: texts[i]
		};
	});
	let parsedEvent: ParsedEvent = data.find(({ blog, _ }) => blog.id === params.id);
	if (parsedEvent) {
		return new json(parsedEvent);
	}
	throw error(404, `Event with ID "${params.id}" not found.`);
};
