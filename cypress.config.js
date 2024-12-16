const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  
  env: {
    test_url: "http://217.76.53.78:8111/contact-us",
    prod_url: "https://www.trademarkbridge.com/contact-us"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    defaultCommandTimeout: 3000,
    experimentalStudio: true,
    watchForFileChanges: false,
    viewportWidth: 1366,
    viewportHeight: 768,
  },
});