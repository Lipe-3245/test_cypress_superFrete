const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const {allureCypress} = require("allure-cypress/reporter");


module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'https://web.superfrete.com/#/calcular-correios',
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      allureCypress(on, config);
      // implement node event listeners here
    },
  },
});


