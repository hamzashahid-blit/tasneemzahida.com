import { V as getContext, W as escape_html, Z as store_get, _ as unsubscribe_stores, T as pop, Q as push } from "../../../chunks/index.js";
import "../../../chunks/client.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="min-h-[calc(100vh-theme(space.28)-theme(space.14))] w-full flex items-center justify-center mb-10 -my-10"><h2 class="text-5xl text-primary"><span class="text-gray-500">[${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}]</span> ${escape_html(store_get($$store_subs ??= {}, "$page", page).error.message)}</h2></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
