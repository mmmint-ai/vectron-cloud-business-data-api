import { EmptyTokenProvider } from "./axios/EmptyTokenProvider";
import { AxiosInstanceProvider } from "./axios/AxiosInstanceProvider";
import { DataEntryApi } from "../bi-proxy/api";
import { Configuration } from "../bi-proxy/configuration";
import { DataEntry } from "../bi-proxy/models";
import { AuthInfo } from "./AuthInfo";
import { BASE_PATH } from "../bi-proxy/base";
import { AxiosRequestConfig } from "axios";

/**
 * Vectron client
 */
export class Client {
  /**
   * Configuration for the API client
   */
  private conf: Configuration;

  /**
   * The api
   */
  private dataEntryApi: DataEntryApi;

  /**
   * @class Client
   * @param authInfo Authentication information
   */
  constructor(
    private authInfo: AuthInfo,
    private axiosInstanceProvider: AxiosInstanceProvider = new AxiosInstanceProvider(
      new EmptyTokenProvider(),
      BASE_PATH
    )
  ) {
    this.conf = {
      apiKey: authInfo.apiKey,
    };

    if (!this.authInfo.apiKey) throw new Error(`apiKey is not set`);
    if (!this.authInfo.authKey) throw new Error(`apiKey is not set`);

    const axios = this.axiosInstanceProvider.create();
    this.dataEntryApi = new DataEntryApi(this.conf, BASE_PATH, axios);
  }

  async getDataEntries(siteId: string): Promise<DataEntry[]> {
    if (!siteId) throw new Error(`siteId is not set`);

    const res = await this.dataEntryApi.getDataEntriesBySiteUsingGET1(
      siteId,
      this._getRequestConfig()
    );
    console.log(res.data);

    return res.data;
  }

  /**
   * Creates an axios request config
   *
   * @returns AxiosRequestConfig
   */
  _getRequestConfig(): AxiosRequestConfig {
    const headers: any = [];
    headers["X-Authorization-Token"] = `${this.authInfo.authKey}`;
    const requestConfig: AxiosRequestConfig = {
      headers: headers,
    };
    return requestConfig;
  }
}
