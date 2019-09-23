"use strict";
const Constants = require("../src/constants");

const rule = require("../src/import-equityzen-module"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});

const ruleTester = new RuleTester();
ruleTester.run("import-equityzen-module", rule, {
  valid: Constants.modules.map(
    mod =>
      `import Something${mod.substring(0, 1).toUpperCase()}${mod.substring(
        1
      )} from '@equityzen/${mod}/something'`
  ),
  invalid: Constants.modules.map(mod => ({
    code: `import Something${mod.substring(0, 1).toUpperCase()}${mod.substring(
      1
    )} from '../${mod}/something'`,
    errors: [
      {
        message: `Use @equityzen/${mod}/something instead of ../${mod}/something`,
        type: "ImportDeclaration"
      }
    ]
  }))
});
