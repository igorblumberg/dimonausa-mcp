// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Analysis extends APIResource {
  /**
   * ## 🔍 Analyze an Entity
   *
   * Get detailed data and optionally AI-powered analysis for orders, production
   * items, AZLs (labels), or purchase orders.
   *
   * ### 🤖 Analysis Modes
   *
   * - **raw_only=true** (default, recommended): Returns raw entity data for
   *   client-side AI analysis
   * - **raw_only=false**: Returns server-side AI analysis + raw data
   *
   * When using raw_only=true, the response includes complete entity data that can be
   * analyzed by your own AI model (e.g., Claude via MCP) for more flexible and
   * context-aware insights.
   *
   * This endpoint provides:
   *
   * - Complete raw entity data with full event history
   * - Status summary and explanations (when raw_only=false)
   * - Identified issues and delays (when raw_only=false)
   * - Recommended next steps with priorities (when raw_only=false)
   * - Timeline analysis and urgency levels (when raw_only=false)
   *
   * ### 📋 Supported Entity Types
   *
   * - `order` - Analyze an order by ID, UUID, or reference
   * - `production_item` - Analyze a production item by ID
   * - `azl` - Analyze an AZL label by ID or UUID
   * - `purchase_order` - Analyze a purchase order by ID
   *
   * ### 💡 Use Cases
   *
   * - Troubleshoot delayed orders
   * - Identify bottlenecks in production
   * - Get recommendations for resolving issues
   * - Track entity lifecycle and status changes
   * - Feed raw data to AI assistants for contextual analysis
   *
   * @example
   * ```ts
   * const response = await client.analysis.analyze({
   *   id: '267ada05-1ff3-4c49-a8cd-21ac2bb00c8d',
   *   type: 'azl',
   * });
   * ```
   */
  analyze(body: AnalysisAnalyzeParams, options?: RequestOptions): APIPromise<AnalysisAnalyzeResponse> {
    return this._client.post('/api/analysis', { body, ...options });
  }

  /**
   * ## 📚 List Available Analysis Types
   *
   * Returns all entity types that can be analyzed via the `/api/analysis` endpoint,
   * along with descriptions of what each type supports.
   *
   * Use this endpoint to:
   *
   * - Discover which entities can be analyzed
   * - Understand how to identify each entity type
   * - Build dynamic UIs for analysis selection
   *
   * @example
   * ```ts
   * const response = await client.analysis.listTypes();
   * ```
   */
  listTypes(options?: RequestOptions): APIPromise<AnalysisListTypesResponse> {
    return this._client.get('/api/analysis/types', options);
  }
}

export interface AnalysisAnalyzeResponse {
  /**
   * Server-side AI analysis results (omitted when raw_only=true)
   */
  analysis?: AnalysisAnalyzeResponse.Analysis;

  /**
   * Timestamp when the analysis was performed
   */
  analyzed_at?: string;

  /**
   * Internal ID of the entity
   */
  entity_id?: number;

  /**
   * Type of entity analyzed (uppercase)
   */
  entity_type?: string;

  /**
   * Complete raw entity data (always included when raw_only=true or
   * include_raw_data=true). When raw_only=true, this is the primary response content
   * for client-side AI analysis.
   */
  raw_data?: { [key: string]: unknown };

  success?: boolean;
}

export namespace AnalysisAnalyzeResponse {
  /**
   * Server-side AI analysis results (omitted when raw_only=true)
   */
  export interface Analysis {
    /**
     * List of delays affecting the entity
     */
    delays?: Array<Analysis.Delay>;

    /**
     * List of identified issues
     */
    issues?: Array<Analysis.Issue>;

    /**
     * Recommended actions to take
     */
    next_steps?: Array<Analysis.NextStep>;

    /**
     * General recommendations for process improvement
     */
    recommendations?: Array<string>;

    /**
     * Detailed explanation of the current status
     */
    status_explanation?: string;

    /**
     * High-level summary of the entity's current state
     */
    summary?: string;

    /**
     * Timeline information
     */
    timeline?: Analysis.Timeline;

    /**
     * Overall urgency level
     */
    urgency_level?: 'low' | 'medium' | 'high' | 'critical';
  }

  export namespace Analysis {
    export interface Delay {
      duration?: string;

      reason?: string;

      recoverable?: boolean;
    }

    export interface Issue {
      description?: string;

      severity?: 'low' | 'medium' | 'high' | 'critical';
    }

    export interface NextStep {
      action?: string;

      estimated_time?: string;

      priority?: 'low' | 'medium' | 'high' | 'urgent';

      who?: string;
    }

    /**
     * Timeline information
     */
    export interface Timeline {
      created?: string;

      current_age?: string;

      expected_completion?: string;

      on_track?: boolean;
    }
  }
}

export interface AnalysisListTypesResponse {
  /**
   * Descriptions for each analysis type
   */
  descriptions?: { [key: string]: string };

  success?: boolean;

  /**
   * List of entity types that can be analyzed
   */
  types?: Array<string>;
}

export interface AnalysisAnalyzeParams {
  /**
   * ID or UUID of the entity to analyze
   */
  id: string;

  /**
   * Type of entity to analyze
   */
  type: 'order' | 'production_item' | 'azl' | 'purchase_order';

  /**
   * Whether to include raw entity data in the response (provides more context for AI
   * analysis)
   */
  include_raw_data?: boolean;

  /**
   * When true, returns only the raw entity data without server-side AI analysis
   * (allows client-side AI to analyze the data)
   */
  raw_only?: boolean;
}

export declare namespace Analysis {
  export {
    type AnalysisAnalyzeResponse as AnalysisAnalyzeResponse,
    type AnalysisListTypesResponse as AnalysisListTypesResponse,
    type AnalysisAnalyzeParams as AnalysisAnalyzeParams,
  };
}
