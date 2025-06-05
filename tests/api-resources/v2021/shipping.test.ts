// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DimonaUsaAPI from 'dimona-usa-api';

const client = new DimonaUsaAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource shipping', () => {
  // skipped: tests are disabled for the time being
  test.skip('calculateRates: only required params', async () => {
    const responsePromise = client.v2021.shipping.calculateRates({
      items: [{ quantity: 2, sku: 'GLD-5000-BLACK-S' }],
      recipient: {
        address1: '875 Cambridge Drive',
        city: 'Elk Grove Village',
        country_code: 'US',
        state_code: 'IL',
        zip: '60007',
      },
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
  test.skip('calculateRates: required and optional params', async () => {
    const response = await client.v2021.shipping.calculateRates({
      items: [{ quantity: 2, sku: 'GLD-5000-BLACK-S' }],
      recipient: {
        address1: '875 Cambridge Drive',
        city: 'Elk Grove Village',
        country_code: 'US',
        state_code: 'IL',
        zip: '60007',
        phone: '1231231234',
      },
    });
  });
});
