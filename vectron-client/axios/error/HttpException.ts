/**
 * Copyright 2021 mmmint.ai info@mmmint.ai - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential to MMM Intelligence UG (haftungsbeschränkt).
 */

import { IHttpExceptionDetail } from "./IHttpExceptionDetail";

/**
 * The exception that is thrown when a request has client errors.
 * Make sure to add the exception to the @see KnownHttpExceptionMap.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
 */
export class HttpException extends Error {
  /**
   * Exception details returned from the API.
   */
  public data?: IHttpExceptionDetail;

  /**
   * @class Initialize HttpException
   */
  constructor(message: string, data?: IHttpExceptionDetail) {
    super(message);
    this.name = this.constructor.name;
    if (data) {
      this.data = data;
    }
    Object.setPrototypeOf(this, HttpException.prototype);
  }
}

/**
 * 400 Bad Request
 */
export class BadRequestException extends HttpException {
  /**
   * @class Initialize BadRequestException
   */
  constructor(message: string, data?: IHttpExceptionDetail) {
    super(message, data);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * 401 Unauthorized
 */
export class UnauthorizedException extends HttpException {
  /**
   * @class Initialize UnauthorizedException
   */
  constructor(message: string, data?: IHttpExceptionDetail) {
    super(message, data);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * 403 ForbiddenException
 */
export class ForbiddenException extends HttpException {
  /**
   * @class Initialize ForbiddenException
   */
  constructor(message: string, data?: IHttpExceptionDetail) {
    super(message, data);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, ForbiddenException.prototype);
  }
}

/**
 * 404 Not Found Exception
 */
export class NotFoundException extends HttpException {
  /**
   * @class Initialize NotFoundException
   */
  constructor(message: string, data?: IHttpExceptionDetail) {
    super(message, data);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * 405 Method Not Allowed
 */
export class MethodNotAllowedException extends HttpException {
  /**
   * @class Initialize NotFoundException
   */
  constructor(message: string, data?: IHttpExceptionDetail) {
    super(message, data);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, MethodNotAllowedException.prototype);
  }
}

/**
 * 409 Conflict
 */
export class ConflictException extends HttpException {
  /**
   * @class Initialize ConflictException
   */
  constructor(message: string, data?: IHttpExceptionDetail) {
    super(message, data);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * 500 Internal Server Error
 */
export class InternalServerErrorException extends HttpException {
  /**
   * @class Initialize NotFoundException
   */
  constructor(message: string, data?: IHttpExceptionDetail) {
    super(message, data);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
  }
}

/**
 * 501 Not Implemented
 */
export class ServiceNotImplementedException extends HttpException {
  /**
   * @class Initialize NotFoundException
   */
  constructor(message: string, data?: IHttpExceptionDetail) {
    super(message, data);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, ServiceNotImplementedException.prototype);
  }
}

/**
 * 502 Bad Gateway
 */
export class BadGatewayException extends HttpException {
  /**
   * @class Initialize NotFoundException
   */
  constructor(message: string, data?: IHttpExceptionDetail) {
    super(message, data);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, BadGatewayException.prototype);
  }
}

/**
 * 503 Service Unavailable
 */
export class ServiceUnavailableException extends HttpException {
  /**
   * @class Initialize NotFoundException
   */
  constructor(message: string, data?: IHttpExceptionDetail) {
    super(message, data);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * 504 Gateway Timeout
 */
export class GatewayTimeoutException extends HttpException {
  /**
   * @class Initialize NotFoundException
   */
  constructor(message: string, data?: IHttpExceptionDetail) {
    super(message, data);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, GatewayTimeoutException.prototype);
  }
}
