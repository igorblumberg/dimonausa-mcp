// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Shipping extends APIResource {
  /**
   * ## 🚚 Calculate Shipping Rates
   *
   * Get real-time shipping rate estimates for a given destination and list of items.
   *
   * Use this endpoint to display available carriers, service levels, prices, and
   * delivery estimates before placing an order.
   *
   * ### 📦 What It Considers
   *
   * - Destination address (ZIP, country, region)
   * - Package weight and quantity (derived from the SKUs)
   * - Shipping carrier availability by region
   * - Priority level: Standard, Priority, Express
   *
   * ### ⚠️ Tips
   *
   * - Use the returned `rate_id` when submitting the actual order to lock in the
   *   rate
   * - Refresh rates if the cart or address changes
   *
   * @example
   * ```ts
   * const response = await client.v2021.shipping.calculateRates(
   *   {
   *     items: [{ quantity: 2, sku: 'GLD-5000-BLACK-S' }],
   *     recipient: {
   *       address1: '875 Cambridge Drive',
   *       city: 'Elk Grove Village',
   *       country_code: 'US',
   *       state_code: 'IL',
   *       zip: '60007',
   *     },
   *   },
   * );
   * ```
   */
  calculateRates(
    body: ShippingCalculateRatesParams,
    options?: RequestOptions,
  ): APIPromise<ShippingCalculateRatesResponse> {
    return this._client.post('/api/v2021/shipping/rates', { body, ...options });
  }
}

export interface ShippingCalculateRatesResponse {
  code?: number;

  result?: Array<ShippingCalculateRatesResponse.Result>;
}

export namespace ShippingCalculateRatesResponse {
  export interface Result {
    id?: string;

    currency?: string;

    maxDeliveryDate?: string;

    maxDeliveryDays?: number;

    minDeliveryDate?: string;

    minDeliveryDays?: number;

    name?: string;

    rate?: string;
  }
}

export interface ShippingCalculateRatesParams {
  items: Array<ShippingCalculateRatesParams.Item>;

  recipient: ShippingCalculateRatesParams.Recipient;
}

export namespace ShippingCalculateRatesParams {
  export interface Item {
    quantity: number;

    sku: string;
  }

  export interface Recipient {
    address1: string;

    city: string;

    country_code: string;

    state_code: string;

    zip: string;

    phone?: string;
  }
}

export declare namespace Shipping {
  export {
    type ShippingCalculateRatesResponse as ShippingCalculateRatesResponse,
    type ShippingCalculateRatesParams as ShippingCalculateRatesParams,
  };
}
