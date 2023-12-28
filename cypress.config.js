const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f79nw5",
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/",
    retries: 0,
  },
});
