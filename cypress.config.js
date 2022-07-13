const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:false,
  e2e: {
    projectId: "zgeq7h",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    viewportWidth:1440,
    viewportHeight:900,
    baseUrl: 'https://buger-eats-qa.vercel.app'
  }
});
