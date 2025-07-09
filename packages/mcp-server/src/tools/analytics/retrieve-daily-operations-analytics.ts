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
  httpPath: '/api/analytics/daily-operations',
};

export const tool: Tool = {
  name: 'retrieve_daily_operations_analytics',
  description:
    "## 📊 Daily Operations Snapshot\n\nTrack orders created, items produced, printed, and shipped by day.\n\n### 📈 Returns\n- Daily breakdown of orders and production items created\n- Items printed and packaged per day\n- Orders shipped per day\n- Production efficiency percentages\n- Cumulative totals over time\n\n### 🔒 Permissions\n- Users can view their own data\n- Admin permission required to view other users' data\n\n### ⏱️ Performance\n- Results cached for 15 minutes\n- `cached_until` timestamp included in response\n",
  inputSchema: {
    type: 'object',
    properties: {
      end_date: {
        type: 'string',
        description: 'End date for analysis (YYYY-MM-DD)',
        format: 'date',
      },
      start_date: {
        type: 'string',
        description: 'Start date for analysis (YYYY-MM-DD)',
        format: 'date',
      },
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
  return asTextContentResult(await client.analytics.retrieveDailyOperations(body));
};

export default { metadata, tool, handler };
