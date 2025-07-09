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
  httpPath: '/api/analytics/production-snapshot/by-creation-date',
};

export const tool: Tool = {
  name: 'retrieve_by_creation_date_analytics_production_snapshot',
  description:
    '## 📦 Production Snapshot by Creation Date\n\nCurrent production status grouped by order creation dates.\n\n### 📈 Returns\n- Items grouped by creation date\n- Age categories (TODAY/YESTERDAY, THIS WEEK, THIS MONTH, etc.)\n- Item counts by production status\n- Days since creation and until ship date\n',
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
  return asTextContentResult(await client.analytics.productionSnapshot.retrieveByCreationDate(body));
};

export default { metadata, tool, handler };
