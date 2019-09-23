const Constants = require("./constants");

const moduleRegExp = new RegExp(
  `^(\.\.\/)+((${Constants.modules.join("|")})\/.+)`
);

module.exports = {
  meta: {
    fixable: true
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const { source: { value } = {} } = node;
        const match = value.match(moduleRegExp);
        if (match) {
          context.report({
            node,
            message: `Use @equityzen/${match[2]} instead of ${value}`,
            fix(fixer) {
              return fixer.replaceText(node.source, `'@equityzen/${match[2]}'`);
            }
          });
        }
      }
    };
  }
};
