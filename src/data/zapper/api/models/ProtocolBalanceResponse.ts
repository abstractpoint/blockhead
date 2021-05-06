/* tslint:disable */
/* eslint-disable */
/**
 * Zapper API
 * The Zapper API provides some of the most robust Defi related data, everything from liquidity and prices on different AMMs to complex Defi protocol balances all in one convenient place. In addition, the API also supports bridging between different networks as well as formatted Zap transaction endpoints. <br/><br/><br/> *Enter in our public API key in the Authorize section below to test the endpoints directly in swagger: **96e0cc51-a62e-42ca-acee-910ea7d2a241**
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MetadataItem,
    MetadataItemFromJSON,
    MetadataItemFromJSONTyped,
    MetadataItemToJSON,
    ProductItem,
    ProductItemFromJSON,
    ProductItemFromJSONTyped,
    ProductItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface ProtocolBalanceResponse
 */
export interface _ProtocolBalanceResponse {
    /**
     * Data on the specific balances
     * @type {Array<ProductItem>}
     * @memberof ProtocolBalanceResponse
     */
    products: Array<ProductItem>;
    /**
     * Metadata about the overall response
     * @type {Array<MetadataItem>}
     * @memberof ProtocolBalanceResponse
     */
    meta: Array<MetadataItem>;
}
export type ProtocolBalanceResponse = Record<string, _ProtocolBalanceResponse>

export function ProtocolBalanceResponseFromJSON(json: any): ProtocolBalanceResponse {
    return ProtocolBalanceResponseFromJSONTyped(json, false);
}

export function ProtocolBalanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProtocolBalanceResponse {
    return json;

    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'products': ((json['products'] as Array<any>).map(ProductItemFromJSON)),
        'meta': ((json['meta'] as Array<any>).map(MetadataItemFromJSON)),
    };
}

export function ProtocolBalanceResponseToJSON(value?: ProtocolBalanceResponse | null): any {
    return value;

    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'products': ((value.products as Array<any>).map(ProductItemToJSON)),
        'meta': ((value.meta as Array<any>).map(MetadataItemToJSON)),
    };
}


