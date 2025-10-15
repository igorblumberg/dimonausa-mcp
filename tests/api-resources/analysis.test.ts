// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DimonaUsaAPI from 'dimona-usa-api';

const client = new DimonaUsaAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analysis', () => {
  // Prism tests are disabled
  test.skip('analyze: only required params', async () => {
    const responsePromise = client.analysis.analyze({
      id: '267ada05-1ff3-4c49-a8cd-21ac2bb00c8d',
      type: 'azl',
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
  test.skip('analyze: required and optional params', async () => {
    const response = await client.analysis.analyze({
      id: '267ada05-1ff3-4c49-a8cd-21ac2bb00c8d',
      type: 'azl',
      include_raw_data: true,
      raw_only: true,
    });
  });

  // Prism tests are disabled
  test.skip('listTypes', async () => {
    const responsePromise = client.analysis.listTypes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
