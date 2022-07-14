/**
 * Copyright 2021 mmmint.ai info@mmmint.ai - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential to MMM Intelligence UG (haftungsbeschränkt).
 */
import { NetworkError } from './error/NetworkError';
import { KnownHttpExceptionMap } from './error/KnownHttpExceptionMap';
import { IHttpExceptionDetail } from './error/IHttpExceptionDetail';

/**
 * Copyright 2021 mmmint.ai info@mmmint.ai - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential to MMM Intelligence UG (haftungsbeschränkt).
 */
import { IErrorHandler } from "./IErrorHandler";

/**
 * Maps response data to @see IHttpExceptionDetail
 */
export class HttpExceptionDetailMapper {
  /**
   * Maps response data to @see IHttpExceptionDetail
   *
   * @param data
   * @returns {IHttpExceptionDetail} or undefined if not mappable
   */
  public map(data: any): IHttpExceptionDetail | undefined {
    if (!data) {
      return undefined;
    }

    try {
      return {
        error: data.error,
        statusCode: data.statusCode,
        timestamp: data.timestamp,
        path: data.path
      } as IHttpExceptionDetail;
    } catch {
      return undefined;
    }
  }
}

/**
 * Error handler that is called when an error occurs in the axios request to map to a known http exception.
 */
export class AxiosErrorToExceptionHandler implements IErrorHandler {
  /**
   * The mapper to map the response data to @see IHttpExceptionDetail
   */
  private readonly exceptionDetailMapper: HttpExceptionDetailMapper;

  /**
   * @param mapper
   * @class the AxiosErrorToExceptionHandler instance
   */
  constructor(mapper: HttpExceptionDetailMapper = new HttpExceptionDetailMapper()) {
    this.exceptionDetailMapper = mapper;
  }

  /**
   * Handles the error. Maps the `error.response.status` to the corresponding known HTTP exception mapped in @see KnownHttpExceptionMap.
   * If the exception is known a new exception with the specific known type is thrown.
   *
   * @throws a known error exception based on @see KnownHttpExceptionMap
   * @param error throws a specific error if the error is a known http status exception
   */
  handle(error: any): any {
    if (error.response && error.response.status) {
      const status = error.response.status;
      const message = error.response.data.message ?? "";
      const data = this.exceptionDetailMapper.map(error.response.data);

      const exception = KnownHttpExceptionMap.get(status);

      if (exception) {
        throw new exception(message, data);
      }
    }

    // If there is not status on the error it is probably a Network Error from Axios.
    if (!error.status) {
      throw new NetworkError(error);
    }
  }
}
