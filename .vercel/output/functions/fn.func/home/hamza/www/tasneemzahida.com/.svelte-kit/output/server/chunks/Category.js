import { a0 as ensure_array_like, W as escape_html, X as attr, T as pop, Y as stringify, Q as push } from "./index.js";
function Category($$payload, $$props) {
  push();
  const { categoryName, paintings } = $$props;
  const each_array = ensure_array_like(paintings);
  $$payload.out += `<div class="min-h-[calc(100vh-theme(space.28)-theme(space.28)-theme(space.14))] lg:min-h-[calc(100vh-theme(space.28)-theme(space.28)-theme(space.28)-theme(space.6))] my-20 lg:my-28 mx-10 lg:mx-60"><h1 class="text-6xl lg:text-hxl text-primary mb-7 lg:mb-10">${escape_html(categoryName)}</h1> <div class="grid-col gap-8 lg:columns-3 md:columns-2 sm:columns-1"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { id, category, filename, title, description } = each_array[$$index];
    $$payload.out += `<a data-sveltekit-prefetch=""${attr("href", `/paintings/${stringify(id)}`)}><div class="brick before:content-[''] before:absolute before:w-full before:h-1/2 lg:before:top-full before:left-0 before:bg-gradient-to-b before:from-transparent before:to-[rgb(0,0,0,0.4)] before:transition-all before:duration-300 before:top-1/2 order-last place-self-start relative mb-8 transition-all overflow-hidden rounded-sm svelte-1c3xopp"><img class="w-full svelte-1c3xopp"${attr("src", new URL(`/src/lib/assets/${category}/${filename}`, import.meta.url).href)}${attr("alt", title)}> <h2 class="absolute bottom-3 left-5 pr-7 text-white text-2xl lg:text-3xl text-heading w-full text-left transition-all svelte-1c3xopp">${escape_html(title)}</h2></div></a>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  Category as C
};
