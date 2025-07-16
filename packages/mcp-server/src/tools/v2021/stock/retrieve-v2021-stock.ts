// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📦 Get Stock By Reference\n\nReturns **real-time inventory** and product details for a single SKU.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/stock_item',\n  $defs: {\n    stock_item: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'integer'\n        },\n        brand: {\n          type: 'string'\n        },\n        color: {\n          type: 'string'\n        },\n        price: {\n          type: 'number'\n        },\n        product_name: {\n          type: 'string'\n        },\n        size: {\n          type: 'string'\n        },\n        SKU: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          enum: [            'in-stock',\n            'out-of-stock',\n            'low-stock'\n          ]\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'sku-reference': {
        type: 'string',
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
  const { 'sku-reference': sku_reference, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2021.stock.retrieve(sku_reference)));
};

export default { metadata, tool, handler };
