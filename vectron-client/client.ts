/**
 * Copyright 2021 mmmint.ai info@mmmint.ai - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential to MMM Intelligence UG (haftungsbeschränkt).
 */
import { TransactionApi } from "./../bi-proxy/apis/transaction-api";
import { EmptyTokenProvider } from "./axios/EmptyTokenProvider";
import { AxiosInstanceProvider } from "./axios/AxiosInstanceProvider";
import { DataEntryApi } from "../bi-proxy/api";
import { Configuration } from "../bi-proxy/configuration";
import { DataEntry, DetailedInvoice } from "../bi-proxy/models";
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
   * The data entry api
   */
  private dataEntryApi: DataEntryApi;

  /**
   * The transaction api
   */
  private transactionApi: TransactionApi;

  /**
   * @class Client
   * @param authInfo Authentication information
   * @param axiosInstanceProvider
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

    if (!this.authInfo.apiKey) {
      throw new Error(`apiKey is not set`);
    }
    if (!this.authInfo.authKey) {
      throw new Error(`apiKey is not set`);
    }

    const axios = this.axiosInstanceProvider.create();
    this.dataEntryApi = new DataEntryApi(this.conf, BASE_PATH, axios);
    this.transactionApi = new TransactionApi(this.conf, BASE_PATH, axios);
  }

  /**
   *
   * @param siteId
   */
  async getDataEntries(siteId: string): Promise<DataEntry[]> {
    if (!siteId) {
      throw new Error(`siteId is not set`);
    }

    const res = await this.dataEntryApi.getDataEntriesBySiteUsingGET1(
      siteId,
      this._getRequestConfig()
    );

    return res.data;
  }

  /**
   *
   * @param siteId
   */
  async getTransactions(siteId: string): Promise<DetailedInvoice[]> {
    if (!siteId) {
      throw new Error(`siteId is not set`);
    }

    const res = await this.transactionApi.getTransactionsUsingGET2(
      siteId,
      undefined,
      this._getRequestConfig()
    );

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
