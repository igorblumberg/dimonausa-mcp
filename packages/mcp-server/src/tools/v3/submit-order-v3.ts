// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 🗂️ Submit a Production Order – Legacy Payload\n\nLegacy version of the production order submission endpoint, maintained for backward compatibility with older Brazil-based integrations.\n\n**⚠️ Deprecation Notice**: This endpoint is deprecated. Please use `/api/v2021/orders` for new integrations.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order',\n  $defs: {\n    order: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        reference_id: {\n          type: 'string'\n        },\n        status: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.v3.submitOrder(body)));
};

export default { metadata, tool, handler };
