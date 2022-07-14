import "dotenv/config";
import { AuthInfo } from "./vectron-client/AuthInfo";
import { Client } from "./vectron-client/client";
/**
 * Source the environment variables and check if all present
 */
require("dotenv").config();
const envs = ["SITE_ID", "API_KEY", "AUTH_KEY", "PASSWORD", "LOGIN"];
envs.forEach((e) => {
  if (!process.env[e]) throw new Error(`${e} is not set`);
});

const authInfo: AuthInfo = {
  login: process.env.LOGIN!,
  password: process.env.PASSWORD!,
  authKey: process.env.AUTH_KEY!,
  apiKey: process.env.API_KEY!,
};

/**
 * Fetch data entries
 */
const c = new Client(authInfo);
c.getDataEntries(process.env.SITE_ID!);
