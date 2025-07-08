// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DimonaUsaAPI from 'dimona-usa-api';

const client = new DimonaUsaAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analytics', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveDailyOperations: only required params', async () => {
    const responsePromise = client.analytics.retrieveDailyOperations({
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
  test.skip('retrieveDailyOperations: required and optional params', async () => {
    const response = await client.analytics.retrieveDailyOperations({
      end_date: '2019-12-27',
      start_date: '2019-12-27',
      user_id: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveProductionSummary', async () => {
    const responsePromise = client.analytics.retrieveProductionSummary();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveProductionSummary: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.analytics.retrieveProductionSummary({ user_id: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DimonaUsaAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSKUImpactAnalysis: only required params', async () => {
    const responsePromise = client.analytics.retrieveSKUImpactAnalysis({
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
  test.skip('retrieveSKUImpactAnalysis: required and optional params', async () => {
    const response = await client.analytics.retrieveSKUImpactAnalysis({
      end_date: '2019-12-27',
      start_date: '2019-12-27',
      limit: 1,
      min_sku_volume: 1,
      user_id: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveWeeklySummary: only required params', async () => {
    const responsePromise = client.analytics.retrieveWeeklySummary({
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
  test.skip('retrieveWeeklySummary: required and optional params', async () => {
    const response = await client.analytics.retrieveWeeklySummary({
      end_date: '2019-12-27',
      start_date: '2019-12-27',
      user_id: 0,
    });
  });
});
