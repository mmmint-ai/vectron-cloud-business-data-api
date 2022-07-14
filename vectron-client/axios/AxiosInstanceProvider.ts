/**
 * Copyright 2021 mmmint.ai info@mmmint.ai - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential to MMM Intelligence UG (haftungsbeschränkt).
 */

import axios, { AxiosInstance } from 'axios';
import { AxiosErrorToExceptionHandler } from "./AxiosErrorToExceptionHandler";
import { IErrorHandler } from "./IErrorHandler";
import { LogAxiosErrorHandler } from "./LogAxiosErrorHandler";
import { ITokenProvider } from "./ITokenProvider";

/**
 * Provides the axios instance
 */
export class AxiosInstanceProvider {
  /**
   * The token provider.
   */
  private readonly tokenProvider: ITokenProvider;

  /**
   * The error handlers.
   */
  private readonly errorHandlers: IErrorHandler[];

  /**
   * The base url of the axios client
   */
  private readonly baseUrl: string;

  /**
   * The timeout in milliseconds.
   */
  private readonly timeout: number;

  /**
   * Creates an instance of the AxiosInstanceProvider.
   *
   * @class The AxiosInstanceProvider
   * @param tokenProvider the token provider
   * @param baseUrl - the base url of the axios client
   * @param timeout - the default timeout defaults to 60000
   * @param errorHandlers
   */
  constructor(
    tokenProvider: ITokenProvider,
    baseUrl: string,
    timeout = 60000,
    errorHandlers = [
      new LogAxiosErrorHandler(),
      new AxiosErrorToExceptionHandler(),
    ]
  ) {
    this.tokenProvider = tokenProvider;
    this.errorHandlers = errorHandlers;
    this.baseUrl = baseUrl;
    this.timeout = timeout;
  }

  /**
   * Creates a new AxiosInstance
   */
  create(): AxiosInstance {
    const axiosClient = axios.create({
      baseURL: this.baseUrl,
      timeout: this.timeout,
    });
    this.addTokenProvider(axiosClient);
    this.addErrorHandler(axiosClient);

    return axiosClient;
  }

  /**
   * Add a silent refresh token interceptor
   *
   * @param axiosClient - the instance to add the provider.
   */
  addTokenProvider(axiosClient: AxiosInstance) {
    axiosClient.interceptors.request.use(
      async (config) => await this.tokenProvider.addTokenToRequest(config)
    );
  }

  /**
   * Adds the error handlers to the axios client.
   *
   * @param axiosClient - the instance to add the provider.
   */
  addErrorHandler(axiosClient: AxiosInstance) {
    axiosClient.interceptors.response.use(
      (response) => response,
      (error) => {
        this.errorHandlers.forEach((handler) => handler.handle(error));
        
return Promise.reject(error);
      }
    );
  }
}
