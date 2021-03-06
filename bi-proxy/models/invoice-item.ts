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
 * @interface InvoiceItem
 */
export interface InvoiceItem {
    /**
     * Unique id the item
     * @type {string}
     * @memberof InvoiceItem
     */
    invoiceItemId?: string;
    /**
     * The id of the parent item
     * @type {string}
     * @memberof InvoiceItem
     */
    parentInvoiceItemId?: string;
    /**
     * Price of the item
     * @type {number}
     * @memberof InvoiceItem
     */
    price?: number;
    /**
     * Unique product id of the item
     * @type {string}
     * @memberof InvoiceItem
     */
    productId?: string;
    /**
     * Quantity of the item
     * @type {number}
     * @memberof InvoiceItem
     */
    quantity?: number;
    /**
     * Tax rate of the item
     * @type {number}
     * @memberof InvoiceItem
     */
    taxRate?: number;
}
