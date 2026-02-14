// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.v2021.getInventory',
    fullyQualifiedName: 'v2021.getInventory',
    httpMethod: 'post',
    httpPath: '/api/v2021/inventory',
  },
  {
    clientCallName: 'client.v2021.stock.retrieve',
    fullyQualifiedName: 'v2021.stock.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v2021/stock/{sku-reference}',
  },
  {
    clientCallName: 'client.v2021.stock.list',
    fullyQualifiedName: 'v2021.stock.list',
    httpMethod: 'get',
    httpPath: '/api/v2021/stock',
  },
  {
    clientCallName: 'client.v2021.shipping.calculateRates',
    fullyQualifiedName: 'v2021.shipping.calculateRates',
    httpMethod: 'post',
    httpPath: '/api/v2021/shipping/rates',
  },
  {
    clientCallName: 'client.v2021.orders.create',
    fullyQualifiedName: 'v2021.orders.create',
    httpMethod: 'post',
    httpPath: '/api/v2021/orders',
  },
  {
    clientCallName: 'client.v2021.orders.retrieve',
    fullyQualifiedName: 'v2021.orders.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v2021/orders/{order-uuid}',
  },
  {
    clientCallName: 'client.v2021.orders.cancel',
    fullyQualifiedName: 'v2021.orders.cancel',
    httpMethod: 'post',
    httpPath: '/api/v2021/order/{order-uuid}/cancel',
  },
  {
    clientCallName: 'client.v2021.orders.retrieveEvents',
    fullyQualifiedName: 'v2021.orders.retrieveEvents',
    httpMethod: 'get',
    httpPath: '/api/v2021/order/{order-uuid}/events',
  },
  {
    clientCallName: 'client.v3.submitOrder',
    fullyQualifiedName: 'v3.submitOrder',
    httpMethod: 'post',
    httpPath: '/api/v3/orders',
  },
  {
    clientCallName: 'client.analytics.retrieveDailyOperations',
    fullyQualifiedName: 'analytics.retrieveDailyOperations',
    httpMethod: 'get',
    httpPath: '/api/analytics/daily-operations',
  },
  {
    clientCallName: 'client.analytics.retrieveProductionSummary',
    fullyQualifiedName: 'analytics.retrieveProductionSummary',
    httpMethod: 'get',
    httpPath: '/api/analytics/production-summary',
  },
  {
    clientCallName: 'client.analytics.retrieveSKUImpactAnalysis',
    fullyQualifiedName: 'analytics.retrieveSKUImpactAnalysis',
    httpMethod: 'get',
    httpPath: '/api/analytics/sku-impact-analysis',
  },
  {
    clientCallName: 'client.analytics.retrieveWeeklySummary',
    fullyQualifiedName: 'analytics.retrieveWeeklySummary',
    httpMethod: 'get',
    httpPath: '/api/analytics/weekly-summary',
  },
  {
    clientCallName: 'client.analytics.productionSnapshot.retrieveByCreationDate',
    fullyQualifiedName: 'analytics.productionSnapshot.retrieveByCreationDate',
    httpMethod: 'get',
    httpPath: '/api/analytics/production-snapshot/by-creation-date',
  },
  {
    clientCallName: 'client.analytics.productionSnapshot.retrieveByShipDate',
    fullyQualifiedName: 'analytics.productionSnapshot.retrieveByShipDate',
    httpMethod: 'get',
    httpPath: '/api/analytics/production-snapshot/by-ship-date',
  },
  {
    clientCallName: 'client.analytics.lateness.retrieveExecutiveSummary',
    fullyQualifiedName: 'analytics.lateness.retrieveExecutiveSummary',
    httpMethod: 'get',
    httpPath: '/api/analytics/lateness/executive-summary',
  },
  {
    clientCallName: 'client.analytics.reports.createItemStatusReport',
    fullyQualifiedName: 'analytics.reports.createItemStatusReport',
    httpMethod: 'post',
    httpPath: '/api/analytics/reports/item-status',
  },
  {
    clientCallName: 'client.analytics.reports.createOrdersPerCustomer',
    fullyQualifiedName: 'analytics.reports.createOrdersPerCustomer',
    httpMethod: 'post',
    httpPath: '/api/analytics/reports/orders-per-customer',
  },
  {
    clientCallName: 'client.analytics.reports.getItemsSoldRanking',
    fullyQualifiedName: 'analytics.reports.getItemsSoldRanking',
    httpMethod: 'get',
    httpPath: '/api/analytics/reports/items-sold-ranking',
  },
  {
    clientCallName: 'client.analysis.analyze',
    fullyQualifiedName: 'analysis.analyze',
    httpMethod: 'post',
    httpPath: '/api/analysis',
  },
  {
    clientCallName: 'client.analysis.listTypes',
    fullyQualifiedName: 'analysis.listTypes',
    httpMethod: 'get',
    httpPath: '/api/analysis/types',
  },
  {
    clientCallName: 'client.context.retrieve',
    fullyQualifiedName: 'context.retrieve',
    httpMethod: 'get',
    httpPath: '/api/context',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
