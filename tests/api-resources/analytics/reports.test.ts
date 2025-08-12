// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DimonaUsaAPI from 'dimona-usa-api';

const client = new DimonaUsaAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reports', () => {
  // Prism tests are disabled
  test.skip('createItemStatusReport', async () => {
    const responsePromise = client.analytics.reports.createItemStatusReport({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getItemsSoldRanking: only required params', async () => {
    const responsePromise = client.analytics.reports.getItemsSoldRanking({
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

  // Prism tests are disabled
  test.skip('getItemsSoldRanking: required and optional params', async () => {
    const response = await client.analytics.reports.getItemsSoldRanking({
      end_date: '2019-12-27',
      start_date: '2019-12-27',
      facility_id: 0,
      include_order_details: true,
      limit: 1,
      user_id: 0,
    });
  });
});
