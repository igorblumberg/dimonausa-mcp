// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'v2021',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2021/inventory',
};

export const tool: Tool = {
  name: 'get_inventory_v2021',
  description:
    '## 📥 Get Inventory\n\nBulk-check stock availability for **multiple SKUs at once**.\n\nSend a list of SKU references in the body to receive their current inventory and status.\n',
  inputSchema: {
    type: 'object',
    properties: {
      SKU: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2021.getInventory(body));
};

export default { metadata, tool, handler };
