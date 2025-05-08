import { W as escape_html, a1 as bind_props, T as pop, Q as push } from "../../../../chunks/index.js";
import { C as Category } from "../../../../chunks/Category.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const snapshot = {
    capture: () => window.scrollY,
    restore: (value) => value
  };
  $$payload.out += `<title>Tasneem Zahida: ${escape_html(data.categoryName)}</title> `;
  Category($$payload, {
    categoryName: data.categoryName,
    paintings: data.paintings
  });
  $$payload.out += `<!---->`;
  bind_props($$props, { snapshot });
  pop();
}
export {
  _page as default
};
