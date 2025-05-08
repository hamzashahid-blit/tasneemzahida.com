import { d as private_env } from "../../../../chunks/shared-server.js";
import { r as redirect, f as fail } from "../../../../chunks/index2.js";
import * as bcrypt from "bcrypt";
import { v4 } from "uuid";
const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const username = data.has("username") ? String(data.get("username")) : "";
    const password = data.has("password") ? String(data.get("password")) : "";
    const errors = {};
    if (!username || typeof username !== "string") errors.username = "Username is required!";
    if (!password || typeof password !== "string") errors.password = "Password is required!";
    if (!private_env.PASSPHRASE || !private_env.USERNAME) errors.login = "No admin account exists!";
    if (areErrors(errors)) return createFail(data, errors);
    const usernameMatch = await bcrypt.compare(username, private_env.USERNAME);
    const passwordMatch = await bcrypt.compare(password, private_env.PASSPHRASE);
    if (!usernameMatch || !passwordMatch) {
      errors.username = errors.password = "Either username or password is incorrect!";
      return createFail(data, errors);
    }
    private_env.AUTHTOKEN = v4();
    cookies.set("session", private_env.AUTHTOKEN, {
      path: "/",
      // send cookie for every page
      httpOnly: true,
      // server side cookie
      sameSite: "strict",
      // only requests from same site can send cookies
      secure: false,
      // send over https
      maxAge: 60 * 60 * 24 * 30
      // Expire cookie after a month
    });
    throw redirect(303, "/dashboard");
  }
};
const areErrors = (errors) => Object.keys(errors).length > 0;
const createFail = (data, errors) => {
  const failData = {
    data: Object.fromEntries(data),
    errors
  };
  return fail(400, failData);
};
export {
  actions
};
