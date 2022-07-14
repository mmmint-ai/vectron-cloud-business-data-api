/**
 * Copyright 2021 mmmint.ai info@mmmint.ai - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential to MMM Intelligence UG (haftungsbeschränkt).
 */

import {
  BadGatewayException,
  BadRequestException,
  ConflictException,
  ForbiddenException,
  GatewayTimeoutException,
  HttpException,
  InternalServerErrorException,
  MethodNotAllowedException,
  NotFoundException,
  ServiceNotImplementedException,
  ServiceUnavailableException,
  UnauthorizedException
} from "./HttpException";

/**
 * Lookup table of status code to exception type.
 */
export const KnownHttpExceptionMap = new Map<number, typeof HttpException>([
  [400, BadRequestException],
  [401, UnauthorizedException],
  [403, ForbiddenException],
  [404, NotFoundException],
  [405, MethodNotAllowedException],
  [409, ConflictException],
  [500, InternalServerErrorException],
  [501, ServiceNotImplementedException],
  [502, BadGatewayException],
  [503, ServiceUnavailableException],
  [504, GatewayTimeoutException]
]);
