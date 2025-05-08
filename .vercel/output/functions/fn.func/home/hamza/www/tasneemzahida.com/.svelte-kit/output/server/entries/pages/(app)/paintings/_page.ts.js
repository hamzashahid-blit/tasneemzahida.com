import { e as error, j as json } from "../../../../chunks/index2.js";
import { p as paintings } from "../../../../chunks/paintings.js";
const load = async () => {
  if (!paintings) {
    throw error(404, "We could not find all paintings.");
  }
  const response = json(paintings);
  const paintings$1 = await response.json();
  return {
    paintings: paintings$1
  };
};
export {
  load
};
