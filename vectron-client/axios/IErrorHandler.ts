/**
 * Copyright 2021 mmmint.ai info@mmmint.ai - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential to MMM Intelligence UG (haftungsbeschränkt).
 */

/**
 * Simple handler for handling errors.
 */
export interface IErrorHandler {

  /**
   * Handles the error.
   *
   * @param error any error object to handle
   */
  handle(error: any): any;
}
