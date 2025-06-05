// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Orders extends APIResource {
  /**
   * ## 🧾 Submit a Production Order
   *
   * Create a new DTG production order to be printed, packed, and shipped from one of
   * our regional facilities.
   *
   * Use this endpoint to send print-ready artwork, shipping details, and item
   * metadata. Orders are automatically validated, assigned to the best facility, and
   * queued for fulfillment.
   *
   * ### 🔧 Required Fields
   *
   * - `id`: Your unique order reference (used for idempotency)
   * - `items`: List of products to print, each with a valid SKU and quantity
   * - `print_files`: High-res artwork for each print location (PNG, 300 DPI,
   *   transparent)
   * - `preview_files`: Customer-facing mockups
   * - `address_to`: Shipping details for the end customer
   * - `shipping`: Carrier and shipping priority
   *
   * ### ⚠️ Best Practices
   *
   * 1. Check inventory for each SKU before submitting
   * 2. Use unique order IDs to avoid duplicates
   * 3. Validate print files (300 DPI, correct format) to avoid quality issues
   * 4. Include customer contact for delivery updates and return handling
   *
   * @example
   * ```ts
   * const order = await client.v2021.orders.create({
   *   id: 'orderReference1234',
   *   address_to: {
   *     address1: '1983 Tigertail Blvd',
   *     city: 'Dania Beach',
   *     country: 'US',
   *     first_name: 'John',
   *     last_name: 'Doe',
   *     region: 'FL',
   *     zip: '33004',
   *   },
   *   items: [
   *     {
   *       id: 'gB0NV05e',
   *       preview_files: {},
   *       print_files: {},
   *       quantity: 1,
   *       sku: 'BLC-3001-BLACK-L',
   *     },
   *   ],
   *   shipping: {},
   * });
   * ```
   */
  create(body: OrderCreateParams, options?: RequestOptions): APIPromise<Order> {
    return this._client.post('/api/v2021/orders', { body, ...options });
  }

  /**
   * ## 📦 Retrieve a Production Order
   *
   * Get full details of a submitted production order using its `reference_id`.
   *
   * This endpoint returns the order's current status, shipping details, item list
   * and tracking info (if shipped).
   *
   * ### 📋 Order Status Values
   *
   * - `Pending`: Order received
   * - `In Production`: Items are currently being printed/manufactured
   * - `Shipped`: Order dispatched with tracking
   * - `Cancelled`: Order was cancelled
   *
   * @example
   * ```ts
   * const order = await client.v2021.orders.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(orderUuid: string, options?: RequestOptions): APIPromise<OrderRetrieveResponse> {
    return this._client.get(path`/api/v2021/orders/${orderUuid}`, options);
  }

  /**
   * ## ❌ Cancel Production Order
   *
   * Cancel an order before it enters production or shipping.
   *
   * ### 🕒 When Cancellation Is Allowed
   *
   * - ✅ `Pending`: Always cancellable
   * - ❌ `In Production`, `Shipped`: Not cancellable via API (contact support)
   *
   * @example
   * ```ts
   * await client.v2021.orders.cancel(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  cancel(orderUuid: string, body: OrderCancelParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/v2021/order/${orderUuid}/cancel`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * ## 📜 Retrieve Order Events
   *
   * Fetch a detailed timeline of all production-related events for a given order.
   *
   * Unlike the main order status (which reflects the order as a whole), this
   * endpoint returns **granular item-level actions**, including printing, packaging,
   * and shipping steps — with timestamps and affected item IDs.
   *
   * @example
   * ```ts
   * const response = await client.v2021.orders.retrieveEvents(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieveEvents(orderUuid: string, options?: RequestOptions): APIPromise<OrderRetrieveEventsResponse> {
    return this._client.get(path`/api/v2021/order/${orderUuid}/events`, options);
  }
}

export interface Address {
  address1: string;

  city: string;

  country: string;

  first_name: string;

  last_name: string;

  region: string;

  zip: string;

  address2?: string;

  email?: string;

  phone?: string;
}

export interface AddressFrom {
  address1?: string;

  address2?: string;

  city?: string;

  company?: string;

  country?: string;

  region?: string;

  zip?: string;
}

export interface Order {
  id?: string;

  reference_id?: string;

  status?: string;
}

export interface OrderItem {
  /**
   * Unique item identifier
   */
  id: string;

  preview_files: OrderItem.PreviewFiles;

  print_files: OrderItem.PrintFiles;

  quantity: number;

  /**
   * Product SKU
   */
  sku: string;
}

export namespace OrderItem {
  export interface PreviewFiles {
    back?: string;

    front?: string;
  }

  export interface PrintFiles {
    back?: string;

    front?: string;
  }
}

export interface ShippingInfo {
  carrier?: 'USPS' | 'UPS' | 'FedEx' | 'Default';

  priority?: 'Standard' | 'Priority' | 'Express';
}

export interface OrderRetrieveResponse {
  id?: string;

  address_from?: AddressFrom;

  address_to?: Address;

  carrier?: string;

  items?: Array<OrderItem>;

  reference_id?: string;

  reprint?: boolean;

  sample?: boolean;

  shipping?: ShippingInfo;

  status?: 'Pending' | 'In Production' | 'Shipped' | 'Cancelled';

  tracking_number?: string;

  tracking_url?: string;

  xqc?: boolean;
}

export interface OrderRetrieveEventsResponse {
  events?: Array<OrderRetrieveEventsResponse.Event>;

  status?: string;
}

export namespace OrderRetrieveEventsResponse {
  export interface Event {
    /**
     * Type of event
     */
    action?: 'created' | 'picked' | 'printed' | 'packaged' | 'shipped';

    /**
     * Array of item IDs affected by this action
     */
    affected_items?: Array<string>;

    /**
     * Only present on 'shipped' events
     */
    carrier?: string;

    /**
     * ISO 8601 timestamp when the event occurred
     */
    time?: string;

    /**
     * Only present on 'shipped' events
     */
    tracking_number?: string;

    /**
     * Only present on 'shipped' events
     */
    tracking_url?: string;
  }
}

export interface OrderCreateParams {
  /**
   * Your unique order reference (used for idempotency)
   */
  id: string;

  address_to: Address;

  items: Array<OrderItem>;

  shipping: ShippingInfo;

  address_from?: AddressFrom;

  /**
   * Marketing materials (PDFs, 4x6 recommended)
   */
  package_inserts?: Array<string>;

  /**
   * Custom PDF packing slip (letter size, optional)
   */
  packing_slip?: string;

  /**
   * Reprint of a previously failed/damaged order
   */
  reprint?: boolean;

  /**
   * Mark order as a sample or test
   */
  sample?: boolean;

  /**
   * Enable extra quality control for high-value orders
   */
  xqc?: boolean;
}

export interface OrderCancelParams {
  /**
   * Array of item IDs to cancel (empty array cancels entire order)
   */
  items?: Array<string>;
}

export declare namespace Orders {
  export {
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
