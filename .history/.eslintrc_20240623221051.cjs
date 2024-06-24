module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow <dev> tags',
      category: 'Possible Errors',
      recommended: true
    },
    messages: {
      noDevTag: 'Unexpected <dev> tag. Did you mean <div>?'
    },
    schema: []
  },
  create: function (context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.name === 'dev') {
          context.report({
            node,
            messageId: 'noDevTag'
          });
        }
      }
    };
  }
};
