import { AuthorizationApi, DataEntryApi } from "./bi-client/api";
import { Configuration } from "./bi-client/configuration";
import { Token } from "./bi-client/models";
import axios, { AxiosRequestConfig } from "./bi-client/node_modules/axios";
import "dotenv/config";
require("dotenv").config();

async function main(
  siteId: string,
  apiKey: string,
  authKey: string,
  login: string,
  password: string
) {
  /**
   * Get the token
   */
  const conf: Configuration = {
    apiKey: apiKey,
    accessToken: authKey,
  };
  const authApi = new AuthorizationApi(conf);
  // const tokenResult = await authApi.loginPartnerUsingPOST(
  //   {
  //     login: login,
  //     password: password,
  //   }
  // );
  // const token: Token = tokenResult.data;

  /**
   * Attempt the data fetch
   */
  const headers: any = [];
  headers["X-Authorization-Token"] = `${authKey}`;
  const config: AxiosRequestConfig = {
    headers: headers,
  };
  const dataApi = new DataEntryApi(conf);
  try {
    const res = await dataApi.getDataEntriesBySiteUsingGET1(siteId, config);
    console.log(res.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.toJSON());
      console.error(error.response?.data);
    }
  }
}

const SITE_ID = process.env.SITE_ID;
const API_KEY = process.env.API_KEY;
const AUTH_KEY = process.env.AUTH_KEY;
const PASSWORD = process.env.PASSWORD;
const LOGIN = process.env.LOGIN;

if (!SITE_ID) throw Error("Missing SITE_ID");
if (!API_KEY) throw Error("Missing API_KEY");
if (!AUTH_KEY) throw Error("Missing AUTH_KEY");
if (!PASSWORD) throw Error("Missing PASSWORD");
if (!LOGIN) throw Error("Missing LOGIN");

main(SITE_ID, API_KEY, AUTH_KEY, LOGIN, PASSWORD);
