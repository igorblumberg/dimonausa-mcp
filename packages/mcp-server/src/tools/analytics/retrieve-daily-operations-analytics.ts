// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'analytics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/analytics/daily-operations',
};

export const tool: Tool = {
  name: 'retrieve_daily_operations_analytics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📊 Daily Operations Snapshot\n\nTrack orders created, items produced, printed, and shipped by day.\n\n### 📈 Returns\n- Daily breakdown of orders and production items created\n- Items printed and packaged per day\n- Orders shipped per day\n- Production efficiency percentages\n- Cumulative totals over time\n\n### 🔒 Permissions\n- Users can view their own data\n- Admin permission required to view other users' data\n\n### ⏱️ Performance\n- Results cached for 15 minutes\n- `cached_until` timestamp included in response\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/analytics_retrieve_daily_operations_response',\n  $defs: {\n    analytics_retrieve_daily_operations_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              cumulative_items_created: {\n                type: 'integer'\n              },\n              cumulative_items_printed: {\n                type: 'integer'\n              },\n              cumulative_orders: {\n                type: 'integer'\n              },\n              cumulative_orders_shipped: {\n                type: 'integer'\n              },\n              day_of_week: {\n                type: 'string'\n              },\n              items_packaged: {\n                type: 'integer'\n              },\n              items_printed: {\n                type: 'integer'\n              },\n              operation_date: {\n                type: 'string',\n                format: 'date'\n              },\n              orders_created: {\n                type: 'integer'\n              },\n              orders_shipped: {\n                type: 'integer'\n              },\n              package_efficiency_pct: {\n                type: 'number'\n              },\n              print_efficiency_pct: {\n                type: 'number'\n              },\n              production_items_created: {\n                type: 'integer'\n              }\n            }\n          }\n        },\n        metadata: {\n          $ref: '#/$defs/analytics_metadata'\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    },\n    analytics_metadata: {\n      type: 'object',\n      properties: {\n        cached_until: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when cache expires',\n          format: 'date-time'\n        },\n        end_date: {\n          type: 'string',\n          format: 'date'\n        },\n        facility_id: {\n          type: 'integer',\n          description: 'Facility ID filter applied'\n        },\n        start_date: {\n          type: 'string',\n          format: 'date'\n        },\n        user_id: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
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
    await maybeFilter(jq_filter, await client.analytics.retrieveDailyOperations(body)),
  );
};

export default { metadata, tool, handler };
