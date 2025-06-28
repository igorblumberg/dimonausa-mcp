// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'v2021.orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2021/order/{order-uuid}/cancel',
};

export const tool: Tool = {
  name: 'cancel_v2021_orders',
  description:
    '## ❌ Cancel Production Order\n\nCancel an order before it enters production or shipping.\n\n### 🕒 When Cancellation Is Allowed\n- ✅ `Pending`: Always cancellable\n- ❌ `In Production`, `Shipped`: Not cancellable via API (contact support)\n',
  inputSchema: {
    type: 'object',
    properties: {
      'order-uuid': {
        type: 'string',
      },
      items: {
        type: 'array',
        description: 'Array of item IDs to cancel (empty array cancels entire order)',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const { 'order-uuid': order_uuid, ...body } = args as any;
  const response = await client.v2021.orders.cancel(order_uuid, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
