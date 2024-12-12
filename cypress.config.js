const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    watchForFileChanges: false,  //again 
    experimentalStudio:true, 
  baseUrl: "http://217.76.53.78:8111", // Replace with your app's base URL ,remove comma again
  video: false // Disables video recording for faster CI runs (optional) another comment added


  },
});
