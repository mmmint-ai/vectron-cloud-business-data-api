import { AuthorizationApi, DataEntryApi } from "./bi-client/api";
import { Configuration } from "./bi-client/configuration";
import { Token } from "./bi-client/models";
import axios, { AxiosRequestConfig } from "./bi-client/node_modules/axios";
import "dotenv/config";
require("dotenv").config();
console.log(process.env);

async function main(
  siteId: string,
  apiKey: string,
  login: string,
  password: string
) {
  /**
   * Get the token
   */
  const conf: Configuration = {
    apiKey: apiKey,
  };
  const authApi = new AuthorizationApi(conf);
  const tokenResult = await authApi.loginPartnerUsingPOST({
    login: login,
    password: password,
  });
  const token: Token = tokenResult.data;

  /**
   * Attempt the data fetch
   */
  const headers: any = [];
  headers["Authorization"] = `${token.token}`;
  const config: AxiosRequestConfig = {
    headers: headers,
  };
  conf.accessToken = token.token;
  const dataApi = new DataEntryApi(conf);
  try {
    const res = await dataApi.getDataEntriesBySiteUsingGET(siteId, config);
    console.log(res);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.toJSON());
      console.error(error.response?.data);
    }
  }
}

const SITE_ID = process.env.SITE_ID;
const API_KEY = process.env.API_KEY;
const PASSWORD = process.env.PASSWORD;
const LOGIN = process.env.LOGIN;

if(!SITE_ID) throw Error("Missing SITE_ID")
if (!API_KEY) throw Error("Missing API_KEY");
if (!PASSWORD) throw Error("Missing PASSWORD");
if (!LOGIN) throw Error("Missing LOGIN");

main(SITE_ID, API_KEY, PASSWORD, LOGIN);
