import { e as error } from "../../../../chunks/index2.js";
import { a as allEvents } from "../../../../chunks/events.js";
const ssr = false;
const csr = true;
const load = async () => {
  if (!allEvents) {
    throw error(404, "We could not find all events.");
  }
  return {
    events: allEvents
  };
};
export {
  csr,
  load,
  ssr
};
