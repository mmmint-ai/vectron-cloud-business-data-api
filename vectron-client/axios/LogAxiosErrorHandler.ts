/**
 * Copyright 2021 mmmint.ai info@mmmint.ai - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential to MMM Intelligence UG (haftungsbeschränkt).
 */

import { IErrorHandler } from "./IErrorHandler";

/**
 * Error handler that is called when an error occurs in the axios request and console logs stuff.
 */
export class LogAxiosErrorHandler implements IErrorHandler {
  handle(error: any): any {
    console.log(error);

    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error", error.message);
    }
  }
}
