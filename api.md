# V2021

Types:

- <code><a href="./src/resources/v2021/v2021.ts">V2021GetInventoryResponse</a></code>

Methods:

- <code title="post /api/v2021/inventory">client.v2021.<a href="./src/resources/v2021/v2021.ts">getInventory</a>({ ...params }) -> V2021GetInventoryResponse</code>

## Stock

Types:

- <code><a href="./src/resources/v2021/stock.ts">StockItem</a></code>
- <code><a href="./src/resources/v2021/stock.ts">StockListResponse</a></code>

Methods:

- <code title="get /api/v2021/stock/{sku-reference}">client.v2021.stock.<a href="./src/resources/v2021/stock.ts">retrieve</a>(skuReference) -> StockItem</code>
- <code title="get /api/v2021/stock">client.v2021.stock.<a href="./src/resources/v2021/stock.ts">list</a>({ ...params }) -> StockListResponse</code>

## Shipping

Types:

- <code><a href="./src/resources/v2021/shipping.ts">ShippingCalculateRatesResponse</a></code>

Methods:

- <code title="post /api/v2021/shipping/rates">client.v2021.shipping.<a href="./src/resources/v2021/shipping.ts">calculateRates</a>({ ...params }) -> ShippingCalculateRatesResponse</code>

## Orders

Types:

- <code><a href="./src/resources/v2021/orders.ts">Address</a></code>
- <code><a href="./src/resources/v2021/orders.ts">AddressFrom</a></code>
- <code><a href="./src/resources/v2021/orders.ts">Order</a></code>
- <code><a href="./src/resources/v2021/orders.ts">OrderItem</a></code>
- <code><a href="./src/resources/v2021/orders.ts">ShippingInfo</a></code>
- <code><a href="./src/resources/v2021/orders.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/v2021/orders.ts">OrderRetrieveEventsResponse</a></code>

Methods:

- <code title="post /api/v2021/orders">client.v2021.orders.<a href="./src/resources/v2021/orders.ts">create</a>({ ...params }) -> Order</code>
- <code title="get /api/v2021/orders/{order-uuid}">client.v2021.orders.<a href="./src/resources/v2021/orders.ts">retrieve</a>(orderUuid) -> OrderRetrieveResponse</code>
- <code title="post /api/v2021/order/{order-uuid}/cancel">client.v2021.orders.<a href="./src/resources/v2021/orders.ts">cancel</a>(orderUuid, { ...params }) -> void</code>
- <code title="get /api/v2021/order/{order-uuid}/events">client.v2021.orders.<a href="./src/resources/v2021/orders.ts">retrieveEvents</a>(orderUuid) -> OrderRetrieveEventsResponse</code>

# V3

Methods:

- <code title="post /api/v3/orders">client.v3.<a href="./src/resources/v3.ts">submitOrder</a>({ ...params }) -> Order</code>

# Analytics

Types:

- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsMetadata</a></code>
- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsRetrieveDailyOperationsResponse</a></code>
- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsRetrieveProductionSummaryResponse</a></code>
- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsRetrieveSKUImpactAnalysisResponse</a></code>
- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsRetrieveWeeklySummaryResponse</a></code>

Methods:

- <code title="get /api/analytics/daily-operations">client.analytics.<a href="./src/resources/analytics/analytics.ts">retrieveDailyOperations</a>({ ...params }) -> AnalyticsRetrieveDailyOperationsResponse</code>
- <code title="get /api/analytics/production-summary">client.analytics.<a href="./src/resources/analytics/analytics.ts">retrieveProductionSummary</a>({ ...params }) -> AnalyticsRetrieveProductionSummaryResponse</code>
- <code title="get /api/analytics/sku-impact-analysis">client.analytics.<a href="./src/resources/analytics/analytics.ts">retrieveSKUImpactAnalysis</a>({ ...params }) -> AnalyticsRetrieveSKUImpactAnalysisResponse</code>
- <code title="get /api/analytics/weekly-summary">client.analytics.<a href="./src/resources/analytics/analytics.ts">retrieveWeeklySummary</a>({ ...params }) -> AnalyticsRetrieveWeeklySummaryResponse</code>

## ProductionSnapshot

Types:

- <code><a href="./src/resources/analytics/production-snapshot.ts">ProductionSnapshotRetrieveByCreationDateResponse</a></code>
- <code><a href="./src/resources/analytics/production-snapshot.ts">ProductionSnapshotRetrieveByShipDateResponse</a></code>

Methods:

- <code title="get /api/analytics/production-snapshot/by-creation-date">client.analytics.productionSnapshot.<a href="./src/resources/analytics/production-snapshot.ts">retrieveByCreationDate</a>({ ...params }) -> ProductionSnapshotRetrieveByCreationDateResponse</code>
- <code title="get /api/analytics/production-snapshot/by-ship-date">client.analytics.productionSnapshot.<a href="./src/resources/analytics/production-snapshot.ts">retrieveByShipDate</a>({ ...params }) -> ProductionSnapshotRetrieveByShipDateResponse</code>

## Lateness

Types:

- <code><a href="./src/resources/analytics/lateness.ts">LatenessRetrieveExecutiveSummaryResponse</a></code>

Methods:

- <code title="get /api/analytics/lateness/executive-summary">client.analytics.lateness.<a href="./src/resources/analytics/lateness.ts">retrieveExecutiveSummary</a>({ ...params }) -> LatenessRetrieveExecutiveSummaryResponse</code>

## Reports

Types:

- <code><a href="./src/resources/analytics/reports.ts">ReportCreateItemStatusReportResponse</a></code>
- <code><a href="./src/resources/analytics/reports.ts">ReportGetItemsSoldRankingResponse</a></code>

Methods:

- <code title="post /api/analytics/reports/item-status">client.analytics.reports.<a href="./src/resources/analytics/reports.ts">createItemStatusReport</a>({ ...params }) -> ReportCreateItemStatusReportResponse</code>
- <code title="get /api/analytics/reports/items-sold-ranking">client.analytics.reports.<a href="./src/resources/analytics/reports.ts">getItemsSoldRanking</a>({ ...params }) -> ReportGetItemsSoldRankingResponse</code>

# Analysis

Types:

- <code><a href="./src/resources/analysis.ts">AnalysisAnalyzeResponse</a></code>
- <code><a href="./src/resources/analysis.ts">AnalysisListTypesResponse</a></code>

Methods:

- <code title="post /api/analysis">client.analysis.<a href="./src/resources/analysis.ts">analyze</a>({ ...params }) -> AnalysisAnalyzeResponse</code>
- <code title="get /api/analysis/types">client.analysis.<a href="./src/resources/analysis.ts">listTypes</a>() -> AnalysisListTypesResponse</code>
