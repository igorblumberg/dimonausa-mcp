// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'analysis',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/analysis/types',
};

export const tool: Tool = {
  name: 'list_types_analysis',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 📚 List Available Analysis Types\n\nReturns all entity types that can be analyzed via the `/api/analysis` endpoint, along with descriptions of what each type supports.\n\nUse this endpoint to:\n- Discover which entities can be analyzed\n- Understand how to identify each entity type\n- Build dynamic UIs for analysis selection\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/analysis_list_types_response',\n  $defs: {\n    analysis_list_types_response: {\n      type: 'object',\n      properties: {\n        descriptions: {\n          type: 'object',\n          description: 'Descriptions for each analysis type',\n          additionalProperties: true\n        },\n        success: {\n          type: 'boolean'\n        },\n        types: {\n          type: 'array',\n          description: 'List of entity types that can be analyzed',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.analysis.listTypes()));
};

export default { metadata, tool, handler };
