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
/**
 * 
 * @export
 * @interface InvoiceItemSurcharge
 */
export interface InvoiceItemSurcharge {
    /**
     * Unique id of the referencing invoice item
     * @type {string}
     * @memberof InvoiceItemSurcharge
     */
    invoiceItemId?: string;
    /**
     * Human readable name of the surcharge
     * @type {string}
     * @memberof InvoiceItemSurcharge
     */
    name?: string;
    /**
     * Human readable numeric identifier of the surcharge
     * @type {string}
     * @memberof InvoiceItemSurcharge
     */
    number?: string;
    /**
     * Unique id of the surcharge
     * @type {string}
     * @memberof InvoiceItemSurcharge
     */
    surchargeId?: string;
    /**
     * Value of the surcharge
     * @type {number}
     * @memberof InvoiceItemSurcharge
     */
    value?: number;
}