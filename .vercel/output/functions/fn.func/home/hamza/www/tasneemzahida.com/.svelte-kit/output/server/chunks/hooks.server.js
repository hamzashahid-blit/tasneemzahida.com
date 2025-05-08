import { r as redirect } from "./index2.js";
import { d as private_env } from "./shared-server.js";
const handle = async ({ event, resolve }) => {
  event.locals.isAdmin = false;
  if (event.url.pathname.startsWith("/dashboard")) {
    const session = event.cookies.get("session");
    if (!session) throw redirect(303, "/login");
    if (session === private_env.AUTHTOKEN) event.locals.isAdmin = true;
    if (!event.locals.isAdmin) throw redirect(303, "/login");
  }
  const response = await resolve(event);
  return response;
};
export {
  handle
};
