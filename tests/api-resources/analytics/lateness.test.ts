// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DimonaUsaAPI from 'dimona-usa-api';

const client = new DimonaUsaAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lateness', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveExecutiveSummary: only required params', async () => {
    const responsePromise = client.analytics.lateness.retrieveExecutiveSummary({
      end_date: '2019-12-27',
      start_date: '2019-12-27',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveExecutiveSummary: required and optional params', async () => {
    const response = await client.analytics.lateness.retrieveExecutiveSummary({
      end_date: '2019-12-27',
      start_date: '2019-12-27',
      min_sku_volume: 1,
      order_ids: 'order_ids',
      order_references: 'order_references',
      order_uuids: 'order_uuids',
      user_id: 0,
    });
  });
});
