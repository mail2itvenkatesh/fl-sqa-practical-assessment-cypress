// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import EnvURLGetter from "./envURLGetterUtil";
//Call getBaseUrl() to get environment specific url value
const url = new EnvURLGetter().getBaseUrl()

Cypress.Commands.add("getBaseURL", (subPath)=>{
    // cy.visit(url+subPath,{ headers: { "Accept-Encoding": "gzip, deflate, br" } })
    cy.visit(url+subPath)
})

// Navigate to iFrame element document body and will load until the document is ready to view.
// This method is effective for single iframe available.
Cypress.Commands.add('getIframeBody', (selector) => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    cy.log('getIframeBody')
  
    return cy
        .get(selector, { log: false,timeout:10000 })
        .its('0.contentDocument.body', { log: false }).should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then((body) => cy.wrap(body, { log: false }))
  })
