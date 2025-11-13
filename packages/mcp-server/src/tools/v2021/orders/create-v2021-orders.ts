// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'v2021.orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2021/orders',
};

export const tool: Tool = {
  name: 'create_v2021_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 🧾 Submit a Production Order\n\nCreate a new DTG production order to be printed, packed, and shipped from one of our regional facilities.\n\nUse this endpoint to send print-ready artwork, shipping details, and item metadata. Orders are automatically validated, assigned to the best facility, and queued for fulfillment.\n\n### 🔧 Required Fields\n- `id`: Your unique order reference (used for idempotency)\n- `items`: List of products to print, each with a valid SKU and quantity\n- `print_files`: High-res artwork for each print location (PNG, 300 DPI, transparent)\n- `preview_files`: Customer-facing mockups\n- `address_to`: Shipping details for the end customer\n- `shipping`: Carrier and shipping priority\n\n### ⚠️ Best Practices\n1. Check inventory for each SKU before submitting\n2. Use unique order IDs to avoid duplicates\n3. Validate print files (300 DPI, correct format) to avoid quality issues\n4. Include customer contact for delivery updates and return handling\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order',\n  $defs: {\n    order: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        reference_id: {\n          type: 'string'\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Your unique order reference (used for idempotency)',
      },
      address_to: {
        $ref: '#/$defs/address',
      },
      items: {
        type: 'array',
        items: {
          $ref: '#/$defs/order_item',
        },
      },
      shipping: {
        $ref: '#/$defs/shipping_info',
      },
      address_from: {
        $ref: '#/$defs/address_from',
      },
      package_inserts: {
        type: 'array',
        description: 'Marketing materials (PDFs, 4x6 recommended)',
        items: {
          type: 'string',
        },
      },
      packing_slip: {
        type: 'string',
        description: 'Custom PDF packing slip (letter size, optional)',
      },
      reprint: {
        type: 'boolean',
        description: 'Reprint of a previously failed/damaged order',
      },
      sample: {
        type: 'boolean',
        description: 'Mark order as a sample or test',
      },
      xqc: {
        type: 'boolean',
        description: 'Enable extra quality control for high-value orders',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'address_to', 'items', 'shipping'],
    $defs: {
      address: {
        type: 'object',
        properties: {
          address1: {
            type: 'string',
          },
          city: {
            type: 'string',
          },
          country: {
            type: 'string',
          },
          first_name: {
            type: 'string',
          },
          last_name: {
            type: 'string',
          },
          region: {
            type: 'string',
          },
          zip: {
            type: 'string',
          },
          address2: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
        },
        required: ['address1', 'city', 'country', 'first_name', 'last_name', 'region', 'zip'],
      },
      order_item: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique item identifier',
          },
          preview_files: {
            type: 'object',
            properties: {
              back: {
                type: 'string',
              },
              front: {
                type: 'string',
              },
            },
          },
          print_files: {
            type: 'object',
            properties: {
              back: {
                type: 'string',
              },
              front: {
                type: 'string',
              },
            },
          },
          quantity: {
            type: 'integer',
          },
          sku: {
            type: 'string',
            description: 'Product SKU',
          },
        },
        required: ['id', 'preview_files', 'print_files', 'quantity', 'sku'],
      },
      shipping_info: {
        type: 'object',
        properties: {
          carrier: {
            type: 'string',
            enum: ['USPS', 'UPS', 'FedEx', 'Default'],
          },
          priority: {
            type: 'string',
            enum: ['Standard', 'Priority', 'Express'],
          },
        },
      },
      address_from: {
        type: 'object',
        properties: {
          address1: {
            type: 'string',
          },
          address2: {
            type: 'string',
          },
          city: {
            type: 'string',
          },
          company: {
            type: 'string',
          },
          country: {
            type: 'string',
          },
          region: {
            type: 'string',
          },
          zip: {
            type: 'string',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.v2021.orders.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
