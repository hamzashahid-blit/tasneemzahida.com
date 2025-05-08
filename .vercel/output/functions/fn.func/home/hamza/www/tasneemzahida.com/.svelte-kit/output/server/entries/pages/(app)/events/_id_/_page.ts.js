import { e as error } from "../../../../../chunks/index2.js";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { a as allEvents } from "../../../../../chunks/events.js";
const ssr = false;
const csr = true;
const load = async ({ fetch, params }) => {
  if (!allEvents) {
    throw error(404, "We could not find all events.");
  }
  const event = allEvents.find(
    (event2) => event2.id === params.id
  );
  if (!event) {
    throw error(404, "We could not find the event you were looking for.");
  }
  const md = await marked.parse(event.content);
  event.content = DOMPurify.sanitize(md);
  return {
    event
  };
};
export {
  csr,
  load,
  ssr
};
