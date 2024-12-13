const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    watchForFileChanges: false,  //again 
    experimentalStudio:true, 
  baseUrl: "https://www.trademarkbridge.com", // Replace with your app's base URL ,remove comma again
  video: false, // Disables video recording for faster CI runs (optional) another comment added
  
  },
});
module.exports = defineConfig({
  projectId: "v449vv"
})
