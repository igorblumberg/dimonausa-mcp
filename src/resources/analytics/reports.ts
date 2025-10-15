// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Reports extends APIResource {
  /**
   * ## 📊 Item Status Report
   *
   * Get detailed status information for production items by order reference or UUID.
   *
   * ### 📈 Returns
   *
   * - Item label ID and current status
   * - Order details (ID, UUID, reference, status)
   * - Product information (name, color, size)
   * - Tracking information
   * - Timestamps (creation, ship by, shipped)
   * - Purchase order details for items waiting inventory
   *
   * ### 🔒 Permissions
   *
   * - Users can only view their own orders
   * - Admin permission required to view other users' orders
   *
   * ### ⚠️ Notes
   *
   * - At least one order reference or UUID must be provided
   * - Maximum 100 order references/UUIDs per request
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.reports.createItemStatusReport();
   * ```
   */
  createItemStatusReport(
    body: ReportCreateItemStatusReportParams,
    options?: RequestOptions,
  ): APIPromise<ReportCreateItemStatusReportResponse> {
    return this._client.post('/api/analytics/reports/item-status', { body, ...options });
  }

  /**
   * ## 📊 Items Sold Ranking Report
   *
   * Get ranking of items by quantity sold within a date range.
   *
   * ### 📈 Returns
   *
   * - SKU reference and product details
   * - Total quantity sold
   * - Number of unique orders
   * - Ranking by quantity
   * - Optional order summary statistics
   *
   * ### 🔍 Filters
   *
   * - Filter by facility
   * - Limit number of results
   * - Include detailed order summary
   *
   * ### 💡 Use Cases
   *
   * - Identify best-selling products
   * - Plan inventory based on sales volume
   * - Analyze product performance
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.reports.getItemsSoldRanking({
   *     end_date: '2019-12-27',
   *     start_date: '2019-12-27',
   *   });
   * ```
   */
  getItemsSoldRanking(
    query: ReportGetItemsSoldRankingParams,
    options?: RequestOptions,
  ): APIPromise<ReportGetItemsSoldRankingResponse> {
    return this._client.get('/api/analytics/reports/items-sold-ranking', { query, ...options });
  }
}

export interface ReportCreateItemStatusReportResponse {
  data?: Array<ReportCreateItemStatusReportResponse.Data>;

  metadata?: ReportCreateItemStatusReportResponse.Metadata;

  status?: string;
}

export namespace ReportCreateItemStatusReportResponse {
  export interface Data {
    color_name?: string;

    customer?: string;

    /**
     * Expected arrival date (for items waiting inventory)
     */
    item_eta?: string | null;

    /**
     * Purchase order creation date (for items waiting inventory)
     */
    item_purchased_at?: string | null;

    label_created_at?: string;

    /**
     * Production item ID
     */
    label_id?: number;

    /**
     * Current production status
     */
    label_status?: string;

    order_created_at?: string;

    order_id?: number;

    order_reference?: string;

    order_ship_by?: string | null;

    order_shipped_at?: string | null;

    order_status?: string;

    order_uuid?: string;

    product_name?: string;

    size_name?: string;

    tracking_url?: string | null;
  }

  export interface Metadata {
    cached_until?: string;

    order_references?: Array<string>;

    order_uuids?: Array<string>;
  }
}

export interface ReportGetItemsSoldRankingResponse {
  data?:
    | Array<ReportGetItemsSoldRankingResponse.RankingArray>
    | ReportGetItemsSoldRankingResponse.RankingWithSummary;

  metadata?: ReportGetItemsSoldRankingResponse.Metadata;

  status?: string;
}

export namespace ReportGetItemsSoldRankingResponse {
  export interface RankingArray {
    product_name?: string;

    quantity_rank?: number;

    sku?: string;

    sku_id?: number;

    total_items?: number;

    total_quantity_sold?: number;

    unique_orders?: number;
  }

  export interface RankingWithSummary {
    order_summary?: RankingWithSummary.OrderSummary;

    ranking?: Array<RankingWithSummary.Ranking>;
  }

  export namespace RankingWithSummary {
    export interface OrderSummary {
      total_items?: number;

      total_orders?: number;

      total_units_sold?: number;

      unique_skus?: number;
    }

    export interface Ranking {
      product_name?: string;

      quantity_rank?: number;

      sku?: string;

      sku_id?: number;

      total_items?: number;

      total_quantity_sold?: number;

      unique_orders?: number;
    }
  }

  export interface Metadata extends AnalyticsAPI.AnalyticsMetadata {
    include_order_details?: boolean;

    limit?: number;
  }
}

export interface ReportCreateItemStatusReportParams {
  /**
   * Array of order references to query
   */
  order_references?: Array<string>;

  /**
   * Array of order UUIDs to query
   */
  order_uuids?: Array<string>;
}

export interface ReportGetItemsSoldRankingParams {
  /**
   * End date for analysis (YYYY-MM-DD)
   */
  end_date: string;

  /**
   * Start date for analysis (YYYY-MM-DD)
   */
  start_date: string;

  /**
   * Optional Facility ID to filter by specific production facility
   */
  facility_id?: number;

  /**
   * Include order summary statistics
   */
  include_order_details?: boolean;

  /**
   * Maximum number of items to return
   */
  limit?: number;

  /**
   * Optional User ID to analyze (requires admin permissions for other users)
   */
  user_id?: number;
}

export declare namespace Reports {
  export {
    type ReportCreateItemStatusReportResponse as ReportCreateItemStatusReportResponse,
    type ReportGetItemsSoldRankingResponse as ReportGetItemsSoldRankingResponse,
    type ReportCreateItemStatusReportParams as ReportCreateItemStatusReportParams,
    type ReportGetItemsSoldRankingParams as ReportGetItemsSoldRankingParams,
  };
}
