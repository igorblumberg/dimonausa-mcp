// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'v2021.stock',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2021/stock/{sku-reference}',
};

export const tool: Tool = {
  name: 'retrieve_v2021_stock',
  description:
    '## 📦 Get Stock By Reference\n\nReturns **real-time inventory** and product details for a single SKU.\n',
  inputSchema: {
    type: 'object',
    properties: {
      'sku-reference': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const { 'sku-reference': sku_reference, ...body } = args as any;
  return asTextContentResult(await client.v2021.stock.retrieve(sku_reference));
};

export default { metadata, tool, handler };
