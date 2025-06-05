// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'v2021.orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2021/orders/{order-uuid}',
};

export const tool: Tool = {
  name: 'retrieve_v2021_orders',
  description:
    "## 📦 Retrieve a Production Order\n\nGet full details of a submitted production order using its `reference_id`.\n\nThis endpoint returns the order's current status, shipping details, item list and tracking info (if shipped).\n\n### 📋 Order Status Values\n- `Pending`: Order received\n- `In Production`: Items are currently being printed/manufactured\n- `Shipped`: Order dispatched with tracking\n- `Cancelled`: Order was cancelled\n",
  inputSchema: {
    type: 'object',
    properties: {
      'order-uuid': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const { 'order-uuid': order_uuid, ...body } = args as any;
  return asTextContentResult(await client.v2021.orders.retrieve(order_uuid));
};

export default { metadata, tool, handler };
