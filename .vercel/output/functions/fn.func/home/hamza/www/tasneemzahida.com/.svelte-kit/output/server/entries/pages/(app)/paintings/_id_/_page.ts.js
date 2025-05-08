import { e as error } from "../../../../../chunks/index2.js";
import { p as paintings } from "../../../../../chunks/paintings.js";
const csr = true;
const ssr = false;
const load = async ({ params }) => {
  if (!paintings) {
    throw error(404, "We could not find any painting.");
  }
  const painting = paintings.find(
    (painting2) => params.id === painting2.id
  );
  if (!painting) {
    throw error(404, "We could not find the painting you were looking for.");
  }
  return {
    painting
  };
};
export {
  csr,
  load,
  ssr
};
