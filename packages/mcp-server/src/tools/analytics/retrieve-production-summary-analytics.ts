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
  httpPath: '/api/analytics/production-summary',
};

export const tool: Tool = {
  name: 'retrieve_production_summary_analytics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📊 Overall Production Summary\n\nHigh-level overview of current production status.\n\n### 📈 Returns\n- Total active items and orders\n- Breakdown by production status\n- Urgency breakdown (overdue, due today, etc.)\n- Average days metrics\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        avg_days_since_creation: {\n          type: 'number'\n        },\n        avg_days_until_ship_by: {\n          type: 'number'\n        },\n        created_items: {\n          type: 'integer'\n        },\n        due_this_week_items: {\n          type: 'integer'\n        },\n        due_today_items: {\n          type: 'integer'\n        },\n        due_tomorrow_items: {\n          type: 'integer'\n        },\n        overdue_items: {\n          type: 'integer'\n        },\n        partially_printed_items: {\n          type: 'integer'\n        },\n        production_error_items: {\n          type: 'integer'\n        },\n        report_section: {\n          type: 'string'\n        },\n        total_active_items: {\n          type: 'integer'\n        },\n        total_active_orders: {\n          type: 'integer'\n        },\n        waiting_customer_items: {\n          type: 'integer'\n        },\n        waiting_inventory_items: {\n          type: 'integer'\n        },\n        waiting_packing_items: {\n          type: 'integer'\n        },\n        waiting_picking_items: {\n          type: 'integer'\n        },\n        waiting_printer_items: {\n          type: 'integer'\n        },\n        waiting_purchase_items: {\n          type: 'integer'\n        },\n        waiting_qc_items: {\n          type: 'integer'\n        }\n      }\n    },\n    metadata: {\n      $ref: '#/$defs/analytics_metadata'\n    },\n    status: {\n      type: 'string'\n    }\n  },\n  $defs: {\n    analytics_metadata: {\n      type: 'object',\n      properties: {\n        cached_until: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when cache expires',\n          format: 'date-time'\n        },\n        end_date: {\n          type: 'string',\n          format: 'date'\n        },\n        facility_id: {\n          type: 'integer',\n          description: 'Facility ID filter applied'\n        },\n        start_date: {\n          type: 'string',\n          format: 'date'\n        },\n        user_id: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.analytics.retrieveProductionSummary(body)),
  );
};

export default { metadata, tool, handler };
