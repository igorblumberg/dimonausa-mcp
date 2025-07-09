// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'analytics.lateness',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/analytics/lateness/executive-summary',
};

export const tool: Tool = {
  name: 'retrieve_executive_summary_analytics_lateness',
  description:
    '## 📊 Order Lateness Analysis - Executive Summary\n\nComprehensive analysis of order processing times and stockout impacts.\n\n### 📈 Returns\n- Total orders and items analyzed\n- In-stock vs out-of-stock item counts\n- Stockout rate percentage\n- Average processing times (adjusted for business hours)\n\n### 🔍 Filters\n- Filter by specific order references, UUIDs, or IDs\n- Set minimum SKU volume threshold\n\n### ⏰ Business Hours\n- Analysis considers business hours: 8 AM - 10 PM, Monday-Friday\n- Weekend orders adjusted to next business day\n',
  inputSchema: {
    type: 'object',
    properties: {
      end_date: {
        type: 'string',
        description: 'End date for analysis (YYYY-MM-DD)',
        format: 'date',
      },
      start_date: {
        type: 'string',
        description: 'Start date for analysis (YYYY-MM-DD)',
        format: 'date',
      },
      facility_id: {
        type: 'integer',
        description: 'Optional Facility ID to filter by specific production facility',
      },
      min_sku_volume: {
        type: 'integer',
        description: 'Minimum SKU volume to include',
      },
      order_ids: {
        type: 'string',
        description: 'Comma-separated order IDs to filter',
      },
      order_references: {
        type: 'string',
        description: 'Comma-separated order references to filter',
      },
      order_uuids: {
        type: 'string',
        description: 'Comma-separated order UUIDs to filter',
      },
      user_id: {
        type: 'integer',
        description: 'Optional User ID to analyze (requires admin permissions for other users)',
      },
    },
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.analytics.lateness.retrieveExecutiveSummary(body));
};

export default { metadata, tool, handler };
