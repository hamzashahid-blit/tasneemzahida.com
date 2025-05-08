import { e as error } from "../../../../chunks/index2.js";
import { p as paintings } from "../../../../chunks/paintings.js";
import { a as allEvents } from "../../../../chunks/events.js";
const csr = true;
const ssr = false;
const load = async () => {
  if (!paintings) throw error(404, "We could not find any painting.");
  if (!allEvents) throw error(404, "We could not find any event.");
  return {
    paintings,
    events: allEvents
  };
};
export {
  csr,
  load,
  ssr
};
