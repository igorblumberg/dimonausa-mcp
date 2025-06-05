// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import get_inventory_v2021 from './v2021/get-inventory-v2021';
import retrieve_v2021_stock from './v2021/stock/retrieve-v2021-stock';
import list_v2021_stock from './v2021/stock/list-v2021-stock';
import calculate_rates_v2021_shipping from './v2021/shipping/calculate-rates-v2021-shipping';
import create_v2021_orders from './v2021/orders/create-v2021-orders';
import retrieve_v2021_orders from './v2021/orders/retrieve-v2021-orders';
import cancel_v2021_orders from './v2021/orders/cancel-v2021-orders';
import retrieve_events_v2021_orders from './v2021/orders/retrieve-events-v2021-orders';
import submit_order_v3 from './v3/submit-order-v3';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(get_inventory_v2021);
addEndpoint(retrieve_v2021_stock);
addEndpoint(list_v2021_stock);
addEndpoint(calculate_rates_v2021_shipping);
addEndpoint(create_v2021_orders);
addEndpoint(retrieve_v2021_orders);
addEndpoint(cancel_v2021_orders);
addEndpoint(retrieve_events_v2021_orders);
addEndpoint(submit_order_v3);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
