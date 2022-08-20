
## Cypress End to End Automation Framework

    This framework was built with intension anyone who wants to integrate javascript(used)/typescript and cypress framework in their organization it should be easy for them.

## Requirements

    - Any computer: Mac, Windows, Linux

    - git

## How to Start

    - git clone 

    - cd fl-sqa-practical-assessment

    - npm install

    - There are a lot dependencies that are not updated frequently in parallel with cypress. So while installing if you are seeing     conflicts usenpm i --force.

## Features of this Framework

    - Cypress Javascript Integration

    - Environment Configured

    - Mocha HTML Results ready

    - JUnit XML Results Ready

    - Test Suite Configured

    - Test Flags/tags for filtering - https://github.com/cypress-io/cypress-grep

## To execute tests and reports
    - npx cypress run --headed --browser chrome --spec cypress/e2e
    - Once tests are executed, then reports are available in cypress/reports/index.html

### Note
  - I have automated captcha with checkbox not a robot but haven't automated with image selection. I have tried with cypress.intercept() method with captcha API but no success.
  - tried appraoch is available in before() hook section.
  - For time being of this assignment, we have to wait for 60 to 120 seconds and manually select the image to validate the captcha.


    
