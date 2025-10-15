// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DimonaUsaAPI from 'dimona-usa-api';

const client = new DimonaUsaAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v2021.orders.create({
      id: 'orderReference1234',
      address_to: {
        address1: '1983 Tigertail Blvd',
        city: 'Dania Beach',
        country: 'US',
        first_name: 'John',
        last_name: 'Doe',
        region: 'FL',
        zip: '33004',
      },
      items: [{ id: 'gB0NV05e', preview_files: {}, print_files: {}, quantity: 1, sku: 'BLC-3001-BLACK-L' }],
      shipping: {},
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
  test.skip('create: required and optional params', async () => {
    const response = await client.v2021.orders.create({
      id: 'orderReference1234',
      address_to: {
        address1: '1983 Tigertail Blvd',
        city: 'Dania Beach',
        country: 'US',
        first_name: 'John',
        last_name: 'Doe',
        region: 'FL',
        zip: '33004',
        address2: '',
        email: 'dev@stainless.com',
        phone: 'phone',
      },
      items: [
        {
          id: 'gB0NV05e',
          preview_files: { back: 'https://example.com', front: 'https://example.com' },
          print_files: { back: 'https://example.com', front: 'https://example.com' },
          quantity: 1,
          sku: 'BLC-3001-BLACK-L',
        },
      ],
      shipping: { carrier: 'USPS', priority: 'Standard' },
      address_from: {
        address1: 'address1',
        address2: 'address2',
        city: 'city',
        company: 'company',
        country: 'country',
        region: 'region',
        zip: 'zip',
      },
      package_inserts: ['https://example.com'],
      packing_slip: 'https://example.com',
      reprint: true,
      sample: true,
      xqc: true,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v2021.orders.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.v2021.orders.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveEvents', async () => {
    const responsePromise = client.v2021.orders.retrieveEvents('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
