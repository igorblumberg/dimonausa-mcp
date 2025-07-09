// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'analytics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/analytics/production-summary',
};

export const tool: Tool = {
  name: 'retrieve_production_summary_analytics',
  description:
    '## 📊 Overall Production Summary\n\nHigh-level overview of current production status.\n\n### 📈 Returns\n- Total active items and orders\n- Breakdown by production status\n- Urgency breakdown (overdue, due today, etc.)\n- Average days metrics\n',
  inputSchema: {
    type: 'object',
    properties: {
      facility_id: {
        type: 'integer',
        description: 'Optional Facility ID to filter by specific production facility',
      },
      user_id: {
        type: 'integer',
        description: 'Optional User ID to analyze (requires admin permissions for other users)',
      },
    },
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.analytics.retrieveProductionSummary(body));
};

export default { metadata, tool, handler };
