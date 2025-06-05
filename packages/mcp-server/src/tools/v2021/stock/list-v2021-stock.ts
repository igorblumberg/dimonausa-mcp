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
  httpPath: '/api/v2021/stock',
};

export const tool: Tool = {
  name: 'list_v2021_stock',
  description:
    '## 🧾 Get Stocks\n\nRetrieve a **paginated list** of available SKUs, including stock levels, product specs, and print capabilities.\n\nUse this endpoint to **browse** or **sync** your product catalog page by page.\n',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Number of items per page',
      },
      offset: {
        type: 'integer',
        description: 'Offset index for pagination',
      },
    },
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2021.stock.list(body));
};

export default { metadata, tool, handler };
