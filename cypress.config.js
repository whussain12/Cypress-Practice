const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  
  env: {
    test_url_trademark_bridge: "http://217.76.53.78:8111/",
    prod_url_trademark_bridge: "https://www.trademarkbridge.com/",
    test_url_trademark_registrars: "http://217.76.53.78:8040/",
    prod_url_trademark_registrars: "http://trademarkregistrars.com"
    
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
    pageLoadTimeout: 10000
    }
  });
  
  

