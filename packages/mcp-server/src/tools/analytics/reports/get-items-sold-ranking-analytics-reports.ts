// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dimona-usa-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import DimonaUsaAPI from 'dimona-usa-api';

export const metadata: Metadata = {
  resource: 'analytics.reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/analytics/reports/items-sold-ranking',
};

export const tool: Tool = {
  name: 'get_items_sold_ranking_analytics_reports',
  description:
    '## 📊 Items Sold Ranking Report\n\nGet ranking of items by quantity sold within a date range.\n\n### 📈 Returns\n- SKU reference and product details\n- Total quantity sold\n- Number of unique orders\n- Ranking by quantity\n- Optional order summary statistics\n\n### 🔍 Filters\n- Filter by facility\n- Limit number of results\n- Include detailed order summary\n\n### 💡 Use Cases\n- Identify best-selling products\n- Plan inventory based on sales volume\n- Analyze product performance\n',
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
      include_order_details: {
        type: 'boolean',
        description: 'Include order summary statistics',
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of items to return',
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
  return asTextContentResult(await client.analytics.reports.getItemsSoldRanking(body));
};

export default { metadata, tool, handler };
