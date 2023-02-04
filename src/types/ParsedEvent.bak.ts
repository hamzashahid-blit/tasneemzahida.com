import type { EventBlog } from './EventBlog.ts';

export interface ParsedEvent {
	blog: EventBlog;
	text: string;
}
