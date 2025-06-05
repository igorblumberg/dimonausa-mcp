// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as OrdersAPI from './v2021/orders';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class V3 extends APIResource {
  /**
   * ## 🗂️ Submit a Production Order – Legacy Payload
   *
   * Legacy version of the production order submission endpoint, maintained for
   * backward compatibility with older Brazil-based integrations.
   *
   * **⚠️ Deprecation Notice**: This endpoint is deprecated. Please use
   * `/api/v2021/orders` for new integrations.
   */
  submitOrder(body: V3SubmitOrderParams, options?: RequestOptions): APIPromise<OrdersAPI.Order> {
    return this._client.post('/api/v3/orders', { body, ...options });
  }
}

export interface V3SubmitOrderParams {
  address?: V3SubmitOrderParams.Address;

  customer_document?: string;

  customer_email?: string;

  customer_name?: string;

  delivery_method_id?: string;

  items?: Array<V3SubmitOrderParams.Item>;

  nfe?: V3SubmitOrderParams.Nfe;

  order_id?: string;

  shipping_speed?: string;
}

export namespace V3SubmitOrderParams {
  export interface Address {
    city?: string;

    complement?: string;

    country?: string;

    neighborhood?: string;

    number?: string;

    phone?: string;

    state?: string;

    street?: string;

    zipcode?: string;
  }

  export interface Item {
    designs?: Item.Designs;

    dimona_sku_id?: string;

    mocks?: Item.Mocks;

    name?: string;

    qty?: number;

    sku?: string;
  }

  export namespace Item {
    export interface Designs {
      back?: string;

      front?: string;

      inner_label?: string;

      left_sleeve?: string;

      outer_label?: string;

      right_sleeve?: string;
    }

    export interface Mocks {
      back?: string;

      front?: string;

      inner_label?: string;

      left_sleeve?: string;

      outer_label?: string;

      right_sleeve?: string;
    }
  }

  export interface Nfe {
    chave?: string;

    link?: string;

    numero?: string;

    serie?: string;
  }
}

export declare namespace V3 {
  export { type V3SubmitOrderParams as V3SubmitOrderParams };
}
