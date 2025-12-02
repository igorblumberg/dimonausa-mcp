// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'dimona-usa-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'analysis',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/analysis',
};

export const tool: Tool = {
  name: 'analyze_analysis',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n## 🔍 Analyze an Entity\n\nGet detailed data and optionally AI-powered analysis for orders, production items, AZLs (labels), or purchase orders.\n\n### 🤖 Analysis Modes\n- **raw_only=true** (default, recommended): Returns raw entity data for client-side AI analysis\n- **raw_only=false**: Returns server-side AI analysis + raw data\n\nWhen using raw_only=true, the response includes complete entity data that can be analyzed by your own AI model (e.g., Claude via MCP) for more flexible and context-aware insights.\n\nThis endpoint provides:\n- Complete raw entity data with full event history\n- Status summary and explanations (when raw_only=false)\n- Identified issues and delays (when raw_only=false)\n- Recommended next steps with priorities (when raw_only=false)\n- Timeline analysis and urgency levels (when raw_only=false)\n\n### 📋 Supported Entity Types\n- `order` - Analyze an order by ID, UUID, or reference\n- `production_item` - Analyze a production item by ID\n- `azl` - Analyze an AZL label by ID or UUID\n- `purchase_order` - Analyze a purchase order by ID\n\n### 💡 Use Cases\n- Troubleshoot delayed orders\n- Identify bottlenecks in production\n- Get recommendations for resolving issues\n- Track entity lifecycle and status changes\n- Feed raw data to AI assistants for contextual analysis\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/analysis_analyze_response',\n  $defs: {\n    analysis_analyze_response: {\n      type: 'object',\n      properties: {\n        analysis: {\n          type: 'object',\n          description: 'Server-side AI analysis results (omitted when raw_only=true)',\n          properties: {\n            delays: {\n              type: 'array',\n              description: 'List of delays affecting the entity',\n              items: {\n                type: 'object',\n                properties: {\n                  duration: {\n                    type: 'string'\n                  },\n                  reason: {\n                    type: 'string'\n                  },\n                  recoverable: {\n                    type: 'boolean'\n                  }\n                }\n              }\n            },\n            issues: {\n              type: 'array',\n              description: 'List of identified issues',\n              items: {\n                type: 'object',\n                properties: {\n                  description: {\n                    type: 'string'\n                  },\n                  severity: {\n                    type: 'string',\n                    enum: [                      'low',\n                      'medium',\n                      'high',\n                      'critical'\n                    ]\n                  }\n                }\n              }\n            },\n            next_steps: {\n              type: 'array',\n              description: 'Recommended actions to take',\n              items: {\n                type: 'object',\n                properties: {\n                  action: {\n                    type: 'string'\n                  },\n                  estimated_time: {\n                    type: 'string'\n                  },\n                  priority: {\n                    type: 'string',\n                    enum: [                      'low',\n                      'medium',\n                      'high',\n                      'urgent'\n                    ]\n                  },\n                  who: {\n                    type: 'string'\n                  }\n                }\n              }\n            },\n            recommendations: {\n              type: 'array',\n              description: 'General recommendations for process improvement',\n              items: {\n                type: 'string'\n              }\n            },\n            status_explanation: {\n              type: 'string',\n              description: 'Detailed explanation of the current status'\n            },\n            summary: {\n              type: 'string',\n              description: 'High-level summary of the entity\\'s current state'\n            },\n            timeline: {\n              type: 'object',\n              description: 'Timeline information',\n              properties: {\n                created: {\n                  type: 'string',\n                  format: 'date-time'\n                },\n                current_age: {\n                  type: 'string'\n                },\n                expected_completion: {\n                  type: 'string',\n                  format: 'date-time'\n                },\n                on_track: {\n                  type: 'boolean'\n                }\n              }\n            },\n            urgency_level: {\n              type: 'string',\n              description: 'Overall urgency level',\n              enum: [                'low',\n                'medium',\n                'high',\n                'critical'\n              ]\n            }\n          }\n        },\n        analyzed_at: {\n          type: 'string',\n          description: 'Timestamp when the analysis was performed',\n          format: 'date-time'\n        },\n        entity_id: {\n          type: 'integer',\n          description: 'Internal ID of the entity'\n        },\n        entity_type: {\n          type: 'string',\n          description: 'Type of entity analyzed (uppercase)'\n        },\n        raw_data: {\n          type: 'object',\n          description: 'Complete raw entity data (always included when raw_only=true or include_raw_data=true). When raw_only=true, this is the primary response content for client-side AI analysis.',\n          additionalProperties: true\n        },\n        success: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID or UUID of the entity to analyze',
      },
      type: {
        type: 'string',
        description: 'Type of entity to analyze',
        enum: ['order', 'production_item', 'azl', 'purchase_order'],
      },
      include_raw_data: {
        type: 'boolean',
        description:
          'Whether to include raw entity data in the response (provides more context for AI analysis)',
      },
      raw_only: {
        type: 'boolean',
        description:
          'When true, returns only the raw entity data without server-side AI analysis (allows client-side AI to analyze the data)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'type'],
  },
  annotations: {},
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.analysis.analyze(body)));
  } catch (error) {
    if (error instanceof DimonaUsaAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
