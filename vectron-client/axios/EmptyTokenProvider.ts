/**
 * Copyright 2021 mmmint.ai info@mmmint.ai - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential to MMM Intelligence UG (haftungsbeschränkt).
 */

import { AxiosRequestConfig } from 'axios';
import { ITokenProvider } from "./ITokenProvider";

/**
 * Adds an empty token provider as a axios interceptor.
 */
export class EmptyTokenProvider implements ITokenProvider {
  /**
   * Add nothing to the request.
   *
   * @param AxiosRequestConfig
   * @returns AxiosRequestConfig
   */
  async addTokenToRequest(config: AxiosRequestConfig) {
    return config;
  }
}
