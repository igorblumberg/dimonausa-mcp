// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'analytics.production_snapshot',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/analytics/production-snapshot/by-ship-date',
};

export const tool: Tool = {
  name: 'retrieve_by_ship_date_analytics_production_snapshot',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📦 Production Snapshot by Ship Date\n\nCurrent production status grouped by ship dates.\n\n### 📈 Returns\n- Items grouped by ship date\n- Urgency categories (OVERDUE, DUE TODAY, DUE TOMORROW, etc.)\n- Item counts by production status\n- Average days since creation\n\n### ⚠️ Notes\n- Only includes active production orders\n- Orders must have a ship_by date set\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          age_category: {\n            type: 'string'\n          },\n          avg_days_since_creation: {\n            type: 'number'\n          },\n          avg_days_until_ship_by: {\n            type: 'number'\n          },\n          created_items: {\n            type: 'integer'\n          },\n          creation_date: {\n            type: 'string',\n            format: 'date'\n          },\n          days_since_creation: {\n            type: 'integer'\n          },\n          partially_printed_items: {\n            type: 'integer'\n          },\n          production_error_items: {\n            type: 'integer'\n          },\n          ship_by_date: {\n            type: 'string',\n            format: 'date'\n          },\n          total_items: {\n            type: 'integer'\n          },\n          total_orders: {\n            type: 'integer'\n          },\n          urgency_category: {\n            type: 'string'\n          },\n          waiting_customer_items: {\n            type: 'integer'\n          },\n          waiting_inventory_items: {\n            type: 'integer'\n          },\n          waiting_packing_items: {\n            type: 'integer'\n          },\n          waiting_picking_items: {\n            type: 'integer'\n          },\n          waiting_printer_items: {\n            type: 'integer'\n          },\n          waiting_purchase_items: {\n            type: 'integer'\n          },\n          waiting_qc_items: {\n            type: 'integer'\n          }\n        },\n        required: []\n      }\n    },\n    metadata: {\n      $ref: '#/$defs/analytics_metadata'\n    },\n    status: {\n      type: 'string'\n    }\n  },\n  required: [],\n  $defs: {\n    analytics_metadata: {\n      type: 'object',\n      properties: {\n        cached_until: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when cache expires',\n          format: 'date-time'\n        },\n        end_date: {\n          type: 'string',\n          format: 'date'\n        },\n        facility_id: {\n          type: 'integer',\n          description: 'Facility ID filter applied'\n        },\n        start_date: {\n          type: 'string',\n          format: 'date'\n        },\n        user_id: {\n          type: 'integer'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.analytics.productionSnapshot.retrieveByShipDate(body)),
  );
};

export default { metadata, tool, handler };
