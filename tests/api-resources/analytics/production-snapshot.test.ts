// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DimonaUsaAPI from 'dimona-usa-api';

const client = new DimonaUsaAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource productionSnapshot', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveByCreationDate', async () => {
    const responsePromise = client.analytics.productionSnapshot.retrieveByCreationDate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByCreationDate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.analytics.productionSnapshot.retrieveByCreationDate(
        { facility_id: 0, user_id: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DimonaUsaAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByShipDate', async () => {
    const responsePromise = client.analytics.productionSnapshot.retrieveByShipDate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByShipDate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.analytics.productionSnapshot.retrieveByShipDate(
        { facility_id: 0, user_id: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DimonaUsaAPI.NotFoundError);
  });
});
