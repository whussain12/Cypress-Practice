const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    watchForFileChanges: false,
    experimentalStudio:true
    {
  "baseUrl": "'http://217.76.53.78:8111", // Replace with your app's base URL
  "video": false // Disables video recording for faster CI runs (optional)
}

  },
});
