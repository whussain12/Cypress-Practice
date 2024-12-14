const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    experimentalStudio: true,
    watchForFileChanges: false,
    viewportWidth: 1366,
    viewportHeight: 768,
  },
});