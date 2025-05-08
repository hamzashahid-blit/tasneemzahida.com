import { X as attr, Y as stringify, W as escape_html, a1 as bind_props, T as pop, Q as push, a0 as ensure_array_like } from "../../../chunks/index.js";
import { E as EventFooter } from "../../../chunks/EventFooter.js";
function AboutMe($$payload) {
  $$payload.out += `<div id="about-me" class="flex flex-col lg:flex-row items-center lg:justify-evenly lg:space-x-20 text-primary min-h-[calc(100vh-theme(space.28))] -mt-10 mb-32 lg:mb-36 mx-6 lg:mx-20"><div class="order-2 lg:order-1 flex flex-col"><h1 class="text-5xl lg:text-6xl mb-4 -mt-4">About <span class="font-fancy text-5xl lg:text-7xl -ml-2">me</span></h1> <p class="text-2xl max-w-2xl">Tasneem Zahida is a Pakistani artist who was brought up in Jeddah, Saudi Arabia. She takes inspiration from the Holy Quran and attempts to make it more accessible to the modern generation. Her journey of art started when she took fine arts as one of her majors in high school and soon developed a keen interest in painting. She then joined the Saudi Arts Center and further enhanced her skills from the Art Academy of Canada while also learning Arabic calligraphy from various calligraphists.</p> <a class="text-2xl w-56 bg-primary border-2 rounded-full px-4 py-2 mt-6 text-center transition-all duration-200 text-white hover:text-primary hover:border-primary hover:bg-transparent hover:w-60" href="/main" data-sveltekit-prefetch="">Main Gallery →</a></div> <img class="order-1 lg:order-2 max-h-[30rem] rounded-xl drop-shadow-lg max-w-full flex lg:my-0 my-16" src="/about-me.jpg" alt="Portrait"></div>`;
}
function Categories($$payload) {
  $$payload.out += `<div id="categories" class="flex flex-col items-center justify-center mb-2 mx-6 svelte-fvp7re"><div id="main" alt="A painting showing main gallery" class="svelte-fvp7re"><h1 class="svelte-fvp7re">Main Gallery</h1> <a href="/main" data-sveltekit-prefetch="" class="svelte-fvp7re">View more</a></div> <div id="calligraphy" alt="A painting showing calligraphy" class="svelte-fvp7re"><h1 class="svelte-fvp7re">Calligraphy</h1> <a href="/calligraphy" data-sveltekit-prefetch="" class="svelte-fvp7re">View more</a></div> <div id="other" alt="A painting showing other art" class="svelte-fvp7re"><h1 class="svelte-fvp7re">Other Art</h1> <a href="/other" data-sveltekit-prefetch="" class="svelte-fvp7re">View more</a></div></div>`;
}
function Event($$payload, $$props) {
  push();
  let event = $$props["event"];
  $$payload.out += `<a data-sveltekit-prefetch=""${attr("href", `/events/${stringify(event.id)}`)} class="flex flex-col items-center max-w-[18rem] lg:max-w-[20rem] text-primary bg-softgray rounded-xl transition-all hover:scale-105 lg:hover:scale-110"><img class="rounded-t-xl w-[20rem]"${attr("src", new URL(`/src/lib/assets/events/${event.id}.png`, import.meta.url).href)} alt="The event"> <div class="p-5"><h1 class="mb-2 text-center font-heading text-2xl leading-7">${escape_html(event.title)}</h1> <p class="text-xl text-softprimary text-ellipsis leading-tight h-[15vh] lg:h-[25vh] overflow-hidden">${escape_html(event.description)}</p> <div class="flex items-center justify-between w-[100%] mt-4">`;
  EventFooter($$payload, {
    date: new Date(event.date),
    textLength: event.description.length
  });
  $$payload.out += `<!----></div></div></a>`;
  bind_props($$props, { event });
  pop();
}
function RecentEvents($$payload, $$props) {
  let events = $$props["events"];
  const each_array = ensure_array_like(events);
  $$payload.out += `<div class="flex flex-col justify-center h-max mx-10 lg:h-[120vh] mt-32 lg:mt-0"><div class="flex flex-col lg:flex-row items-center justify-center lg:space-x-[4%] space-y-10 lg:space-y-0"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let event = each_array[$$index];
    Event($$payload, { event });
  }
  $$payload.out += `<!--]--></div> <a class="text-primary text-2xl border-2 border-primary rounded-full px-4 py-1 mb-20 mt-12 lg:mb-8 lg:mt-20 transition-all duration-200 hover:text-white hover:bg-primary self-center" href="/events" data-sveltekit-prefetch="">All Events</a></div>`;
  bind_props($$props, { events });
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let events = data.events;
  data.paintings;
  $$payload.out += `<title>Tasneem Zahida</title> `;
  AboutMe($$payload);
  $$payload.out += `<!----> `;
  Categories($$payload);
  $$payload.out += `<!----> `;
  RecentEvents($$payload, { events });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
