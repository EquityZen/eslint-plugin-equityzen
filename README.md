# eslint-plugin-equityzen

EquityZen custom ESLint plugins 

## Rules

### import-equityzen-module

Ensures that equityzen moodules are imported via `@equityzen/<modulename>/...` instead of relative paths.

Valid:
```js
  import SomethingCommon from '@equityzen/common/something'
  import SomethingAdmin from '@equityzen/admin/something'
  import SomethingClient from '@equityzen/client/something'
  import SomethingTest from '@equityzen/test/something'
```

Invalid:
```js
  import SomethingCommon from '../common/something'
  import SomethingAdmin from '../admin/something'
  import SomethingClient from '../client/something'
  import SomethingTest from '../test/something'
```

## Copyright

Copyright &copy; 2019, EquityZen, Inc. All Rights Reserved

