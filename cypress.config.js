const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
