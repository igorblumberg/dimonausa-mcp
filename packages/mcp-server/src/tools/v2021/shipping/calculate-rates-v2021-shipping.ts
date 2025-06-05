// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    '## 🚚 Calculate Shipping Rates\n\nGet real-time shipping rate estimates for a given destination and list of items.\n\nUse this endpoint to display available carriers, service levels, prices, and delivery estimates before placing an order.\n\n### 📦 What It Considers\n- Destination address (ZIP, country, region)\n- Package weight and quantity (derived from the SKUs)\n- Shipping carrier availability by region\n- Priority level: Standard, Priority, Express\n\n### ⚠️ Tips\n- Use the returned `rate_id` when submitting the actual order to lock in the rate\n- Refresh rates if the cart or address changes\n',
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
    },
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2021.shipping.calculateRates(body));
};

export default { metadata, tool, handler };
