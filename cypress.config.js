const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const exec = require('child_process').execSync;


module.exports = defineConfig({
  // Whether Cypress will watch and restart tests on test file changes and default value is true
  watchForFileChanges: true,
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  // Time, in milliseconds, to wait for a system command to finish executing during a cy.exec() command.
  execTimeout: 60000,
  // Time, in milliseconds, to wait for a task to finish executing during a cy.task() command.
  taskTimeout: 60000,
  // Time, in milliseconds, to wait for a request to go out in a cy.wait() command.
  requestTimeout:5000,
  responseTimeout: 30000,
  viewportHeight:720,
  viewportWidth:1280,
  retries: {
    runMode: 1,
    openMode: 1
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    "reporterEnabled": "cypress-mochawesome-reporter, mocha-junit-reporter",
    "cypressMochawesomeReporterReporterOptions":{
      "reportDir": "cypress/reports",
      "charts": true,
      "reportPageTitle": "My Test Suite",
      "embeddedScreenshots": true,
      "inlineAssets": true,
      // Save screenshots of all test attempts, set to false to save only the last attempt
      "saveAllAttempts": false
    },
    "mochaJunitReporterReporterOptions": {
      "mochaFile": "cypress/reports/junit/results-[hash].xml"
    }
  },
  e2e: {
    // change the baseUrl from command line using this command - cypress run --config baseUrl=https://example.com/my-app-staging
    //baseUrl: "https://www.founderandlightning.com/",

    // If we have custom folder name instead of e2e, we can use specPattern key to let cypress know that - "cypress/<custom-folder-name>/**/*.cy.{js,jsx,ts,tsx}"
    // To identify Cucumber BDD Files
    // for cucumber feature files, change e2e folder name to integration folder name
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    setupNodeEvents(on, config) {
      // implement node event listeners here for HTML and JUnit Report Configuration
      //Refer : https://dzone.com/articles/7-easy-steps-to-generate-xml-and-html-reports-in-cypress
      // https://www.npmjs.com/package/cypress-mochawesome-reporter

      on('before:run', async (details)=>{
        console.log('override before:run');
        await beforeRunHook(details);
        //If you are using other than Windows remove below two lines
        //Code to remove screenshot and reports directory for Windows
        await exec("IF EXIST cypress\\screenshots rmdir /Q /S cypress\\screenshots")
        await exec("IF EXIST cypress\\reports rmdir /Q /S cypress\\reports")

        // if (Cypress.platform in ["win32","win64"]) {
        //   await exec("IF EXIST cypress\\screenshots rmdir /Q /S cypress\\screenshots")
        //   await exec("IF EXIST cypress\\reports rmdir /Q /S cypress\\reports")
        // }

      });

      on('after:run', async () => {
        console.log('override after:run');
        //if you are using other than Windows remove below line starts having await exec
        //Code to created Merged JUnit XML file
        
        await exec("npx jrm ./cypress/reports/junitreport.xml ./cypress/reports/junit/*.xml");

        // if (Cypress.platform in ["win32","win64"]) {
        //   await exec("npx jrm ./cypress/reports/junitreport.xml ./cypress/reports/junit/*.xml");
        // }
        await afterRunHook();
      });

      on('task', {
        log(message){
          console.log(message)
          return null
        }
      })

    },
    env: {
      login_url: '/contact',
    }
  },
});
