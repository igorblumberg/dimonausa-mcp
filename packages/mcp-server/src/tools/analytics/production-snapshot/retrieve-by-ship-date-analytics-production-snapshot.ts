// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'analytics.production_snapshot',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/analytics/production-snapshot/by-ship-date',
};

export const tool: Tool = {
  name: 'retrieve_by_ship_date_analytics_production_snapshot',
  description:
    '## 📦 Production Snapshot by Ship Date\n\nCurrent production status grouped by ship dates.\n\n### 📈 Returns\n- Items grouped by ship date\n- Urgency categories (OVERDUE, DUE TODAY, DUE TOMORROW, etc.)\n- Item counts by production status\n- Average days since creation\n\n### ⚠️ Notes\n- Only includes active production orders\n- Orders must have a ship_by date set\n',
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'integer',
        description: 'Optional User ID to analyze (requires admin permissions for other users)',
      },
    },
  },
};

export const handler = async (client: DimonaUsaAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.analytics.productionSnapshot.retrieveByShipDate(body));
};

export default { metadata, tool, handler };
