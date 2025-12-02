// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'analytics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/analytics/sku-impact-analysis',
};

export const tool: Tool = {
  name: 'retrieve_sku_impact_analysis_analytics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📊 SKU Impact Analysis\n\nAnalyze which SKUs are causing the most production delays due to stockouts.\n\n### 📈 Returns\n- SKU reference\n- Total items ordered\n- Out of stock items count\n- Stockout rate percentage\n- Sorted by impact (most problematic SKUs first)\n\n### 🔍 Filters\n- Set minimum SKU volume to focus on high-volume items\n- Limit results to top N SKUs\n\n### 💡 Use Cases\n- Identify SKUs needing inventory optimization\n- Focus purchasing on high-impact items\n- Analyze stockout patterns\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/analytics_retrieve_sku_impact_analysis_response',\n  $defs: {\n    analytics_retrieve_sku_impact_analysis_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              avg_adjusted_hours_when_out_of_stock: {\n                type: 'number'\n              },\n              avg_excess_delay_per_item: {\n                type: 'number'\n              },\n              out_of_stock_items: {\n                type: 'integer'\n              },\n              sku: {\n                type: 'string'\n              },\n              stockout_rate_percent: {\n                type: 'number'\n              },\n              total_excess_delay_hours: {\n                type: 'integer'\n              },\n              total_items: {\n                type: 'integer'\n              }\n            }\n          }\n        },\n        metadata: {\n          allOf: [            {\n              $ref: '#/$defs/analytics_metadata'\n            }\n          ]\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    },\n    analytics_metadata: {\n      type: 'object',\n      properties: {\n        cached_until: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when cache expires',\n          format: 'date-time'\n        },\n        end_date: {\n          type: 'string',\n          format: 'date'\n        },\n        facility_id: {\n          type: 'integer',\n          description: 'Facility ID filter applied'\n        },\n        start_date: {\n          type: 'string',\n          format: 'date'\n        },\n        user_id: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
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
      limit: {
        type: 'integer',
        description: 'Maximum number of SKUs to return',
      },
      min_sku_volume: {
        type: 'integer',
        description: 'Minimum SKU volume to include',
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
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.analytics.retrieveSKUImpactAnalysis(body)),
    );
  } catch (error) {
    if (error instanceof DimonaUsaAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
