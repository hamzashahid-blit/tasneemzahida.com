import { X as attr, Y as stringify, T as pop, Q as push } from "../../../chunks/index.js";
function Navbar($$payload) {
  $$payload.out += `<nav${attr("class", `flex justify-evenly items-center text-primary mb-8 transition-all duration-300 ease-in-out z-20 svelte-1du6e8w ${stringify([""].filter(Boolean).join(" "))}`)}><a href="/" class="lg:order-2 max-w-[18em] w-[63vw] mx-5 z-20 translate-x-[calc(50vw-50%-theme(space.5))] lg:translate-x-0"><img src="/logo-small.png" alt="Logo"></a> <ul id="paintings" class="lg:order-1 z-30 svelte-1du6e8w"><li data-sveltekit-prefetch="" class="svelte-1du6e8w"><a href="/main">Main Gallery</a></li> <li data-sveltekit-prefetch="" class="svelte-1du6e8w"><a href="/calligraphy">Calligraphy</a></li> <li data-sveltekit-prefetch="" class="svelte-1du6e8w"><a href="/other">Other Art</a></li></ul> <ul id="others" class="lg:order-3 z-30 svelte-1du6e8w"><li data-sveltekit-prefetch="" class="svelte-1du6e8w"><a href="/events">Events</a></li> <li data-sveltekit-prefetch="" class="svelte-1du6e8w"><a href="/contacts">Contact Me</a></li></ul> <button class="lg:absolute lg:invisible order-2 lg:order-last ml-auto mr-4 flex flex-col space-y-1 antialiased no_highlights z-20" aria-label="Navigation Menu"><div class="bar svelte-1du6e8w"></div> <div class="bar svelte-1du6e8w"></div> <div class="bar svelte-1du6e8w"></div></button> <div id="nav-bg" class="h-[32rem] lg:h-[1rem] w-full absolute z-10 svelte-1du6e8w"></div></nav>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="w-full h-10 bg-softgray flex items-center pl-2"><h3 class="text-sm text-primary ml-2">© Tasneem Zahida 2024</h3></footer>`;
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  Navbar($$payload);
  $$payload.out += `<!----> `;
  children?.($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
