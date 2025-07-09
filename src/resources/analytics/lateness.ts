// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Lateness extends APIResource {
  /**
   * ## 📊 Order Lateness Analysis - Executive Summary
   *
   * Comprehensive analysis of order processing times and stockout impacts.
   *
   * ### 📈 Returns
   *
   * - Total orders and items analyzed
   * - In-stock vs out-of-stock item counts
   * - Stockout rate percentage
   * - Average processing times (adjusted for business hours)
   *
   * ### 🔍 Filters
   *
   * - Filter by specific order references, UUIDs, or IDs
   * - Set minimum SKU volume threshold
   *
   * ### ⏰ Business Hours
   *
   * - Analysis considers business hours: 8 AM - 10 PM, Monday-Friday
   * - Weekend orders adjusted to next business day
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.lateness.retrieveExecutiveSummary({
   *     end_date: '2019-12-27',
   *     start_date: '2019-12-27',
   *   });
   * ```
   */
  retrieveExecutiveSummary(
    query: LatenessRetrieveExecutiveSummaryParams,
    options?: RequestOptions,
  ): APIPromise<LatenessRetrieveExecutiveSummaryResponse> {
    return this._client.get('/api/analytics/lateness/executive-summary', { query, ...options });
  }
}

export interface LatenessRetrieveExecutiveSummaryResponse {
  data?: LatenessRetrieveExecutiveSummaryResponse.Data;

  metadata?: LatenessRetrieveExecutiveSummaryResponse.Metadata;

  status?: string;
}

export namespace LatenessRetrieveExecutiveSummaryResponse {
  export interface Data {
    in_stock_avg_hours_adjusted?: number;

    in_stock_items?: number;

    out_of_stock_avg_hours_adjusted?: number;

    out_of_stock_items?: number;

    report_section?: string;

    stockout_rate_percent?: number;

    total_items?: number;

    total_orders?: number;
  }

  export interface Metadata extends AnalyticsAPI.AnalyticsMetadata {
    min_sku_volume?: number;

    order_ids?: string | null;

    order_references?: string | null;

    order_uuids?: string | null;
  }
}

export interface LatenessRetrieveExecutiveSummaryParams {
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
   * Minimum SKU volume to include
   */
  min_sku_volume?: number;

  /**
   * Comma-separated order IDs to filter
   */
  order_ids?: string;

  /**
   * Comma-separated order references to filter
   */
  order_references?: string;

  /**
   * Comma-separated order UUIDs to filter
   */
  order_uuids?: string;

  /**
   * Optional User ID to analyze (requires admin permissions for other users)
   */
  user_id?: number;
}

export declare namespace Lateness {
  export {
    type LatenessRetrieveExecutiveSummaryResponse as LatenessRetrieveExecutiveSummaryResponse,
    type LatenessRetrieveExecutiveSummaryParams as LatenessRetrieveExecutiveSummaryParams,
  };
}
