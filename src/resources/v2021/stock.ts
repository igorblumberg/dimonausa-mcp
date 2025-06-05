// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Stock extends APIResource {
  /**
   * ## 📦 Get Stock By Reference
   *
   * Returns **real-time inventory** and product details for a single SKU.
   *
   * @example
   * ```ts
   * const stockItem = await client.v2021.stock.retrieve(
   *   'sku-reference',
   * );
   * ```
   */
  retrieve(skuReference: string, options?: RequestOptions): APIPromise<StockItem> {
    return this._client.get(path`/api/v2021/stock/${skuReference}`, options);
  }

  /**
   * ## 🧾 Get Stocks
   *
   * Retrieve a **paginated list** of available SKUs, including stock levels, product
   * specs, and print capabilities.
   *
   * Use this endpoint to **browse** or **sync** your product catalog page by page.
   *
   * @example
   * ```ts
   * const stocks = await client.v2021.stock.list();
   * ```
   */
  list(
    query: StockListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StockListResponse> {
    return this._client.get('/api/v2021/stock', { query, ...options });
  }
}

export interface StockItem {
  amount?: number;

  brand?: string;

  color?: string;

  price?: number;

  product_name?: string;

  size?: string;

  SKU?: string;

  status?: 'in-stock' | 'out-of-stock' | 'low-stock';
}

export interface StockListResponse {
  items?: Array<StockItem>;

  pagination?: StockListResponse.Pagination;
}

export namespace StockListResponse {
  export interface Pagination {
    limit?: number;

    offset?: number;

    total?: number;
  }
}

export interface StockListParams {
  /**
   * Number of items per page
   */
  limit?: number;

  /**
   * Offset index for pagination
   */
  offset?: number;
}

export declare namespace Stock {
  export {
    type StockItem as StockItem,
    type StockListResponse as StockListResponse,
    type StockListParams as StockListParams,
  };
}
