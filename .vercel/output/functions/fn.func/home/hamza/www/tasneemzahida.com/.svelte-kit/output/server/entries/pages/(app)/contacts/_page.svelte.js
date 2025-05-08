import { a1 as bind_props, a7 as rest_props, a3 as fallback, a4 as spread_attributes, Y as stringify, a8 as slot, a9 as sanitize_props, a5 as copy_payload, a6 as assign_payload, T as pop, aa as spread_props, Q as push, a0 as ensure_array_like } from "../../../../chunks/index.js";
import { h as html } from "../../../../chunks/html.js";
function Raw($$payload, $$props) {
  let cursor = 870711;
  function getId() {
    cursor += 1;
    return `fa-${cursor.toString(16)}`;
  }
  let raw = "";
  let data = $$props["data"];
  function getRaw(data2) {
    if (!data2 || !data2.raw) {
      return "";
    }
    let rawData = data2.raw;
    const ids = {};
    rawData = rawData.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
      const uniqueId = getId();
      ids[id] = uniqueId;
      return ` id="${uniqueId}"`;
    });
    rawData = rawData.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
      const id = rawId || pointerId;
      if (!id || !ids[id]) {
        return match;
      }
      return `#${ids[id]}`;
    });
    return rawData;
  }
  raw = getRaw(data);
  $$payload.out += `<g>${html(raw)}</g>`;
  bind_props($$props, { data });
}
function Svg($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "width",
    "height",
    "box",
    "spin",
    "inverse",
    "pulse",
    "flip",
    "style",
    "label"
  ]);
  let className = fallback($$props["class"], "");
  let width = $$props["width"];
  let height = $$props["height"];
  let box = fallback($$props["box"], "0 0 0 0");
  let spin = fallback($$props["spin"], false);
  let inverse = fallback($$props["inverse"], false);
  let pulse = fallback($$props["pulse"], false);
  let flip = fallback($$props["flip"], "none");
  let style = fallback($$props["style"], "");
  let label = fallback($$props["label"], "");
  $$payload.out += `<svg${spread_attributes(
    {
      version: "1.1",
      class: `fa-icon ${stringify(className)}`,
      width,
      height,
      "aria-label": label,
      role: label ? "img" : "presentation",
      viewBox: box,
      style,
      ...$$restProps
    },
    {
      "svelte-bw0zb7": true,
      "fa-spin": spin,
      "fa-pulse": pulse,
      "fa-inverse": inverse,
      "fa-flip-horizontal": flip === "horizontal",
      "fa-flip-vertical": flip === "vertical"
    },
    void 0,
    3
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></svg>`;
  bind_props($$props, {
    class: className,
    width,
    height,
    box,
    spin,
    inverse,
    pulse,
    flip,
    style,
    label
  });
}
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "data",
    "scale",
    "spin",
    "inverse",
    "pulse",
    "flip",
    "label",
    "style"
  ]);
  push();
  let className = fallback($$props["class"], "");
  let data = $$props["data"];
  let iconData;
  let scale = fallback($$props["scale"], 1);
  let spin = fallback($$props["spin"], false);
  let inverse = fallback($$props["inverse"], false);
  let pulse = fallback($$props["pulse"], false);
  let flip = fallback($$props["flip"], void 0);
  let label = fallback($$props["label"], "");
  let style = fallback($$props["style"], "");
  let outerScale = 1;
  let width = 10;
  let height = 10;
  let combinedStyle;
  let box;
  function normaliseData(data2) {
    let name;
    let iconData2;
    if (!data2) {
      return void 0;
    } else if ("definition" in data2) {
      console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead");
      return void 0;
    } else if ("iconName" in data2 && "icon" in data2) {
      name = data2.iconName;
      const [width2, height2, , , path] = data2.icon;
      const paths = Array.isArray(path) ? path : [path];
      iconData2 = {
        width: width2,
        height: height2,
        paths: paths.map((path2) => {
          return { d: path2 };
        })
      };
    } else {
      name = Object.keys(data2)[0];
      iconData2 = data2[name];
    }
    return iconData2;
  }
  function normalisedScale() {
    let numScale = 1;
    if (typeof scale !== "undefined") {
      numScale = Number(scale);
    }
    if (isNaN(numScale) || numScale <= 0) {
      console.warn('Invalid prop: prop "scale" should be a number over 0.');
      return outerScale;
    }
    return numScale * outerScale;
  }
  function calculateBox() {
    if (iconData) {
      return `0 0 ${iconData.width} ${iconData.height}`;
    }
    return `0 0 ${width} ${height}`;
  }
  function calculateRatio() {
    if (!iconData) {
      return 1;
    }
    return Math.max(iconData.width, iconData.height) / 16;
  }
  function calculateWidth() {
    if (iconData) {
      return iconData.width / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateHeight() {
    if (iconData) {
      return iconData.height / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateStyle() {
    let combined = "";
    if (style !== null) {
      combined += style;
    }
    let size = normalisedScale();
    if (size === 1) {
      if (combined.length === 0) {
        return "";
      }
      return combined;
    }
    if (combined !== "" && !combined.endsWith(";")) {
      combined += "; ";
    }
    return `${combined}font-size: ${size}em`;
  }
  {
    iconData = normaliseData(data);
    width = calculateWidth();
    height = calculateHeight();
    combinedStyle = calculateStyle();
    box = calculateBox();
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Svg($$payload2, spread_props([
      {
        label,
        width,
        height,
        box,
        style: combinedStyle,
        spin,
        flip,
        inverse,
        pulse,
        class: className
      },
      $$restProps,
      {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          slot($$payload3, $$props, "default", {}, () => {
            const each_array = ensure_array_like(iconData?.paths || []);
            const each_array_1 = ensure_array_like(iconData?.polygons || []);
            $$payload3.out += `<!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let path = each_array[$$index];
              $$payload3.out += `<path${spread_attributes({ ...path }, void 0, void 0, 3)}></path>`;
            }
            $$payload3.out += `<!--]--><!--[-->`;
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let polygon = each_array_1[$$index_1];
              $$payload3.out += `<polygon${spread_attributes({ ...polygon }, void 0, void 0, 3)}></polygon>`;
            }
            $$payload3.out += `<!--]-->`;
            if (iconData?.raw) {
              $$payload3.out += "<!--[-->";
              Raw($$payload3, {
                get data() {
                  return iconData;
                },
                set data($$value) {
                  iconData = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]-->`;
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      }
    ]));
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    class: className,
    data,
    scale,
    spin,
    inverse,
    pulse,
    flip,
    label,
    style
  });
  pop();
}
const envelopeO = {
  "envelope-o": {
    width: 1792,
    height: 1792,
    paths: [
      {
        d: "M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-1-1q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zM1664 453v-11-13.5t-0.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h1 1q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zM1792 416v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
      }
    ]
  }
};
const instagram = {
  instagram: {
    width: 1536,
    height: 1792,
    paths: [
      {
        d: "M1024 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1162 896q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zM1270 486q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM768 266q-7 0-76.5-0.5t-105.5 0-96.5 3-103 10-71.5 18.5q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5 0.5 76.5-0.5 76.5 0 105.5 3 96.5 10 103 18.5 71.5q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-0.5 76.5 0.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-0.5-76.5 0.5-76.5 0-105.5-3-96.5-10-103-18.5-71.5q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5 0.5zM1536 896q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"
      }
    ]
  }
};
const whatsapp = {
  whatsapp: {
    width: 1536,
    height: 1792,
    paths: [
      {
        d: "M985 974q13 0 97.5 44t89.5 53q2 5 2 15 0 33-17 76-16 39-71 65.5t-102 26.5q-57 0-190-62-98-45-170-118t-148-185q-72-107-71-194v-8q3-91 74-158 24-22 52-22 6 0 18 1.5t19 1.5q19 0 26.5 6.5t15.5 27.5q8 20 33 88t25 75q0 21-34.5 57.5t-34.5 46.5q0 7 5 15 34 73 102 137 56 53 151 101 12 7 22 7 15 0 54-48.5t52-48.5zM782 1504q127 0 243.5-50t200.5-134 134-200.5 50-243.5-50-243.5-134-200.5-200.5-134-243.5-50-243.5 50-200.5 134-134 200.5-50 243.5q0 203 120 368l-79 233 242-77q158 104 345 104zM782 122q153 0 292.5 60t240.5 161 161 240.5 60 292.5-60 292.5-161 240.5-240.5 161-292.5 60q-195 0-365-94l-417 134 136-405q-108-178-108-389 0-153 60-292.5t161-240.5 240.5-161 292.5-60z"
      }
    ]
  }
};
const facebookSquare = {
  "facebook-square": {
    width: 1536,
    height: 1792,
    paths: [
      {
        d: "M1248 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-188v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-532q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z"
      }
    ]
  }
};
function _page($$payload) {
  $$payload.out += `<title>Tasneem Zahida: Contacts</title> <div class="min-h-[calc(100vh-theme(space.28)-theme(space.10)-theme(space.4))] lg:min-h-[calc(100vh-theme(space.20)-theme(space.2))] w-full flex items-center justify-center mb-10 -my-5 lg:-my-10"><div><h1 class="text-5xl lg:text-hxl text-primary mb-10">Contacts</h1> <div class="flex flex-col lg:flex-row items-center justify-center lg:space-x-14"><table class="table-auto text-primary text-[1.7em] lg:text-3xl mb-2 lg:mb-3"><tbody><tr><td class="text-center align-middle pr-4 pb-4 lg:pb-3"><a href="mailto:tasneemzart@gmail.com">`;
  Icon($$payload, { data: envelopeO, scale: 2 });
  $$payload.out += `<!----></a></td><td class="pb-3"><a href="mailto:tasneemzart@gmail.com">tasneemzart@gmail.com</a></td></tr><tr><td class="text-center align-middle pr-4">`;
  Icon($$payload, { data: whatsapp, scale: 2 });
  $$payload.out += `<!----></td><td>+1 (647) 819-2962</td></tr></tbody></table> <table class="table-auto w-full lg:w-min text-primary text-[1.7em] lg:text-3xl mb-3"><tbody><tr><td class="text-center align-middle pb-1 pr-4 pb-3"><a class="text-primary" href="https://www.instagram.com/tasneemzahida_art/">`;
  Icon($$payload, { data: instagram, scale: 2 });
  $$payload.out += `<!----></a></td><td class="pb-3"><a class="text-primary" href="https://www.instagram.com/tasneemzahida_art/">@tasneemzahida_art</a></td></tr><tr><td class="text-center align-middle pb-1 pr-4"><a class="text-primary" href="https://www.facebook.com/tasneem.zahida.1">`;
  Icon($$payload, { data: facebookSquare, scale: 1.85 });
  $$payload.out += `<!----></a></td><td><a class="text-primary" href="https://www.facebook.com/tasneem.zahida.1">Tasneem Zahida</a></td></tr></tbody></table></div></div></div>`;
}
export {
  _page as default
};
