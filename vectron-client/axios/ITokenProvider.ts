/**
 * Copyright 2021 mmmint.ai info@mmmint.ai - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential to MMM Intelligence UG (haftungsbeschränkt).
 */

import { AxiosRequestConfig } from "axios";

/**
 * Token provider interface as a axios interceptor.
 */
export interface ITokenProvider {

  /**
   * Add authentication token to request.
   *
   * @param AxiosRequestConfig to add auth token to axios request config
   * @returns AxiosRequestConfig to use in axios.request
   */
  addTokenToRequest(config: AxiosRequestConfig): Promise<AxiosRequestConfig>;
}
