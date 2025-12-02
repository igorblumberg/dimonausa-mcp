// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'v2021.orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2021/orders/{order-uuid}',
};

export const tool: Tool = {
  name: 'retrieve_v2021_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📦 Retrieve a Production Order\n\nGet full details of a submitted production order using its `reference_id`.\n\nThis endpoint returns the order's current status, shipping details, item list and tracking info (if shipped).\n\n### 📋 Order Status Values\n- `Pending`: Order received\n- `In Production`: Items are currently being printed/manufactured\n- `Shipped`: Order dispatched with tracking\n- `Cancelled`: Order was cancelled\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order_retrieve_response',\n  $defs: {\n    order_retrieve_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        address_from: {\n          $ref: '#/$defs/address_from'\n        },\n        address_to: {\n          $ref: '#/$defs/address'\n        },\n        carrier: {\n          type: 'string'\n        },\n        items: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/order_item'\n          }\n        },\n        reference_id: {\n          type: 'string'\n        },\n        reprint: {\n          type: 'boolean'\n        },\n        sample: {\n          type: 'boolean'\n        },\n        shipping: {\n          $ref: '#/$defs/shipping_info'\n        },\n        status: {\n          type: 'string',\n          enum: [            'Pending',\n            'In Production',\n            'Shipped',\n            'Cancelled'\n          ]\n        },\n        tracking_number: {\n          type: 'string'\n        },\n        tracking_url: {\n          type: 'string'\n        },\n        xqc: {\n          type: 'boolean'\n        }\n      }\n    },\n    address_from: {\n      type: 'object',\n      properties: {\n        address1: {\n          type: 'string'\n        },\n        address2: {\n          type: 'string'\n        },\n        city: {\n          type: 'string'\n        },\n        company: {\n          type: 'string'\n        },\n        country: {\n          type: 'string'\n        },\n        region: {\n          type: 'string'\n        },\n        zip: {\n          type: 'string'\n        }\n      }\n    },\n    address: {\n      type: 'object',\n      properties: {\n        address1: {\n          type: 'string'\n        },\n        city: {\n          type: 'string'\n        },\n        country: {\n          type: 'string'\n        },\n        first_name: {\n          type: 'string'\n        },\n        last_name: {\n          type: 'string'\n        },\n        region: {\n          type: 'string'\n        },\n        zip: {\n          type: 'string'\n        },\n        address2: {\n          type: 'string'\n        },\n        email: {\n          type: 'string'\n        },\n        phone: {\n          type: 'string'\n        }\n      },\n      required: [        'address1',\n        'city',\n        'country',\n        'first_name',\n        'last_name',\n        'region',\n        'zip'\n      ]\n    },\n    order_item: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique item identifier'\n        },\n        preview_files: {\n          type: 'object',\n          properties: {\n            back: {\n              type: 'string'\n            },\n            front: {\n              type: 'string'\n            }\n          }\n        },\n        print_files: {\n          type: 'object',\n          properties: {\n            back: {\n              type: 'string'\n            },\n            front: {\n              type: 'string'\n            }\n          }\n        },\n        quantity: {\n          type: 'integer'\n        },\n        sku: {\n          type: 'string',\n          description: 'Product SKU'\n        }\n      },\n      required: [        'id',\n        'preview_files',\n        'print_files',\n        'quantity',\n        'sku'\n      ]\n    },\n    shipping_info: {\n      type: 'object',\n      properties: {\n        carrier: {\n          type: 'string',\n          enum: [            'USPS',\n            'UPS',\n            'FedEx',\n            'Default'\n          ]\n        },\n        priority: {\n          type: 'string',\n          enum: [            'Standard',\n            'Priority',\n            'Express'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'order-uuid': {
        type: 'string',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const { 'order-uuid': order_uuid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.v2021.orders.retrieve(order_uuid)));
  } catch (error) {
    if (error instanceof DimonaUsaAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
