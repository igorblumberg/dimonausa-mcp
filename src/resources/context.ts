// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Context extends APIResource {
  /**
   * ## 🧠 System Context & Documentation
   *
   * Returns comprehensive documentation about the Dimona USA Production Control
   * System, including:
   *
   * - Business overview and core capabilities
   * - Entity definitions (Orders, ProductionItems, AZLs, etc.)
   * - Status workflows and transitions
   * - Business rules and priorities
   * - Terminology and glossary
   *
   * **🤖 For AI Assistants**: This endpoint should be called first to understand the
   * system domain before making other API calls. It provides essential context for
   * interpreting data and making informed recommendations.
   *
   * ### 📋 Key Information Provided
   *
   * - **Core Entities**: Detailed descriptions of Orders, ProductionItems, AZLs,
   *   SKUs, PurchaseOrders, etc.
   * - **Workflows**: Complete lifecycle documentation (order → shipment, inventory
   *   replenishment, etc.)
   * - **Status Definitions**: All possible statuses with descriptions, next steps,
   *   and timing expectations
   * - **Business Rules**: Priority rules, inventory rules, timing expectations
   * - **Terminology**: Industry-specific terms and acronyms
   * - **Facilities**: Information about production locations and capabilities
   *
   * ### ⚡ Performance
   *
   * - Response is cached and optimized for frequent access
   * - No authentication required (public documentation)
   */
  retrieve(options?: RequestOptions): APIPromise<ContextRetrieveResponse> {
    return this._client.get('/api/context', options);
  }
}

/**
 * Comprehensive system documentation and context for AI assistants
 */
export interface ContextRetrieveResponse {
  business_overview?: ContextRetrieveResponse.BusinessOverview;

  /**
   * System business rules and priorities
   */
  business_rules?: ContextRetrieveResponse.BusinessRules;

  /**
   * Detailed descriptions of all system entities (Order, ProductionItem, AZL, etc.)
   */
  core_entities?: { [key: string]: ContextRetrieveResponse.CoreEntities };

  /**
   * Production facility information
   */
  facilities?: { [key: string]: ContextRetrieveResponse.Facilities };

  last_updated?: string;

  system_name?: string;

  /**
   * Glossary of domain-specific terms
   */
  terminology?: { [key: string]: string };

  version?: string;

  /**
   * Complete workflow documentation (order fulfillment, inventory, etc.)
   */
  workflows?: { [key: string]: ContextRetrieveResponse.Workflows };
}

export namespace ContextRetrieveResponse {
  export interface BusinessOverview {
    core_capabilities?: Array<string>;

    description?: string;

    industry?: string;

    key_differentiators?: { [key: string]: string };
  }

  /**
   * System business rules and priorities
   */
  export interface BusinessRules {
    inventory_rules?: { [key: string]: string };

    priority_rules?: { [key: string]: string };

    status_progression?: { [key: string]: unknown };

    timing_expectations?: { [key: string]: string };
  }

  export interface CoreEntities {
    description?: string;

    important_fields?: { [key: string]: unknown };

    key_identifiers?: { [key: string]: string };

    purpose?: string;

    relationships?: { [key: string]: string };

    /**
     * Detailed status definitions with IDs, descriptions, next steps, and timing
     */
    statuses?: { [key: string]: unknown };

    typical_statuses?: Array<string>;
  }

  export interface Facilities {
    capabilities?: Array<string>;

    location?: string;

    typical_orders?: string;
  }

  export interface Workflows {
    description?: string;

    error_handling?: { [key: string]: unknown };

    key_decision_points?: { [key: string]: unknown };

    name?: string;

    normal_workflow?: string;

    steps?: Array<unknown>;

    typical_duration?: string;
  }
}

export declare namespace Context {
  export { type ContextRetrieveResponse as ContextRetrieveResponse };
}
