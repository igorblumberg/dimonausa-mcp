// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'analytics.reports',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/analytics/reports/orders-per-customer',
};

export const tool: Tool = {
  name: 'create_orders_per_customer_analytics_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📊 Orders Per Customer Report\n\nGet detailed order information grouped by customer for analytics and reporting purposes.\n\n### 📈 Returns\n- Total customers and total orders\n- Customer details with email and name\n- Order list per customer with status and tracking\n- Facility information for each order\n\n### 🔒 Permissions\n- Users can only view their own orders\n- Admin permission required to view other users' orders\n\n### ⚠️ Notes\n- User IDs array is required (min: 1, max: 100)\n- Date range is required (date_to must be >= date_from)\n- Facility ID filter is optional\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/report_create_orders_per_customer_response',\n  $defs: {\n    report_create_orders_per_customer_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            customers: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  customer_email: {\n                    type: 'string',\n                    description: 'Customer\\'s email address'\n                  },\n                  customer_name: {\n                    type: 'string',\n                    description: 'Customer\\'s full name'\n                  },\n                  orders: {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        date_created: {\n                          type: 'string',\n                          description: 'Order creation timestamp',\n                          format: 'date-time'\n                        },\n                        date_shipped: {\n                          type: 'string',\n                          description: 'Actual shipping timestamp',\n                          format: 'date-time'\n                        },\n                        facility_name: {\n                          type: 'string',\n                          description: 'Name of the facility handling the order'\n                        },\n                        order_id: {\n                          type: 'integer',\n                          description: 'Internal order ID'\n                        },\n                        reference: {\n                          type: 'string',\n                          description: 'Order reference/ID'\n                        },\n                        ship_by: {\n                          type: 'string',\n                          description: 'Required ship-by date',\n                          format: 'date-time'\n                        },\n                        status: {\n                          type: 'string',\n                          description: 'Current order status'\n                        },\n                        tracking_number: {\n                          type: 'string',\n                          description: 'Shipping tracking number'\n                        },\n                        uuid: {\n                          type: 'string',\n                          description: 'Order UUID'\n                        }\n                      }\n                    }\n                  },\n                  total_orders: {\n                    type: 'integer',\n                    description: 'Number of orders for this customer'\n                  }\n                }\n              }\n            },\n            total_customers: {\n              type: 'integer',\n              description: 'Total number of unique customers'\n            },\n            total_orders: {\n              type: 'integer',\n              description: 'Total number of orders across all customers'\n            }\n          }\n        },\n        metadata: {\n          allOf: [            {\n              $ref: '#/$defs/analytics_metadata'\n            }\n          ]\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    },\n    analytics_metadata: {\n      type: 'object',\n      properties: {\n        cached_until: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when cache expires',\n          format: 'date-time'\n        },\n        end_date: {\n          type: 'string',\n          format: 'date'\n        },\n        facility_id: {\n          type: 'integer',\n          description: 'Facility ID filter applied'\n        },\n        start_date: {\n          type: 'string',\n          format: 'date'\n        },\n        user_id: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      date_from: {
        type: 'string',
        description: 'Start date for the report',
        format: 'date',
      },
      date_to: {
        type: 'string',
        description: 'End date for the report (must be >= date_from)',
        format: 'date',
      },
      user_ids: {
        type: 'array',
        description: 'Array of user IDs to query (min 1, max 100)',
        items: {
          type: 'integer',
        },
      },
      facility_id: {
        type: 'integer',
        description: 'Optional facility ID filter',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['date_from', 'date_to', 'user_ids'],
  },
  annotations: {},
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.analytics.reports.createOrdersPerCustomer(body)),
    );
  } catch (error) {
    if (error instanceof DimonaUsaAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
