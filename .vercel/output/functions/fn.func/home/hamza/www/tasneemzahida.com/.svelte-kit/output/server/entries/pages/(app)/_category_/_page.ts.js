import { e as error } from "../../../../chunks/index2.js";
import { p as paintings } from "../../../../chunks/paintings.js";
const ssr = false;
const csr = true;
const load = async ({ params }) => {
  const category = params["category"];
  const paintings$1 = paintings.filter(
    (painting) => painting.category === category
  );
  if (!paintings$1) throw error(404, `No '${category}' paintings found.`);
  const categoryNames = {
    main: "Main Gallery",
    calligraphy: "Calligraphy",
    other: "Other Art"
  };
  return {
    paintings: paintings$1,
    categoryName: categoryNames[category]
  };
};
export {
  csr,
  load,
  ssr
};
