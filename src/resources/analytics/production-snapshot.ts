// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class ProductionSnapshot extends APIResource {
  /**
   * ## 📦 Production Snapshot by Creation Date
   *
   * Current production status grouped by order creation dates.
   *
   * ### 📈 Returns
   *
   * - Items grouped by creation date
   * - Age categories (TODAY/YESTERDAY, THIS WEEK, THIS MONTH, etc.)
   * - Item counts by production status
   * - Days since creation and until ship date
   */
  retrieveByCreationDate(
    query: ProductionSnapshotRetrieveByCreationDateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductionSnapshotRetrieveByCreationDateResponse> {
    return this._client.get('/api/analytics/production-snapshot/by-creation-date', { query, ...options });
  }

  /**
   * ## 📦 Production Snapshot by Ship Date
   *
   * Current production status grouped by ship dates.
   *
   * ### 📈 Returns
   *
   * - Items grouped by ship date
   * - Urgency categories (OVERDUE, DUE TODAY, DUE TOMORROW, etc.)
   * - Item counts by production status
   * - Average days since creation
   *
   * ### ⚠️ Notes
   *
   * - Only includes active production orders
   * - Orders must have a ship_by date set
   */
  retrieveByShipDate(
    query: ProductionSnapshotRetrieveByShipDateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductionSnapshotRetrieveByShipDateResponse> {
    return this._client.get('/api/analytics/production-snapshot/by-ship-date', { query, ...options });
  }
}

export interface ProductionSnapshotRetrieveByCreationDateResponse {
  data?: Array<ProductionSnapshotRetrieveByCreationDateResponse.Data>;

  metadata?: AnalyticsAPI.AnalyticsMetadata;

  status?: string;
}

export namespace ProductionSnapshotRetrieveByCreationDateResponse {
  export interface Data {
    age_category?: string;

    avg_days_since_creation?: number;

    avg_days_until_ship_by?: number;

    created_items?: number;

    creation_date?: string;

    days_since_creation?: number;

    partially_printed_items?: number;

    production_error_items?: number;

    ship_by_date?: string;

    total_items?: number;

    total_orders?: number;

    urgency_category?: string;

    waiting_customer_items?: number;

    waiting_inventory_items?: number;

    waiting_packing_items?: number;

    waiting_picking_items?: number;

    waiting_printer_items?: number;

    waiting_purchase_items?: number;

    waiting_qc_items?: number;
  }
}

export interface ProductionSnapshotRetrieveByShipDateResponse {
  data?: Array<ProductionSnapshotRetrieveByShipDateResponse.Data>;

  metadata?: AnalyticsAPI.AnalyticsMetadata;

  status?: string;
}

export namespace ProductionSnapshotRetrieveByShipDateResponse {
  export interface Data {
    age_category?: string;

    avg_days_since_creation?: number;

    avg_days_until_ship_by?: number;

    created_items?: number;

    creation_date?: string;

    days_since_creation?: number;

    partially_printed_items?: number;

    production_error_items?: number;

    ship_by_date?: string;

    total_items?: number;

    total_orders?: number;

    urgency_category?: string;

    waiting_customer_items?: number;

    waiting_inventory_items?: number;

    waiting_packing_items?: number;

    waiting_picking_items?: number;

    waiting_printer_items?: number;

    waiting_purchase_items?: number;

    waiting_qc_items?: number;
  }
}

export interface ProductionSnapshotRetrieveByCreationDateParams {
  /**
   * Optional User ID to analyze (requires admin permissions for other users)
   */
  user_id?: number;
}

export interface ProductionSnapshotRetrieveByShipDateParams {
  /**
   * Optional User ID to analyze (requires admin permissions for other users)
   */
  user_id?: number;
}

export declare namespace ProductionSnapshot {
  export {
    type ProductionSnapshotRetrieveByCreationDateResponse as ProductionSnapshotRetrieveByCreationDateResponse,
    type ProductionSnapshotRetrieveByShipDateResponse as ProductionSnapshotRetrieveByShipDateResponse,
    type ProductionSnapshotRetrieveByCreationDateParams as ProductionSnapshotRetrieveByCreationDateParams,
    type ProductionSnapshotRetrieveByShipDateParams as ProductionSnapshotRetrieveByShipDateParams,
  };
}
