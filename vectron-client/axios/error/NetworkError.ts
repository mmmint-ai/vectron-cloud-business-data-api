/**
 * Copyright 2021 mmmint.ai info@mmmint.ai - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential to MMM Intelligence UG (haftungsbeschränkt).
 */

/**
 * The exception that is thrown when an Axios request failes without a known HTTP status code.
 *
 * @see https://github.com/axios/axios/issues/383#issuecomment-234079506
 */
export class NetworkError extends Error {
  /**
   * @param message
   * @class Initialize NetworkError
   */
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}
