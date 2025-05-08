import { W as escape_html, X as attr, T as pop, Q as push } from "../../../../../chunks/index.js";
import { h as html } from "../../../../../chunks/html.js";
import { E as EventFooter } from "../../../../../chunks/EventFooter.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let event = data.event;
  $$payload.out += `<title>Event: ${escape_html(event.title)}</title> <div class="text-primary flex flex-col justify-center mx-4 lg:mx-60 my-12 lg:my-28"><h1 class="text-4xl md:text-5xl lg:text-hxl mb-1">${escape_html(event.title)}</h1> <span class="md:text-xl">`;
  EventFooter($$payload, {
    date: new Date(event.date),
    textLength: event.content.length
  });
  $$payload.out += `<!----></span> <img class="rounded-[0.3rem] md:rounded-md mt-5 mb-10 max-h-[80vh] max-w-[100%] self-center"${attr("src", new URL(`/src/lib/assets/events/${event.picture}`, import.meta.url).href)} alt="About the event"> <div id="md" class="svelte-lr8aq5">${html(event.content)}</div></div>`;
  pop();
}
export {
  _page as default
};
