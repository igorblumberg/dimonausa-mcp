// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'v3',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v3/orders',
};

export const tool: Tool = {
  name: 'submit_order_v3',
  description:
    '## 🗂️ Submit a Production Order – Legacy Payload\n\nLegacy version of the production order submission endpoint, maintained for backward compatibility with older Brazil-based integrations.\n\n**⚠️ Deprecation Notice**: This endpoint is deprecated. Please use `/api/v2021/orders` for new integrations.\n',
  inputSchema: {
    type: 'object',
    properties: {
      address: {
        type: 'object',
        properties: {
          city: {
            type: 'string',
          },
          complement: {
            type: 'string',
          },
          country: {
            type: 'string',
          },
          neighborhood: {
            type: 'string',
          },
          number: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          state: {
            type: 'string',
          },
          street: {
            type: 'string',
          },
          zipcode: {
            type: 'string',
          },
        },
        required: [],
      },
      customer_document: {
        type: 'string',
      },
      customer_email: {
        type: 'string',
      },
      customer_name: {
        type: 'string',
      },
      delivery_method_id: {
        type: 'string',
      },
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            designs: {
              type: 'object',
              properties: {
                back: {
                  type: 'string',
                },
                front: {
                  type: 'string',
                },
                inner_label: {
                  type: 'string',
                },
                left_sleeve: {
                  type: 'string',
                },
                outer_label: {
                  type: 'string',
                },
                right_sleeve: {
                  type: 'string',
                },
              },
              required: [],
            },
            dimona_sku_id: {
              type: 'string',
            },
            mocks: {
              type: 'object',
              properties: {
                back: {
                  type: 'string',
                },
                front: {
                  type: 'string',
                },
                inner_label: {
                  type: 'string',
                },
                left_sleeve: {
                  type: 'string',
                },
                outer_label: {
                  type: 'string',
                },
                right_sleeve: {
                  type: 'string',
                },
              },
              required: [],
            },
            name: {
              type: 'string',
            },
            qty: {
              type: 'integer',
            },
            sku: {
              type: 'string',
            },
          },
          required: [],
        },
      },
      nfe: {
        type: 'object',
        properties: {
          chave: {
            type: 'string',
          },
          link: {
            type: 'string',
          },
          numero: {
            type: 'string',
          },
          serie: {
            type: 'string',
          },
        },
        required: [],
      },
      order_id: {
        type: 'string',
      },
      shipping_speed: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v3.submitOrder(body));
};

export default { metadata, tool, handler };
