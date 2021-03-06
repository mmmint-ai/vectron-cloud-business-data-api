/* tslint:disable */
/* eslint-disable */
/**
 * business-data-api
 * business-data-api API definitions
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DataInputMaskColumn } from './data-input-mask-column';
/**
 * 
 * @export
 * @interface DataInputMask
 */
export interface DataInputMask {
    /**
     * List of the input mask columns
     * @type {Array<DataInputMaskColumn>}
     * @memberof DataInputMask
     */
    inputMaskColumns?: Array<DataInputMaskColumn>;
    /**
     * The name of the input mask
     * @type {string}
     * @memberof DataInputMask
     */
    inputMaskName?: string;
    /**
     * The number of the input mask
     * @type {number}
     * @memberof DataInputMask
     */
    inputMaskNo?: number;
}
