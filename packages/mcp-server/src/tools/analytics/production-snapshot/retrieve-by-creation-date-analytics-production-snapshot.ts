// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'analytics.production_snapshot',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/analytics/production-snapshot/by-creation-date',
};

export const tool: Tool = {
  name: 'retrieve_by_creation_date_analytics_production_snapshot',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📦 Production Snapshot by Creation Date\n\nCurrent production status grouped by order creation dates.\n\n### 📈 Returns\n- Items grouped by creation date\n- Age categories (TODAY/YESTERDAY, THIS WEEK, THIS MONTH, etc.)\n- Item counts by production status\n- Days since creation and until ship date\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/production_snapshot_retrieve_by_creation_date_response',\n  $defs: {\n    production_snapshot_retrieve_by_creation_date_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              age_category: {\n                type: 'string'\n              },\n              avg_days_since_creation: {\n                type: 'number'\n              },\n              avg_days_until_ship_by: {\n                type: 'number'\n              },\n              created_items: {\n                type: 'integer'\n              },\n              creation_date: {\n                type: 'string',\n                format: 'date'\n              },\n              days_since_creation: {\n                type: 'integer'\n              },\n              partially_printed_items: {\n                type: 'integer'\n              },\n              production_error_items: {\n                type: 'integer'\n              },\n              ship_by_date: {\n                type: 'string',\n                format: 'date'\n              },\n              total_items: {\n                type: 'integer'\n              },\n              total_orders: {\n                type: 'integer'\n              },\n              urgency_category: {\n                type: 'string'\n              },\n              waiting_customer_items: {\n                type: 'integer'\n              },\n              waiting_inventory_items: {\n                type: 'integer'\n              },\n              waiting_packing_items: {\n                type: 'integer'\n              },\n              waiting_picking_items: {\n                type: 'integer'\n              },\n              waiting_printer_items: {\n                type: 'integer'\n              },\n              waiting_purchase_items: {\n                type: 'integer'\n              },\n              waiting_qc_items: {\n                type: 'integer'\n              }\n            }\n          }\n        },\n        metadata: {\n          $ref: '#/$defs/analytics_metadata'\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    },\n    analytics_metadata: {\n      type: 'object',\n      properties: {\n        cached_until: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when cache expires',\n          format: 'date-time'\n        },\n        end_date: {\n          type: 'string',\n          format: 'date'\n        },\n        facility_id: {\n          type: 'integer',\n          description: 'Facility ID filter applied'\n        },\n        start_date: {\n          type: 'string',\n          format: 'date'\n        },\n        user_id: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.analytics.productionSnapshot.retrieveByCreationDate(body)),
    );
  } catch (error) {
    if (error instanceof DimonaUsaAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
