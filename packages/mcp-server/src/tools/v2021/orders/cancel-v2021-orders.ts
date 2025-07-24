// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## ❌ Cancel Production Order\n\nCancel an order before it enters production or shipping.\n\n### 🕒 When Cancellation Is Allowed\n- ✅ `Pending`: Always cancellable\n- ❌ `In Production`, `Shipped`: Not cancellable via API (contact support)\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['order-uuid'],
  },
  annotations: {},
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const { 'order-uuid': order_uuid, ...body } = args as any;
  const response = await client.v2021.orders.cancel(order_uuid, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
