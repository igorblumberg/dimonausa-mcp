# Dimona Usa API TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:igorblumberg/dimonausa-mcp.git
cd dimonausa-mcp
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export DIMONA_USA_API_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y dimona-usa-api-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "dimona_usa_api_api": {
      "command": "node",
      "args": ["/path/to/local/dimonausa-mcp/packages/mcp-server", "--client=claude", "--tools=all"],
      "env": {
        "DIMONA_USA_API_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "dimona-usa-api-mcp/server";

// import a specific tool
import getInventoryV2021 from "dimona-usa-api-mcp/tools/v2021/get-inventory-v2021";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [getInventoryV2021, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `v2021`:

- `get_inventory_v2021` (`write`): ## 📥 Get Inventory

  Bulk-check stock availability for **multiple SKUs at once**.

  Send a list of SKU references in the body to receive their current inventory and status.

### Resource `v2021.stock`:

- `retrieve_v2021_stock` (`read`): ## 📦 Get Stock By Reference

  Returns **real-time inventory** and product details for a single SKU.

- `list_v2021_stock` (`read`): ## 🧾 Get Stocks

  Retrieve a **paginated list** of available SKUs, including stock levels, product specs, and print capabilities.

  Use this endpoint to **browse** or **sync** your product catalog page by page.

### Resource `v2021.shipping`:

- `calculate_rates_v2021_shipping` (`write`): ## 🚚 Calculate Shipping Rates

  Get real-time shipping rate estimates for a given destination and list of items.

  Use this endpoint to display available carriers, service levels, prices, and delivery estimates before placing an order.

  ### 📦 What It Considers

  - Destination address (ZIP, country, region)
  - Package weight and quantity (derived from the SKUs)
  - Shipping carrier availability by region
  - Priority level: Standard, Priority, Express

  ### ⚠️ Tips

  - Use the returned `rate_id` when submitting the actual order to lock in the rate
  - Refresh rates if the cart or address changes

### Resource `v2021.orders`:

- `create_v2021_orders` (`write`): ## 🧾 Submit a Production Order

  Create a new DTG production order to be printed, packed, and shipped from one of our regional facilities.

  Use this endpoint to send print-ready artwork, shipping details, and item metadata. Orders are automatically validated, assigned to the best facility, and queued for fulfillment.

  ### 🔧 Required Fields

  - `id`: Your unique order reference (used for idempotency)
  - `items`: List of products to print, each with a valid SKU and quantity
  - `print_files`: High-res artwork for each print location (PNG, 300 DPI, transparent)
  - `preview_files`: Customer-facing mockups
  - `address_to`: Shipping details for the end customer
  - `shipping`: Carrier and shipping priority

  ### ⚠️ Best Practices

  1. Check inventory for each SKU before submitting
  2. Use unique order IDs to avoid duplicates
  3. Validate print files (300 DPI, correct format) to avoid quality issues
  4. Include customer contact for delivery updates and return handling

- `retrieve_v2021_orders` (`read`): ## 📦 Retrieve a Production Order

  Get full details of a submitted production order using its `reference_id`.

  This endpoint returns the order's current status, shipping details, item list and tracking info (if shipped).

  ### 📋 Order Status Values

  - `Pending`: Order received
  - `In Production`: Items are currently being printed/manufactured
  - `Shipped`: Order dispatched with tracking
  - `Cancelled`: Order was cancelled

- `cancel_v2021_orders` (`write`): ## ❌ Cancel Production Order

  Cancel an order before it enters production or shipping.

  ### 🕒 When Cancellation Is Allowed

  - ✅ `Pending`: Always cancellable
  - ❌ `In Production`, `Shipped`: Not cancellable via API (contact support)

- `retrieve_events_v2021_orders` (`read`): ## 📜 Retrieve Order Events

  Fetch a detailed timeline of all production-related events for a given order.

  Unlike the main order status (which reflects the order as a whole), this endpoint returns **granular item-level actions**, including printing, packaging, and shipping steps — with timestamps and affected item IDs.

### Resource `v3`:

- `submit_order_v3` (`write`): ## 🗂️ Submit a Production Order – Legacy Payload

  Legacy version of the production order submission endpoint, maintained for backward compatibility with older Brazil-based integrations.

  **⚠️ Deprecation Notice**: This endpoint is deprecated. Please use `/api/v2021/orders` for new integrations.
