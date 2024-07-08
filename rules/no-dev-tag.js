module.exports = {
    meta: {
      type: 'problem',
      docs: {
        description: 'disallow <dev> tags',
        category: 'Possible Errors',
        recommended: true,
      },
      messages: {
        noDevTag: 'Unexpected <dev> tag. Did you mean <div>?',
      },
      schema: [],
    },
    create: function (context) {
      console.log("Custom rule 'no-dev-tag' is running");
      return {
        JSXOpeningElement(node) {
          console.log("Checking JSX element:", node.name.name);
          if (node.name.name === 'dev') {
            context.report({
              node,
              messageId: 'noDevTag',
            });
          }
        },
      };
    },
  };
  