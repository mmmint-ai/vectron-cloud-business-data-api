/**
 * Copyright 2021 mmmint.ai info@mmmint.ai - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential to MMM Intelligence UG (haftungsbeschränkt).
 */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-reason Because the envs are checked no-non-null on the start */

import { AuthInfo } from "../vectron-client/AuthInfo";
import { Client } from "../vectron-client/client";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

/**
 * Source the environment variables and check if all present
 */
const envs = ["SITE_ID", "API_KEY", "AUTH_KEY", "PASSWORD", "LOGIN"];
envs.forEach((e) => {
  if (!process.env[e]) {
    throw new Error(`${e} is not set`);
  }
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
const invoices = c.getTransactions(process.env.SITE_ID!);

invoices.then((v) => {
  console.log(v.length);
});
