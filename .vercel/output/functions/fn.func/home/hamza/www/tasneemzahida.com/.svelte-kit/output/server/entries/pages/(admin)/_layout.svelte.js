import { T as pop, Q as push } from "../../../chunks/index.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"> <title>Tasneem Zahida: Dashboard</title> `;
  children?.($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
