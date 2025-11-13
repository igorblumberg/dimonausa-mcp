// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'context',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/context',
};

export const tool: Tool = {
  name: 'retrieve_context',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 🧠 System Context & Documentation\n\nReturns comprehensive documentation about the Dimona USA Production Control System, including:\n- Business overview and core capabilities\n- Entity definitions (Orders, ProductionItems, AZLs, etc.)\n- Status workflows and transitions\n- Business rules and priorities\n- Terminology and glossary\n\n**🤖 For AI Assistants**: This endpoint should be called first to understand the system domain before making other API calls. It provides essential context for interpreting data and making informed recommendations.\n\n### 📋 Key Information Provided\n- **Core Entities**: Detailed descriptions of Orders, ProductionItems, AZLs, SKUs, PurchaseOrders, etc.\n- **Workflows**: Complete lifecycle documentation (order → shipment, inventory replenishment, etc.)\n- **Status Definitions**: All possible statuses with descriptions, next steps, and timing expectations\n- **Business Rules**: Priority rules, inventory rules, timing expectations\n- **Terminology**: Industry-specific terms and acronyms\n- **Facilities**: Information about production locations and capabilities\n\n### ⚡ Performance\n- Response is cached and optimized for frequent access\n- No authentication required (public documentation)\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/context_retrieve_response',\n  $defs: {\n    context_retrieve_response: {\n      type: 'object',\n      description: 'Comprehensive system documentation and context for AI assistants',\n      properties: {\n        business_overview: {\n          type: 'object',\n          properties: {\n            core_capabilities: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            description: {\n              type: 'string'\n            },\n            industry: {\n              type: 'string'\n            },\n            key_differentiators: {\n              type: 'object',\n              additionalProperties: true\n            }\n          }\n        },\n        business_rules: {\n          type: 'object',\n          description: 'System business rules and priorities',\n          properties: {\n            inventory_rules: {\n              type: 'object',\n              additionalProperties: true\n            },\n            priority_rules: {\n              type: 'object',\n              additionalProperties: true\n            },\n            status_progression: {\n              type: 'object',\n              additionalProperties: true\n            },\n            timing_expectations: {\n              type: 'object',\n              additionalProperties: true\n            }\n          }\n        },\n        core_entities: {\n          type: 'object',\n          description: 'Detailed descriptions of all system entities (Order, ProductionItem, AZL, etc.)',\n          additionalProperties: true\n        },\n        facilities: {\n          type: 'object',\n          description: 'Production facility information',\n          additionalProperties: true\n        },\n        last_updated: {\n          type: 'string',\n          format: 'date'\n        },\n        system_name: {\n          type: 'string'\n        },\n        terminology: {\n          type: 'object',\n          description: 'Glossary of domain-specific terms',\n          additionalProperties: true\n        },\n        version: {\n          type: 'string'\n        },\n        workflows: {\n          type: 'object',\n          description: 'Complete workflow documentation (order fulfillment, inventory, etc.)',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.context.retrieve()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
