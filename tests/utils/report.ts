const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName: "Playwright Cucumber Report",
  pageTitl: "Orange HRM - Demo",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "110",
    },
    device: "My Device name",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Orange HRM project" },
      { label: "Release", value: "10.2.3" },
      { label: "Cycle", value: "10" },
    ],
  },
});