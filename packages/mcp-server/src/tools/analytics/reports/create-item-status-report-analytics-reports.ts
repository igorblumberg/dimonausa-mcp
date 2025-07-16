// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'analytics.reports',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/analytics/reports/item-status',
};

export const tool: Tool = {
  name: 'create_item_status_report_analytics_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📊 Item Status Report\n\nGet detailed status information for production items by order reference or UUID.\n\n### 📈 Returns\n- Item label ID and current status\n- Order details (ID, UUID, reference, status)\n- Product information (name, color, size)\n- Tracking information\n- Timestamps (creation, ship by, shipped)\n- Purchase order details for items waiting inventory\n\n### 🔒 Permissions\n- Users can only view their own orders\n- Admin permission required to view other users' orders\n\n### ⚠️ Notes\n- At least one order reference or UUID must be provided\n- Maximum 100 order references/UUIDs per request\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          color_name: {\n            type: 'string'\n          },\n          customer: {\n            type: 'string'\n          },\n          item_eta: {\n            type: 'string',\n            description: 'Expected arrival date (for items waiting inventory)',\n            format: 'date'\n          },\n          item_purchased_at: {\n            type: 'string',\n            description: 'Purchase order creation date (for items waiting inventory)',\n            format: 'date-time'\n          },\n          label_created_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          label_id: {\n            type: 'integer',\n            description: 'Production item ID'\n          },\n          label_status: {\n            type: 'string',\n            description: 'Current production status'\n          },\n          order_created_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          order_id: {\n            type: 'integer'\n          },\n          order_reference: {\n            type: 'string'\n          },\n          order_ship_by: {\n            type: 'string',\n            format: 'date'\n          },\n          order_shipped_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          order_status: {\n            type: 'string'\n          },\n          order_uuid: {\n            type: 'string'\n          },\n          product_name: {\n            type: 'string'\n          },\n          size_name: {\n            type: 'string'\n          },\n          tracking_url: {\n            type: 'string'\n          }\n        },\n        required: []\n      }\n    },\n    metadata: {\n      type: 'object',\n      properties: {\n        cached_until: {\n          type: 'string',\n          format: 'date-time'\n        },\n        order_references: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        order_uuids: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: []\n    },\n    status: {\n      type: 'string'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      order_references: {
        type: 'array',
        description: 'Array of order references to query',
        items: {
          type: 'string',
        },
      },
      order_uuids: {
        type: 'array',
        description: 'Array of order UUIDs to query',
        items: {
          type: 'string',
        },
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
    await maybeFilter(args, await client.analytics.reports.createItemStatusReport(body)),
  );
};

export default { metadata, tool, handler };
