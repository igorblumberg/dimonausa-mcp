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
  httpPath: '/api/analytics/sku-impact-analysis',
};

export const tool: Tool = {
  name: 'retrieve_sku_impact_analysis_analytics',
  description:
    '## 📊 SKU Impact Analysis\n\nAnalyze which SKUs are causing the most production delays due to stockouts.\n\n### 📈 Returns\n- SKU reference\n- Total items ordered\n- Out of stock items count\n- Stockout rate percentage\n- Sorted by impact (most problematic SKUs first)\n\n### 🔍 Filters\n- Set minimum SKU volume to focus on high-volume items\n- Limit results to top N SKUs\n\n### 💡 Use Cases\n- Identify SKUs needing inventory optimization\n- Focus purchasing on high-impact items\n- Analyze stockout patterns\n',
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
      limit: {
        type: 'integer',
        description: 'Maximum number of SKUs to return',
      },
      min_sku_volume: {
        type: 'integer',
        description: 'Minimum SKU volume to include',
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
  return asTextContentResult(await client.analytics.retrieveSKUImpactAnalysis(body));
};

export default { metadata, tool, handler };
