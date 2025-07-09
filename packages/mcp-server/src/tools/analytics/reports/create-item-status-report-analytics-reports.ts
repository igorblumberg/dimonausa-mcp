// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    "## 📊 Item Status Report\n\nGet detailed status information for production items by order reference or UUID.\n\n### 📈 Returns\n- Item label ID and current status\n- Order details (ID, UUID, reference, status)\n- Product information (name, color, size)\n- Tracking information\n- Timestamps (creation, ship by, shipped)\n- Purchase order details for items waiting inventory\n\n### 🔒 Permissions\n- Users can only view their own orders\n- Admin permission required to view other users' orders\n\n### ⚠️ Notes\n- At least one order reference or UUID must be provided\n- Maximum 100 order references/UUIDs per request\n",
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
    },
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.analytics.reports.createItemStatusReport(body));
};

export default { metadata, tool, handler };
