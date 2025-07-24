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
  httpPath: '/api/analytics/weekly-summary',
};

export const tool: Tool = {
  name: 'retrieve_weekly_summary_analytics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📊 Weekly Summary\n\nAggregated weekly metrics for production operations.\n\n### 📈 Returns\n- Week number and start date\n- Total orders and items created per week\n- Items printed, packaged, and shipped\n- Weekly efficiency percentages\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          report_section: {\n            type: 'string'\n          },\n          week_number: {\n            type: 'string'\n          },\n          week_start_date: {\n            type: 'string',\n            format: 'date'\n          },\n          weekly_items_created: {\n            type: 'integer'\n          },\n          weekly_items_packaged: {\n            type: 'integer'\n          },\n          weekly_items_printed: {\n            type: 'integer'\n          },\n          weekly_orders_created: {\n            type: 'integer'\n          },\n          weekly_orders_shipped: {\n            type: 'integer'\n          },\n          weekly_package_efficiency_pct: {\n            type: 'number'\n          },\n          weekly_print_efficiency_pct: {\n            type: 'number'\n          },\n          weekly_ship_efficiency_pct: {\n            type: 'number'\n          }\n        }\n      }\n    },\n    metadata: {\n      $ref: '#/$defs/analytics_metadata'\n    },\n    status: {\n      type: 'string'\n    }\n  },\n  $defs: {\n    analytics_metadata: {\n      type: 'object',\n      properties: {\n        cached_until: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when cache expires',\n          format: 'date-time'\n        },\n        end_date: {\n          type: 'string',\n          format: 'date'\n        },\n        facility_id: {\n          type: 'integer',\n          description: 'Facility ID filter applied'\n        },\n        start_date: {\n          type: 'string',\n          format: 'date'\n        },\n        user_id: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.analytics.retrieveWeeklySummary(body)));
};

export default { metadata, tool, handler };
