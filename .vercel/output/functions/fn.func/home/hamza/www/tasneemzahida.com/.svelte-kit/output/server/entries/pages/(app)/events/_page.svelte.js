import { X as attr, Y as stringify, W as escape_html, T as pop, Q as push, a0 as ensure_array_like } from "../../../../chunks/index.js";
import { E as EventFooter } from "../../../../chunks/EventFooter.js";
function Event($$payload, $$props) {
  push();
  let { event } = $$props;
  $$payload.out += `<a data-sveltekit-prefetch=""${attr("href", `/events/${stringify(event.id)}`)} class="flex flex-col items-center max-w-[20rem] md:max-w-full max-h-96 text-primary bg-softgray rounded-md transition-all hover:scale-105"><div class="rounded-t-xl flex overflow-hidden"><img class="rounded-t-xl self-center justify-self-center"${attr("src", new URL(`/src/lib/assets/events/${event.picture}`, import.meta.url).href)}${attr("alt", event.title)}></div> <h1 class="my-[0.6rem] lg:mx-[1rem] text-center font-heading text-2xl leading-7">${escape_html(event.title)}</h1> <p class="max-h-[50%] text-xl text-softprimary text-ellipsis align-bottom self-end overflow-hidden leading-tight mx-5">${escape_html(event.description)}</p> <div class="flex items-end justify-between w-[calc(100%-theme(space.10))] m-2">`;
  EventFooter($$payload, {
    date: new Date(event.date),
    textLength: event.content.length
  });
  $$payload.out += `<!----></div></a>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const events = data.events;
  let firstEvent;
  if (events?.length > 0) {
    firstEvent = data.events[0];
  }
  $$payload.out += `<title>Tasneem Zahida: Events</title> `;
  if (events?.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(events.slice(1));
    $$payload.out += `<div class="min-h-[calc(100vh-theme(space.28)-theme(space.7))] lg:min-h-[calc(100vh-theme(space.28)-theme(space.28)-theme(space.28)-theme(space.10))] mb-10 lg:my-28 mx-4 lg:mx-60"><h1 class="text-5xl md:mb-8 lg:text-hxl text-primary w-full invisible md:visible">Events</h1> <a data-sveltekit-prefetch="" class="transition-all duration-300 fixed lg:relative invisible lg:visible svelte-64xl2t"${attr("href", `/events/${stringify(firstEvent.id)}`)}><div class="before:content-[''] before:absolute before:h-1/2 before:w-full before:bg-gradient-to-b before:top-3/4 before:from-transparent before:to-[rgb(0,0,0,0.7)] before:transition-all before:duration-300 relative my-10 transition-all overflow-hidden rounded-lg svelte-64xl2t"><img id="firstImg" class="max-h-96 w-full object-cover svelte-64xl2t"${attr("src", new URL(`/src/lib/assets/events/${firstEvent.picture}`, import.meta.url).href)}${attr("alt", firstEvent.title)}> <div id="firstDescription" class="absolute -bottom-[calc(theme(space.20)+theme(space.4))] m-4 transition-all duration-300 svelte-64xl2t"><h1 class="text-softgray text-4xl mb-2">${escape_html(firstEvent.title)} <span class="text-xl">• `;
    EventFooter($$payload, {
      date: new Date(firstEvent.date),
      textLength: firstEvent.content.length
    });
    $$payload.out += `<!----></span></h1> <p class="text-softgray text-xl text-ellipsis overflow-hidden h-20">${escape_html(firstEvent.description)}</p></div></div></a> <div class="grid lg:grid-cols-3 md:grid-cols-3 gap-10 justify-center"><h1 class="text-5xl lg:text-hxl text-primary w-full md:invisible md:fixed">Events</h1> <div class="visible lg:invisible lg:fixed">`;
    Event($$payload, { event: firstEvent });
    $$payload.out += `<!----></div> <!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let event = each_array[$$index];
      Event($$payload, { event });
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="min-h-[calc(100vh-theme(space.28)-theme(space.14))] w-full flex items-center justify-center mb-10 -my-10"><h1 class="text-5xl text-primary">No Events...</h1></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
