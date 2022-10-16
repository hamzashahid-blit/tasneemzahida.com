import fs from 'fs';
import path from "path";
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
		let mdFilename: string = blog.mdFilename.slice(0, blog.mdFilename.length - 3);
		let bleh: string = await import(`../../../../lib/assets/events/${mdFilename}.md`);
		let file: string = fs.readFileSync(path.resolve(`src/lib/assets/events/${mdFilename}.md`), "utf-8")
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
