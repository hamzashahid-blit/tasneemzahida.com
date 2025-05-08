import { e as error } from "../../../chunks/index2.js";
import { p as paintings } from "../../../chunks/paintings.js";
import { a as allEvents } from "../../../chunks/events.js";
const ssr = false;
const csr = true;
const load = async ({ fetch }) => {
  if (!allEvents) {
    throw error(404, "We could not find any event.");
  }
  const recentEvents = allEvents.slice(0, 4);
  if (!paintings) {
    throw error(404, "We could not find any painting.");
  }
  const carouselPaintings = paintings.filter(
    (painting) => painting.category === "main"
  );
  return {
    events: recentEvents,
    paintings: carouselPaintings
  };
};
export {
  csr,
  load,
  ssr
};
