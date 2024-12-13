const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: true,
    experimentalStudio: true,
    baseUrl: 'http://localhost:3000', // Replace with your application's base URL if needed
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // Specifies the test file pattern
    supportFile: 'cypress/support/e2e.js', // Path to the support file
  },
});
