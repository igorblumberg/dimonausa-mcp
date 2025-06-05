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
