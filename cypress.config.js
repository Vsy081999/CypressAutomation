const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
    baseUrl : 'https://www.zoho.com/commerce/free-demo.html',
    excludeSpecPattern:['**/cypress/e2e/1-getting-started','**/cypress/e2e/2-getting-started']
  },
});
