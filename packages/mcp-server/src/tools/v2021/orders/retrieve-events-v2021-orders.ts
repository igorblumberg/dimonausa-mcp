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
  httpPath: '/api/v2021/order/{order-uuid}/events',
};

export const tool: Tool = {
  name: 'retrieve_events_v2021_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📜 Retrieve Order Events\n\nFetch a detailed timeline of all production-related events for a given order.\n\nUnlike the main order status (which reflects the order as a whole), this endpoint returns **granular item-level actions**, including printing, packaging, and shipping steps — with timestamps and affected item IDs.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order_retrieve_events_response',\n  $defs: {\n    order_retrieve_events_response: {\n      type: 'object',\n      properties: {\n        events: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string',\n                description: 'Type of event',\n                enum: [                  'created',\n                  'picked',\n                  'printed',\n                  'packaged',\n                  'shipped'\n                ]\n              },\n              affected_items: {\n                type: 'array',\n                description: 'Array of item IDs affected by this action',\n                items: {\n                  type: 'string'\n                }\n              },\n              carrier: {\n                type: 'string',\n                description: 'Only present on \\'shipped\\' events'\n              },\n              time: {\n                type: 'string',\n                description: 'ISO 8601 timestamp when the event occurred',\n                format: 'date-time'\n              },\n              tracking_number: {\n                type: 'string',\n                description: 'Only present on \\'shipped\\' events'\n              },\n              tracking_url: {\n                type: 'string',\n                description: 'Only present on \\'shipped\\' events'\n              }\n            }\n          }\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.v2021.orders.retrieveEvents(order_uuid)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
