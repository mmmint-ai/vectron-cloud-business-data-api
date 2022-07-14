import { DataEntryApi } from "../bi-proxy/api";
import { Configuration } from "../bi-proxy/configuration";
import axios, { AxiosRequestConfig } from "../bi-proxy/node_modules/axios";
import { AuthInfo } from "./AuthInfo";

/**
 * Vectron client
 */
export class Client {
  /**
   * Configuration for the API client
   */
  private conf: Configuration;

  /**
   * @class Client
   * @param authInfo Authentication information
   */
  constructor(private authInfo: AuthInfo) {
    this.conf = {
      apiKey: authInfo.apiKey,
    };

    if (!this.authInfo.apiKey) throw new Error(`apiKey is not set`);
    if (!this.authInfo.authKey) throw new Error(`apiKey is not set`);
  }

  async getDataEntries(siteId: string) {
    if (!siteId) throw new Error(`siteId is not set`);

    const dataApi = new DataEntryApi(this.conf);
    try {
      const res = await dataApi.getDataEntriesBySiteUsingGET1(
        siteId,
        this._getRequestConfig()
      );
      console.log(res.data);

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.toJSON());
        console.error(error.response?.data);
      }
    }
  }

  _getRequestConfig(): AxiosRequestConfig {
    /**
     * Attempt the data fetch
     */
    const headers: any = [];
    headers["X-Authorization-Token"] = `${this.authInfo.authKey}`;
    const requestConfig: AxiosRequestConfig = {
      headers: headers,
    };
    return requestConfig;
  }
}
