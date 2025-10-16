# Changelog

## 1.4.0 (2025-10-16)

Full Changelog: [v1.3.0...v1.4.0](https://github.com/igorblumberg/dimonausa-mcp/compare/v1.3.0...v1.4.0)

### Features

* **api:** manual updates ([d8abcb9](https://github.com/igorblumberg/dimonausa-mcp/commit/d8abcb9ec98e35968b5db30dfa28313a306e223b))

## 1.3.0 (2025-10-15)

Full Changelog: [v1.2.0...v1.3.0](https://github.com/igorblumberg/dimonausa-mcp/compare/v1.2.0...v1.3.0)

### Features

* **api:** manual updates ([c7822d6](https://github.com/igorblumberg/dimonausa-mcp/commit/c7822d6f8c7bcfa6905f06308dc633fc438ae41e))
* **api:** manual updates ([5fa5c1c](https://github.com/igorblumberg/dimonausa-mcp/commit/5fa5c1c4bde89764d9b37c7974ecb1d98c8442f4))
* **api:** manual updates ([97cbb76](https://github.com/igorblumberg/dimonausa-mcp/commit/97cbb7649665d311bddf37cc81fce403d0211091))
* **mcp:** add code execution tool ([55e431d](https://github.com/igorblumberg/dimonausa-mcp/commit/55e431da67f72501d0888e931bbc9b5f1d3e86e4))
* **mcp:** add logging when environment variable is set ([c8b0812](https://github.com/igorblumberg/dimonausa-mcp/commit/c8b08123abf4002eecc1e4e3ab85b821485c884b))
* **mcp:** add option to infer mcp client ([2ef5c84](https://github.com/igorblumberg/dimonausa-mcp/commit/2ef5c8452f8ad47495262bc428611caa592e19c3))
* **mcp:** add unix socket option for remote MCP ([d4b6dbf](https://github.com/igorblumberg/dimonausa-mcp/commit/d4b6dbf7dfa9f844f936fd042e03bdbfa132804e))
* **mcp:** allow setting logging level ([459f7b8](https://github.com/igorblumberg/dimonausa-mcp/commit/459f7b80ee29847ea2b00f55100b8f242886a29a))
* **mcp:** expose client options in `streamableHTTPApp` ([d2bc835](https://github.com/igorblumberg/dimonausa-mcp/commit/d2bc835b7c27ecc3f18ebdfd9317feb017dfbfaf))
* **mcp:** parse query string as mcp client options in mcp server ([a37d2fb](https://github.com/igorblumberg/dimonausa-mcp/commit/a37d2fb3fac1215ee479e5a9338707272cd3c595))
* **mcp:** remote server with passthru auth ([1e1bfbf](https://github.com/igorblumberg/dimonausa-mcp/commit/1e1bfbf6719c0afee51d069058ef0f92c39affef))
* **mcp:** support filtering tool results by a jq expression ([5c4274e](https://github.com/igorblumberg/dimonausa-mcp/commit/5c4274ea309de3a1eee9d5c2bb3d8ca649e2e5fb))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([049e01b](https://github.com/igorblumberg/dimonausa-mcp/commit/049e01b61f8a4af93303b0951e69bfe08e4d34e4))
* **mcp:** fix bug in header handling ([88cf18e](https://github.com/igorblumberg/dimonausa-mcp/commit/88cf18ed38a5547a6905f8d55bdaf2f233f5ae9a))
* **mcp:** fix query options parsing ([d2acf96](https://github.com/igorblumberg/dimonausa-mcp/commit/d2acf96721ddf2059cdb78151e1b98dc29447195))
* **mcp:** include required section for top-level properties and support naming transformations ([2dd5c25](https://github.com/igorblumberg/dimonausa-mcp/commit/2dd5c251239ddcd01098420ba83cd3713c2cd58f))
* **mcp:** relax input type for asTextContextResult ([3638473](https://github.com/igorblumberg/dimonausa-mcp/commit/3638473916680446c199cae81b1649cd4b6fdf51))
* **mcp:** reverse validJson capability option and limit scope ([78e0256](https://github.com/igorblumberg/dimonausa-mcp/commit/78e0256790436a907132259313e01cb756090e4f))
* **mcp:** support jq filtering on cloudflare workers ([2ee1e2a](https://github.com/igorblumberg/dimonausa-mcp/commit/2ee1e2a756188fd5ecb032a88f62ee1d577c2ecf))


### Chores

* add package to package.json ([251763c](https://github.com/igorblumberg/dimonausa-mcp/commit/251763c1f5975876625a8dc587fa1253e1ab6d43))
* ci build action ([1527639](https://github.com/igorblumberg/dimonausa-mcp/commit/152763990678a303a78d1a126ce283b2aae9f429))
* **client:** qualify global Blob ([36eafc9](https://github.com/igorblumberg/dimonausa-mcp/commit/36eafc93b99b656f07d5f85ef09d6f99189fda18))
* **deps:** update dependency @types/node to v20.17.58 ([889a0a0](https://github.com/igorblumberg/dimonausa-mcp/commit/889a0a02ec7a0b2c9aae94bdbcd992e5859541ee))
* **internal:** codegen related update ([8c9b29e](https://github.com/igorblumberg/dimonausa-mcp/commit/8c9b29e7cbefe9ae840b1f9dfb30bfdd5bebfbca))
* **internal:** codegen related update ([2ad18b5](https://github.com/igorblumberg/dimonausa-mcp/commit/2ad18b5710afc9b160d5aa25eb3505e9e9527e0d))
* **internal:** codegen related update ([effb1a3](https://github.com/igorblumberg/dimonausa-mcp/commit/effb1a32de97be68257b2b8d25aeb0caa93265c3))
* **internal:** codegen related update ([933086c](https://github.com/igorblumberg/dimonausa-mcp/commit/933086c4c52e135c5ff56bf96e15282dcb65cf32))
* **internal:** codegen related update ([833c0da](https://github.com/igorblumberg/dimonausa-mcp/commit/833c0da3e4a35180ca03319188e397a14b5b4951))
* **internal:** codegen related update ([3689842](https://github.com/igorblumberg/dimonausa-mcp/commit/3689842c22a76d9a752cc4ef7cd039cbc8ea4035))
* **internal:** formatting change ([c569866](https://github.com/igorblumberg/dimonausa-mcp/commit/c569866782e73a2f438dba9f48fbee3a6e49847d))
* **internal:** make mcp-server publishing public by defaut ([c8297fa](https://github.com/igorblumberg/dimonausa-mcp/commit/c8297fabefbc12d89443240e4136b3166f177a41))
* **internal:** move publish config ([41c825d](https://github.com/igorblumberg/dimonausa-mcp/commit/41c825d2cfa35263dc955bf75508a3dd043e673e))
* **internal:** refactor array check ([7ed170b](https://github.com/igorblumberg/dimonausa-mcp/commit/7ed170bb766dd1822920fc2f10b2c359e44becf0))
* **internal:** remove redundant imports config ([cf5327d](https://github.com/igorblumberg/dimonausa-mcp/commit/cf5327d6a8e7b7e7f1010bfefaeed7af8f1308bd))
* **internal:** update comment in script ([96d0254](https://github.com/igorblumberg/dimonausa-mcp/commit/96d0254affb44372aa09d0c259fe80e7abc90aed))
* **internal:** update global Error reference ([678edd5](https://github.com/igorblumberg/dimonausa-mcp/commit/678edd51d8585d000e474390b8c9d70594e8bb0d))
* make some internal functions async ([1fb74b1](https://github.com/igorblumberg/dimonausa-mcp/commit/1fb74b1c6f834f2885b47378cf914011ad6ccc47))
* **mcp:** add cors to oauth metadata route ([a5672ba](https://github.com/igorblumberg/dimonausa-mcp/commit/a5672ba961e55066182970e907f3631ae159d99e))
* **mcp:** document remote server in README.md ([9945852](https://github.com/igorblumberg/dimonausa-mcp/commit/9945852c9f45a4c4a4096ca0d6afe9909d31f500))
* **mcp:** formatting ([cc9dc44](https://github.com/igorblumberg/dimonausa-mcp/commit/cc9dc44814c59b2eb616379d9e5da9a89789ec92))
* **mcp:** minor cleanup of types and package.json ([b699988](https://github.com/igorblumberg/dimonausa-mcp/commit/b6999889867c6160808792224291df6d73fe6d5a))
* **mcp:** refactor streamable http transport ([6c1a11b](https://github.com/igorblumberg/dimonausa-mcp/commit/6c1a11b6d5e127bb1883969b585b7b4f2a07eb12))
* **mcp:** rework imports in tools ([318fd07](https://github.com/igorblumberg/dimonausa-mcp/commit/318fd07fc34e21cc4205dea4cfbd65234bfe0c87))
* **mcp:** update package.json ([43a5bab](https://github.com/igorblumberg/dimonausa-mcp/commit/43a5bab999d6e789ba054711cbddbf197741a4c9))
* **mcp:** update README ([cbb48da](https://github.com/igorblumberg/dimonausa-mcp/commit/cbb48da3755f2286d2e535689aaf7582500225ad))
* **mcp:** update types ([c1e1aa7](https://github.com/igorblumberg/dimonausa-mcp/commit/c1e1aa7b546d0e641d3781b720c3ae6c14964624))
* **ts:** reorder package.json imports ([e002424](https://github.com/igorblumberg/dimonausa-mcp/commit/e00242474b3d5d73cbe07d88f0d2d033dd1c2bd4))
* update @stainless-api/prism-cli to v5.15.0 ([20bcdec](https://github.com/igorblumberg/dimonausa-mcp/commit/20bcdec41e0594717ce0a98692ccd43d9b6f4539))
* update CI script ([dcf8bac](https://github.com/igorblumberg/dimonausa-mcp/commit/dcf8bac3711e92536036de03679f69cc77597379))

## 1.2.0 (2025-07-09)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/igorblumberg/dimonausa-mcp/compare/v1.1.0...v1.2.0)

### Features

* **api:** update via SDK Studio ([5bdea5c](https://github.com/igorblumberg/dimonausa-mcp/commit/5bdea5c67fd10c213003e1bb94b3cf88dbcc138f))
* **api:** update via SDK Studio ([96ff3a5](https://github.com/igorblumberg/dimonausa-mcp/commit/96ff3a564f20d4a99ea9ab9a904ecd4522c0af10))

## 1.1.0 (2025-07-08)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/igorblumberg/dimonausa-mcp/compare/v1.0.0...v1.1.0)

### Features

* **api:** update via SDK Studio ([035d328](https://github.com/igorblumberg/dimonausa-mcp/commit/035d328b336206b1cebf57ca6964e8b502c846ea))
* **client:** add support for endpoint-specific base URLs ([4b2f04f](https://github.com/igorblumberg/dimonausa-mcp/commit/4b2f04f475584c3dd659ab13844ab47875d00293))
* **mcp:** fallback for void-typed methods ([2431817](https://github.com/igorblumberg/dimonausa-mcp/commit/2431817c5ccb72ee92a01e00cc6674a9ac8ecb01))
* **mcp:** set X-Stainless-MCP header ([71a8efa](https://github.com/igorblumberg/dimonausa-mcp/commit/71a8efabda64502056ab289aa658717793a2bfc0))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([56126c5](https://github.com/igorblumberg/dimonausa-mcp/commit/56126c519b806930435629a6da0d332a412a3b6f))
* **client:** explicitly copy fetch in withOptions ([2d93f6c](https://github.com/igorblumberg/dimonausa-mcp/commit/2d93f6c64c7d290ae41a065300b9c04d20c38cd7))
* **client:** get fetchOptions type more reliably ([a54f916](https://github.com/igorblumberg/dimonausa-mcp/commit/a54f9165b8d6fe623182d7ace5e062bb82dfb0c6))
* publish script — handle NPM errors correctly ([e996032](https://github.com/igorblumberg/dimonausa-mcp/commit/e996032cf3802750b4a594528dfbbd507c18d23e))


### Chores

* add docs to RequestOptions type ([0761187](https://github.com/igorblumberg/dimonausa-mcp/commit/0761187bcb4e8f25d5a8405801d198ce85ad9c0a))
* avoid type error in certain environments ([f8c84d9](https://github.com/igorblumberg/dimonausa-mcp/commit/f8c84d9b3b9d06cc5523eb17bc7200cba304f4c4))
* **ci:** enable for pull requests ([3e72118](https://github.com/igorblumberg/dimonausa-mcp/commit/3e721182b7ff277e6eb3aadd16bae4ab527d9870))
* **ci:** only run for pushes and fork pull requests ([992b2ac](https://github.com/igorblumberg/dimonausa-mcp/commit/992b2acfd84b8782f825930e78bba33cca93719d))
* **client:** improve path param validation ([9931c62](https://github.com/igorblumberg/dimonausa-mcp/commit/9931c62eea2455d17d0af16c53dc729f55801048))
* **client:** refactor imports ([995a474](https://github.com/igorblumberg/dimonausa-mcp/commit/995a4746342b30090a86758aac6ee9bbc4de8392))
* **internal:** add pure annotations, make base APIResource abstract ([20081ae](https://github.com/igorblumberg/dimonausa-mcp/commit/20081ae48178aba630b9bab04435b3abb99dbd1f))
* **mcp:** provides high-level initMcpServer function and exports known clients ([d839e5b](https://github.com/igorblumberg/dimonausa-mcp/commit/d839e5b6e86fc58f9b2fd4eb34926876bf1b9e20))
* **readme:** update badges ([87ee51f](https://github.com/igorblumberg/dimonausa-mcp/commit/87ee51f40b8b27073fdc787b5bf0c9088ac02313))
* **readme:** use better example snippet for undocumented params ([df35067](https://github.com/igorblumberg/dimonausa-mcp/commit/df3506703047d9ff457434a2326f5226b52ffadf))

## 1.0.0 (2025-06-05)

Full Changelog: [v0.0.1-alpha.1...v1.0.0](https://github.com/igorblumberg/dimonausa-mcp/compare/v0.0.1-alpha.1...v1.0.0)

### Chores

* update SDK settings ([e82c076](https://github.com/igorblumberg/dimonausa-mcp/commit/e82c07694a78d062284ba86f1f21e36cd01cfde3))

## 0.0.1-alpha.1 (2025-06-05)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/igorblumberg/dimonausa-mcp/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* configure new SDK language ([398a065](https://github.com/igorblumberg/dimonausa-mcp/commit/398a065a64b5a770d9f1ccada654bec5181f1b30))
* update SDK settings ([2c4836b](https://github.com/igorblumberg/dimonausa-mcp/commit/2c4836b1a5c23320268757443cb2412ca7c80aa5))
