// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrdersAPI from './orders';
import {
  Address,
  AddressFrom,
  Order,
  OrderCancelParams,
  OrderCreateParams,
  OrderItem,
  OrderRetrieveEventsResponse,
  OrderRetrieveResponse,
  Orders,
  ShippingInfo,
} from './orders';
import * as ShippingAPI from './shipping';
import { Shipping, ShippingCalculateRatesParams, ShippingCalculateRatesResponse } from './shipping';
import * as StockAPI from './stock';
import { Stock, StockItem, StockListParams, StockListResponse } from './stock';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class V2021 extends APIResource {
  stock: StockAPI.Stock = new StockAPI.Stock(this._client);
  shipping: ShippingAPI.Shipping = new ShippingAPI.Shipping(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);

  /**
   * ## 📥 Get Inventory
   *
   * Bulk-check stock availability for **multiple SKUs at once**.
   *
   * Send a list of SKU references in the body to receive their current inventory and
   * status.
   *
   * @example
   * ```ts
   * const response = await client.v2021.getInventory();
   * ```
   */
  getInventory(
    body: V2021GetInventoryParams,
    options?: RequestOptions,
  ): APIPromise<V2021GetInventoryResponse> {
    return this._client.post('/api/v2021/inventory', { body, ...options });
  }
}

export interface V2021GetInventoryResponse {
  items?: Array<StockAPI.StockItem>;
}

export interface V2021GetInventoryParams {
  SKU?: Array<string>;
}

V2021.Stock = Stock;
V2021.Shipping = Shipping;
V2021.Orders = Orders;

export declare namespace V2021 {
  export {
    type V2021GetInventoryResponse as V2021GetInventoryResponse,
    type V2021GetInventoryParams as V2021GetInventoryParams,
  };

  export {
    Stock as Stock,
    type StockItem as StockItem,
    type StockListResponse as StockListResponse,
    type StockListParams as StockListParams,
  };

  export {
    Shipping as Shipping,
    type ShippingCalculateRatesResponse as ShippingCalculateRatesResponse,
    type ShippingCalculateRatesParams as ShippingCalculateRatesParams,
  };

  export {
    Orders as Orders,
    type Address as Address,
    type AddressFrom as AddressFrom,
    type Order as Order,
    type OrderItem as OrderItem,
    type ShippingInfo as ShippingInfo,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderRetrieveEventsResponse as OrderRetrieveEventsResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderCancelParams as OrderCancelParams,
  };
}
