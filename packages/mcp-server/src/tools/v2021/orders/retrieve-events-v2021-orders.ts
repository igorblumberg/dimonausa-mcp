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
  httpPath: '/api/v2021/order/{order-uuid}/events',
};

export const tool: Tool = {
  name: 'retrieve_events_v2021_orders',
  description:
    '## 📜 Retrieve Order Events\n\nFetch a detailed timeline of all production-related events for a given order.\n\nUnlike the main order status (which reflects the order as a whole), this endpoint returns **granular item-level actions**, including printing, packaging, and shipping steps — with timestamps and affected item IDs.\n',
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
  return asTextContentResult(await client.v2021.orders.retrieveEvents(order_uuid));
};

export default { metadata, tool, handler };
