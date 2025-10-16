// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from './analytics';
import * as LatenessAPI from './lateness';
import {
  Lateness,
  LatenessRetrieveExecutiveSummaryParams,
  LatenessRetrieveExecutiveSummaryResponse,
} from './lateness';
import * as ProductionSnapshotAPI from './production-snapshot';
import {
  ProductionSnapshot,
  ProductionSnapshotRetrieveByCreationDateParams,
  ProductionSnapshotRetrieveByCreationDateResponse,
  ProductionSnapshotRetrieveByShipDateParams,
  ProductionSnapshotRetrieveByShipDateResponse,
} from './production-snapshot';
import * as ReportsAPI from './reports';
import {
  ReportCreateItemStatusReportParams,
  ReportCreateItemStatusReportResponse,
  ReportCreateOrdersPerCustomerParams,
  ReportCreateOrdersPerCustomerResponse,
  ReportGetItemsSoldRankingParams,
  ReportGetItemsSoldRankingResponse,
  Reports,
} from './reports';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Analytics extends APIResource {
  productionSnapshot: ProductionSnapshotAPI.ProductionSnapshot = new ProductionSnapshotAPI.ProductionSnapshot(
    this._client,
  );
  lateness: LatenessAPI.Lateness = new LatenessAPI.Lateness(this._client);
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);

  /**
   * ## 📊 Daily Operations Snapshot
   *
   * Track orders created, items produced, printed, and shipped by day.
   *
   * ### 📈 Returns
   *
   * - Daily breakdown of orders and production items created
   * - Items printed and packaged per day
   * - Orders shipped per day
   * - Production efficiency percentages
   * - Cumulative totals over time
   *
   * ### 🔒 Permissions
   *
   * - Users can view their own data
   * - Admin permission required to view other users' data
   *
   * ### ⏱️ Performance
   *
   * - Results cached for 15 minutes
   * - `cached_until` timestamp included in response
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.retrieveDailyOperations({
   *     end_date: '2019-12-27',
   *     start_date: '2019-12-27',
   *   });
   * ```
   */
  retrieveDailyOperations(
    query: AnalyticsRetrieveDailyOperationsParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsRetrieveDailyOperationsResponse> {
    return this._client.get('/api/analytics/daily-operations', { query, ...options });
  }

  /**
   * ## 📊 Overall Production Summary
   *
   * High-level overview of current production status.
   *
   * ### 📈 Returns
   *
   * - Total active items and orders
   * - Breakdown by production status
   * - Urgency breakdown (overdue, due today, etc.)
   * - Average days metrics
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.retrieveProductionSummary();
   * ```
   */
  retrieveProductionSummary(
    query: AnalyticsRetrieveProductionSummaryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsRetrieveProductionSummaryResponse> {
    return this._client.get('/api/analytics/production-summary', { query, ...options });
  }

  /**
   * ## 📊 SKU Impact Analysis
   *
   * Analyze which SKUs are causing the most production delays due to stockouts.
   *
   * ### 📈 Returns
   *
   * - SKU reference
   * - Total items ordered
   * - Out of stock items count
   * - Stockout rate percentage
   * - Sorted by impact (most problematic SKUs first)
   *
   * ### 🔍 Filters
   *
   * - Set minimum SKU volume to focus on high-volume items
   * - Limit results to top N SKUs
   *
   * ### 💡 Use Cases
   *
   * - Identify SKUs needing inventory optimization
   * - Focus purchasing on high-impact items
   * - Analyze stockout patterns
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.retrieveSKUImpactAnalysis({
   *     end_date: '2019-12-27',
   *     start_date: '2019-12-27',
   *   });
   * ```
   */
  retrieveSKUImpactAnalysis(
    query: AnalyticsRetrieveSKUImpactAnalysisParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsRetrieveSKUImpactAnalysisResponse> {
    return this._client.get('/api/analytics/sku-impact-analysis', { query, ...options });
  }

  /**
   * ## 📊 Weekly Summary
   *
   * Aggregated weekly metrics for production operations.
   *
   * ### 📈 Returns
   *
   * - Week number and start date
   * - Total orders and items created per week
   * - Items printed, packaged, and shipped
   * - Weekly efficiency percentages
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.retrieveWeeklySummary({
   *     end_date: '2019-12-27',
   *     start_date: '2019-12-27',
   *   });
   * ```
   */
  retrieveWeeklySummary(
    query: AnalyticsRetrieveWeeklySummaryParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsRetrieveWeeklySummaryResponse> {
    return this._client.get('/api/analytics/weekly-summary', { query, ...options });
  }
}

export interface AnalyticsMetadata {
  /**
   * ISO 8601 timestamp when cache expires
   */
  cached_until?: string;

  end_date?: string;

  /**
   * Facility ID filter applied
   */
  facility_id?: number | null;

  start_date?: string;

  user_id?: number | null;
}

export interface AnalyticsRetrieveDailyOperationsResponse {
  data?: Array<AnalyticsRetrieveDailyOperationsResponse.Data>;

  metadata?: AnalyticsMetadata;

  status?: string;
}

export namespace AnalyticsRetrieveDailyOperationsResponse {
  export interface Data {
    cumulative_items_created?: number;

    cumulative_items_printed?: number;

    cumulative_orders?: number;

    cumulative_orders_shipped?: number;

    day_of_week?: string;

    items_packaged?: number;

    items_printed?: number;

    operation_date?: string;

    orders_created?: number;

    orders_shipped?: number;

    package_efficiency_pct?: number | null;

    print_efficiency_pct?: number | null;

    production_items_created?: number;
  }
}

export interface AnalyticsRetrieveProductionSummaryResponse {
  data?: AnalyticsRetrieveProductionSummaryResponse.Data;

  metadata?: AnalyticsMetadata;

  status?: string;
}

export namespace AnalyticsRetrieveProductionSummaryResponse {
  export interface Data {
    avg_days_since_creation?: number;

    avg_days_until_ship_by?: number;

    created_items?: number;

    due_this_week_items?: number;

    due_today_items?: number;

    due_tomorrow_items?: number;

    overdue_items?: number;

    partially_printed_items?: number;

    production_error_items?: number;

    report_section?: string;

    total_active_items?: number;

    total_active_orders?: number;

    waiting_customer_items?: number;

    waiting_inventory_items?: number;

    waiting_packing_items?: number;

    waiting_picking_items?: number;

    waiting_printer_items?: number;

    waiting_purchase_items?: number;

    waiting_qc_items?: number;
  }
}

export interface AnalyticsRetrieveSKUImpactAnalysisResponse {
  data?: Array<AnalyticsRetrieveSKUImpactAnalysisResponse.Data>;

  metadata?: AnalyticsRetrieveSKUImpactAnalysisResponse.Metadata;

  status?: string;
}

export namespace AnalyticsRetrieveSKUImpactAnalysisResponse {
  export interface Data {
    avg_adjusted_hours_when_out_of_stock?: number | null;

    avg_excess_delay_per_item?: number;

    out_of_stock_items?: number;

    sku?: string;

    stockout_rate_percent?: number;

    total_excess_delay_hours?: number;

    total_items?: number;
  }

  export interface Metadata extends AnalyticsAPI.AnalyticsMetadata {
    limit?: number;

    min_sku_volume?: number;
  }
}

export interface AnalyticsRetrieveWeeklySummaryResponse {
  data?: Array<AnalyticsRetrieveWeeklySummaryResponse.Data>;

  metadata?: AnalyticsMetadata;

  status?: string;
}

export namespace AnalyticsRetrieveWeeklySummaryResponse {
  export interface Data {
    report_section?: string;

    week_number?: string;

    week_start_date?: string;

    weekly_items_created?: number;

    weekly_items_packaged?: number;

    weekly_items_printed?: number;

    weekly_orders_created?: number;

    weekly_orders_shipped?: number;

    weekly_package_efficiency_pct?: number | null;

    weekly_print_efficiency_pct?: number | null;

    weekly_ship_efficiency_pct?: number | null;
  }
}

export interface AnalyticsRetrieveDailyOperationsParams {
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
   * Optional User ID to analyze (requires admin permissions for other users)
   */
  user_id?: number;
}

export interface AnalyticsRetrieveProductionSummaryParams {
  /**
   * Optional Facility ID to filter by specific production facility
   */
  facility_id?: number;

  /**
   * Optional User ID to analyze (requires admin permissions for other users)
   */
  user_id?: number;
}

export interface AnalyticsRetrieveSKUImpactAnalysisParams {
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
   * Maximum number of SKUs to return
   */
  limit?: number;

  /**
   * Minimum SKU volume to include
   */
  min_sku_volume?: number;

  /**
   * Optional User ID to analyze (requires admin permissions for other users)
   */
  user_id?: number;
}

export interface AnalyticsRetrieveWeeklySummaryParams {
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
   * Optional User ID to analyze (requires admin permissions for other users)
   */
  user_id?: number;
}

Analytics.ProductionSnapshot = ProductionSnapshot;
Analytics.Lateness = Lateness;
Analytics.Reports = Reports;

export declare namespace Analytics {
  export {
    type AnalyticsMetadata as AnalyticsMetadata,
    type AnalyticsRetrieveDailyOperationsResponse as AnalyticsRetrieveDailyOperationsResponse,
    type AnalyticsRetrieveProductionSummaryResponse as AnalyticsRetrieveProductionSummaryResponse,
    type AnalyticsRetrieveSKUImpactAnalysisResponse as AnalyticsRetrieveSKUImpactAnalysisResponse,
    type AnalyticsRetrieveWeeklySummaryResponse as AnalyticsRetrieveWeeklySummaryResponse,
    type AnalyticsRetrieveDailyOperationsParams as AnalyticsRetrieveDailyOperationsParams,
    type AnalyticsRetrieveProductionSummaryParams as AnalyticsRetrieveProductionSummaryParams,
    type AnalyticsRetrieveSKUImpactAnalysisParams as AnalyticsRetrieveSKUImpactAnalysisParams,
    type AnalyticsRetrieveWeeklySummaryParams as AnalyticsRetrieveWeeklySummaryParams,
  };

  export {
    ProductionSnapshot as ProductionSnapshot,
    type ProductionSnapshotRetrieveByCreationDateResponse as ProductionSnapshotRetrieveByCreationDateResponse,
    type ProductionSnapshotRetrieveByShipDateResponse as ProductionSnapshotRetrieveByShipDateResponse,
    type ProductionSnapshotRetrieveByCreationDateParams as ProductionSnapshotRetrieveByCreationDateParams,
    type ProductionSnapshotRetrieveByShipDateParams as ProductionSnapshotRetrieveByShipDateParams,
  };

  export {
    Lateness as Lateness,
    type LatenessRetrieveExecutiveSummaryResponse as LatenessRetrieveExecutiveSummaryResponse,
    type LatenessRetrieveExecutiveSummaryParams as LatenessRetrieveExecutiveSummaryParams,
  };

  export {
    Reports as Reports,
    type ReportCreateItemStatusReportResponse as ReportCreateItemStatusReportResponse,
    type ReportCreateOrdersPerCustomerResponse as ReportCreateOrdersPerCustomerResponse,
    type ReportGetItemsSoldRankingResponse as ReportGetItemsSoldRankingResponse,
    type ReportCreateItemStatusReportParams as ReportCreateItemStatusReportParams,
    type ReportCreateOrdersPerCustomerParams as ReportCreateOrdersPerCustomerParams,
    type ReportGetItemsSoldRankingParams as ReportGetItemsSoldRankingParams,
  };
}
