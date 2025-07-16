// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'v2021.shipping',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2021/shipping/rates',
};

export const tool: Tool = {
  name: 'calculate_rates_v2021_shipping',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 🚚 Calculate Shipping Rates\n\nGet real-time shipping rate estimates for a given destination and list of items.\n\nUse this endpoint to display available carriers, service levels, prices, and delivery estimates before placing an order.\n\n### 📦 What It Considers\n- Destination address (ZIP, country, region)\n- Package weight and quantity (derived from the SKUs)\n- Shipping carrier availability by region\n- Priority level: Standard, Priority, Express\n\n### ⚠️ Tips\n- Use the returned `rate_id` when submitting the actual order to lock in the rate\n- Refresh rates if the cart or address changes\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          currency: {\n            type: 'string'\n          },\n          maxDeliveryDate: {\n            type: 'string',\n            format: 'date'\n          },\n          maxDeliveryDays: {\n            type: 'integer'\n          },\n          minDeliveryDate: {\n            type: 'string',\n            format: 'date'\n          },\n          minDeliveryDays: {\n            type: 'integer'\n          },\n          name: {\n            type: 'string'\n          },\n          rate: {\n            type: 'string'\n          }\n        },\n        required: []\n      }\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            quantity: {
              type: 'integer',
            },
            sku: {
              type: 'string',
            },
          },
          required: ['quantity', 'sku'],
        },
      },
      recipient: {
        type: 'object',
        properties: {
          address1: {
            type: 'string',
          },
          city: {
            type: 'string',
          },
          country_code: {
            type: 'string',
          },
          state_code: {
            type: 'string',
          },
          zip: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
        },
        required: ['address1', 'city', 'country_code', 'state_code', 'zip'],
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
  return asTextContentResult(await maybeFilter(args, await client.v2021.shipping.calculateRates(body)));
};

export default { metadata, tool, handler };
