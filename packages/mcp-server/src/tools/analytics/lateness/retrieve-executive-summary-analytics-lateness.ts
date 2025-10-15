// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📊 Order Lateness Analysis - Executive Summary\n\nComprehensive analysis of order processing times and stockout impacts.\n\n### 📈 Returns\n- Total orders and items analyzed\n- In-stock vs out-of-stock item counts\n- Stockout rate percentage\n- Average processing times (adjusted for business hours)\n\n### 🔍 Filters\n- Filter by specific order references, UUIDs, or IDs\n- Set minimum SKU volume threshold\n\n### ⏰ Business Hours\n- Analysis considers business hours: 8 AM - 10 PM, Monday-Friday\n- Weekend orders adjusted to next business day\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/lateness_retrieve_executive_summary_response',\n  $defs: {\n    lateness_retrieve_executive_summary_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            in_stock_avg_hours_adjusted: {\n              type: 'number'\n            },\n            in_stock_items: {\n              type: 'integer'\n            },\n            out_of_stock_avg_hours_adjusted: {\n              type: 'number'\n            },\n            out_of_stock_items: {\n              type: 'integer'\n            },\n            report_section: {\n              type: 'string'\n            },\n            stockout_rate_percent: {\n              type: 'number'\n            },\n            total_items: {\n              type: 'integer'\n            },\n            total_orders: {\n              type: 'integer'\n            }\n          }\n        },\n        metadata: {\n          allOf: [            {\n              $ref: '#/$defs/analytics_metadata'\n            }\n          ]\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    },\n    analytics_metadata: {\n      type: 'object',\n      properties: {\n        cached_until: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when cache expires',\n          format: 'date-time'\n        },\n        end_date: {\n          type: 'string',\n          format: 'date'\n        },\n        facility_id: {\n          type: 'integer',\n          description: 'Facility ID filter applied'\n        },\n        start_date: {\n          type: 'string',\n          format: 'date'\n        },\n        user_id: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['end_date', 'start_date'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.analytics.lateness.retrieveExecutiveSummary(body)),
  );
};

export default { metadata, tool, handler };
