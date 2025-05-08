import { T as pop, Q as push } from "../../../../chunks/index.js";
import { C as Category } from "../../../../chunks/Category.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<title>Tasneem Zahida: All Paintings</title> `;
  Category($$payload, {
    categoryName: "All Paintings",
    paintings: data.paintings
  });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
