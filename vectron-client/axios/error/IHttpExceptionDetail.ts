/**
 * Copyright 2021 mmmint.ai info@mmmint.ai - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential to MMM Intelligence UG (haftungsbeschränkt).
 */

/**
 * The ExceptionViewmodel returned from the API.
 */
export interface IHttpExceptionDetail {

  /**
   * Http Error code
   */
  statusCode: number;

  /**
   * Iso Timestamp
   */
  timestamp: string;

  /**
   * Request route
   */
  path: string;

  /**
   * Error Message
   */
  message?: string[] | string;

  /**
   * Error
   */
  error?: string;
}
