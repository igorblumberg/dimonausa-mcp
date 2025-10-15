// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'analytics.reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/analytics/reports/items-sold-ranking',
};

export const tool: Tool = {
  name: 'get_items_sold_ranking_analytics_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📊 Items Sold Ranking Report\n\nGet ranking of items by quantity sold within a date range.\n\n### 📈 Returns\n- SKU reference and product details\n- Total quantity sold\n- Number of unique orders\n- Ranking by quantity\n- Optional order summary statistics\n\n### 🔍 Filters\n- Filter by facility\n- Limit number of results\n- Include detailed order summary\n\n### 💡 Use Cases\n- Identify best-selling products\n- Plan inventory based on sales volume\n- Analyze product performance\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/report_get_items_sold_ranking_response',\n  $defs: {\n    report_get_items_sold_ranking_response: {\n      type: 'object',\n      properties: {\n        data: {\n          anyOf: [            {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  product_name: {\n                    type: 'string'\n                  },\n                  quantity_rank: {\n                    type: 'integer'\n                  },\n                  sku: {\n                    type: 'string'\n                  },\n                  sku_id: {\n                    type: 'integer'\n                  },\n                  total_items: {\n                    type: 'integer'\n                  },\n                  total_quantity_sold: {\n                    type: 'integer'\n                  },\n                  unique_orders: {\n                    type: 'integer'\n                  }\n                }\n              }\n            },\n            {\n              type: 'object',\n              properties: {\n                order_summary: {\n                  type: 'object',\n                  properties: {\n                    total_items: {\n                      type: 'integer'\n                    },\n                    total_orders: {\n                      type: 'integer'\n                    },\n                    total_units_sold: {\n                      type: 'integer'\n                    },\n                    unique_skus: {\n                      type: 'integer'\n                    }\n                  }\n                },\n                ranking: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      product_name: {\n                        type: 'string'\n                      },\n                      quantity_rank: {\n                        type: 'integer'\n                      },\n                      sku: {\n                        type: 'string'\n                      },\n                      sku_id: {\n                        type: 'integer'\n                      },\n                      total_items: {\n                        type: 'integer'\n                      },\n                      total_quantity_sold: {\n                        type: 'integer'\n                      },\n                      unique_orders: {\n                        type: 'integer'\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          ]\n        },\n        metadata: {\n          allOf: [            {\n              $ref: '#/$defs/analytics_metadata'\n            }\n          ]\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    },\n    analytics_metadata: {\n      type: 'object',\n      properties: {\n        cached_until: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when cache expires',\n          format: 'date-time'\n        },\n        end_date: {\n          type: 'string',\n          format: 'date'\n        },\n        facility_id: {\n          type: 'integer',\n          description: 'Facility ID filter applied'\n        },\n        start_date: {\n          type: 'string',\n          format: 'date'\n        },\n        user_id: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
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
      include_order_details: {
        type: 'boolean',
        description: 'Include order summary statistics',
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of items to return',
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
    await maybeFilter(jq_filter, await client.analytics.reports.getItemsSoldRanking(body)),
  );
};

export default { metadata, tool, handler };
